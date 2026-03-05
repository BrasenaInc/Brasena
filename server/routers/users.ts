import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { router, protectedProcedure, adminProcedure } from "../trpc";
import { db } from "@/db";
import { users, orders } from "@/db/schema";
import { eq, desc, inArray, sql } from "drizzle-orm";

export const usersRouter = router({
  me: protectedProcedure.query(async ({ ctx }) => {
    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.id, ctx.user.id));

    if (!user) {
      throw new TRPCError({ code: "NOT_FOUND", message: "User not found" });
    }

    return user;
  }),

  updateProfile: protectedProcedure
    .input(z.object({
      fullName: z.string().min(1).optional(),
      phone: z.string().optional(),
      language: z.enum(['en', 'es']).optional(),
      customerType: z.enum(['residential', 'business']).optional(),
      businessName: z.string().optional(),
      ein: z.string().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      const [updated] = await db
        .update(users)
        .set({ ...input })
        .where(eq(users.id, ctx.user.id))
        .returning();
      return updated;
    }),

  getCustomerCount: adminProcedure.query(async () => {
    const [row] = await db
      .select({ count: sql<number>`count(*)::int` })
      .from(users)
      .where(eq(users.role, "customer"));
    return Number(row?.count ?? 0);
  }),

  adminList: adminProcedure.query(async () => {
    const customers = await db
      .select()
      .from(users)
      .where(eq(users.role, "customer"))
      .orderBy(desc(users.createdAt));
    if (customers.length === 0) return [];
    const orderStats = await db
      .select({
        customerId: orders.customerId,
        orderCount: sql<number>`count(*)::int`,
        totalSpentCents: sql<number>`coalesce(sum(${orders.totalCents}), 0)::int`,
      })
      .from(orders)
      .where(inArray(orders.customerId, customers.map((c) => c.id)))
      .groupBy(orders.customerId);
    const statsByCustomerId = new Map(
      orderStats.map((s) => [s.customerId, { orderCount: s.orderCount, totalSpentCents: s.totalSpentCents }])
    );
    return customers.map((c) => {
      const stats = statsByCustomerId.get(c.id);
      return {
        ...c,
        orderCount: stats?.orderCount ?? 0,
        totalSpentCents: stats?.totalSpentCents ?? 0,
      };
    });
  }),
});
