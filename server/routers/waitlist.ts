import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { desc, eq } from "drizzle-orm";
import { router, adminProcedure, publicProcedure } from "../trpc";
import { db } from "@/db";
import { waitlistEntries } from "@/db/schema";
import { sendWaitlistConfirmation } from "@/lib/notifications/waitlist-confirmation";

export const waitlistRouter = router({
  adminList: adminProcedure.query(async () => {
    return db
      .select()
      .from(waitlistEntries)
      .orderBy(desc(waitlistEntries.createdAt));
  }),

  adminGetById: adminProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const [signup] = await db
        .select()
        .from(waitlistEntries)
        .where(eq(waitlistEntries.id, input.id));

      if (!signup) throw new TRPCError({ code: "NOT_FOUND" });

      return {
        ...signup,
        surveyAnswers: signup.surveyAnswers
          ? (JSON.parse(signup.surveyAnswers) as Record<string, string>)
          : null,
      };
    }),

  export: publicProcedure
    .input(
      z.object({
        name: z.string().min(1, "Name is required").transform((s) => s.trim()),
        email: z.string().min(1, "Email is required").email("Enter a valid email").transform((s) => s.trim().toLowerCase()),
        phone: z.union([z.string(), z.undefined()]).transform((s) => (s?.trim() || "—")),
        birthday: z.union([z.string(), z.undefined()]).transform((s) => (s?.trim() || "—")),
        address: z.union([z.string(), z.undefined()]).transform((s) => (s?.trim() || "—")),
        type: z.enum(["residential", "business"]),
        surveyAnswers: z.union([z.string(), z.undefined()]).optional().transform((s) => (s?.trim() || undefined)),
      })
    )
    .mutation(async ({ input }) => {
      try {
        const [existing] = await db
          .select()
          .from(waitlistEntries)
          .where(eq(waitlistEntries.email, input.email));

        if (existing) {
          throw new TRPCError({
            code: "CONFLICT",
            message: "Already on the waitlist",
          });
        }

        const payload = {
          name: input.name,
          email: input.email,
          phone: input.phone ?? "—",
          birthday: input.birthday ?? "—",
          address: input.address ?? "—",
          type: input.type,
          surveyAnswers: input.surveyAnswers ?? null,
        };

        await db.insert(waitlistEntries).values(payload);

        const raffleNumber = Math.floor(Math.random() * 9000) + 1000;
        sendWaitlistConfirmation({
          name: payload.name,
          email: payload.email,
          phone: payload.phone,
          type: payload.type,
          raffleNumber,
        }).catch(console.error);

        return { success: true, raffleNumber };
      } catch (err) {
        if (err instanceof TRPCError) throw err;
        console.error("[waitlist.export]", err);
        const msg =
          err instanceof Error ? err.message : "Something went wrong. Please try again.";
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: msg });
      }
    }),
});
