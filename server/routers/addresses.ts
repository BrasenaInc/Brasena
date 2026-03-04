import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { router, protectedProcedure } from "../trpc";
import { db } from "@/db";
import { addresses } from "@/db/schema";
import { eq, desc, and } from "drizzle-orm";

export const addressesRouter = router({
  list: protectedProcedure.query(async ({ ctx }) => {
    return db
      .select()
      .from(addresses)
      .where(eq(addresses.customerId, ctx.user.id))
      .orderBy(desc(addresses.isDefault), desc(addresses.createdAt));
  }),

  create: protectedProcedure
    .input(z.object({
      type: z.enum(["residential", "business"]),
      label: z.string().min(1).trim(),
      street: z.string().min(1).trim(),
      apt: z.string().optional(),
      city: z.string().min(1).trim(),
      state: z.string().min(2).max(2).toUpperCase(),
      zip: z.string().regex(/^\d{5}$/, "Must be 5 digits"),
      isDefault: z.boolean().default(false),
    }))
    .mutation(async ({ ctx, input }) => {
      if (input.isDefault) {
        await db
          .update(addresses)
          .set({ isDefault: false })
          .where(eq(addresses.customerId, ctx.user.id));
      }
      const [created] = await db
        .insert(addresses)
        .values({ ...input, customerId: ctx.user.id })
        .returning();
      return created;
    }),

  update: protectedProcedure
    .input(z.object({
      id: z.string().uuid(),
      label: z.string().min(1).trim().optional(),
      street: z.string().min(1).trim().optional(),
      apt: z.string().optional(),
      city: z.string().min(1).trim().optional(),
      state: z.string().min(2).max(2).toUpperCase().optional(),
      zip: z.string().regex(/^\d{5}$/).optional(),
      isDefault: z.boolean().optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;
      if (data.isDefault) {
        await db
          .update(addresses)
          .set({ isDefault: false })
          .where(eq(addresses.customerId, ctx.user.id));
      }
      const [updated] = await db
        .update(addresses)
        .set(data)
        .where(
          and(
            eq(addresses.id, id),
            eq(addresses.customerId, ctx.user.id)
          )
        )
        .returning();
      if (!updated) throw new TRPCError({ code: "NOT_FOUND" });
      return updated;
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      const [deleted] = await db
        .delete(addresses)
        .where(
          and(
            eq(addresses.id, input.id),
            eq(addresses.customerId, ctx.user.id)
          )
        )
        .returning();
      if (!deleted) throw new TRPCError({ code: "NOT_FOUND" });
      return { success: true };
    }),

  setDefault: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      await db
        .update(addresses)
        .set({ isDefault: false })
        .where(eq(addresses.customerId, ctx.user.id));
      const [updated] = await db
        .update(addresses)
        .set({ isDefault: true })
        .where(
          and(
            eq(addresses.id, input.id),
            eq(addresses.customerId, ctx.user.id)
          )
        )
        .returning();
      return updated;
    }),
});
