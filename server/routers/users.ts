import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { router, protectedProcedure } from "../trpc";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

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
});
