import { z } from "zod";
import { eq, desc } from "drizzle-orm";
import { router, publicProcedure } from "../trpc";
import { adminProcedure } from "../trpc";
import { db } from "@/db";
import { siteSettings, waitlistEntries } from "@/db/schema";

export const settingsRouter = router({
  getSiteSettings: publicProcedure.query(async () => {
    const [settings] = await db.select().from(siteSettings).limit(1);
    return settings ?? { waitlistEnabled: true };
  }),

  setWaitlistEnabled: adminProcedure
    .input(z.object({ enabled: z.boolean() }))
    .mutation(async ({ ctx, input }) => {
      const [existing] = await db.select().from(siteSettings).limit(1);

      if (existing) {
        const [updated] = await db
          .update(siteSettings)
          .set({
            waitlistEnabled: input.enabled,
            updatedAt: new Date(),
            updatedBy: ctx.dbUser.id,
          })
          .where(eq(siteSettings.id, existing.id))
          .returning();
        return updated;
      } else {
        const [created] = await db
          .insert(siteSettings)
          .values({
            waitlistEnabled: input.enabled,
            updatedBy: ctx.dbUser.id,
          })
          .returning();
        return created;
      }
    }),

  joinWaitlist: publicProcedure
    .input(
      z.object({
        name: z.string().min(1).trim(),
        email: z.string().email().trim().toLowerCase(),
        type: z.enum(["residential", "business"]),
        phone: z.string().default("—"),
        birthday: z.string().default("—"),
        address: z.string().default("—"),
      })
    )
    .mutation(async ({ input }) => {
      const [existing] = await db
        .select()
        .from(waitlistEntries)
        .where(eq(waitlistEntries.email, input.email));

      if (existing) {
        return { success: true, alreadyRegistered: true };
      }

      await db.insert(waitlistEntries).values({
        name: input.name,
        email: input.email,
        type: input.type,
        phone: input.phone,
        birthday: input.birthday,
        address: input.address,
      });
      return { success: true, alreadyRegistered: false };
    }),

  getWaitlistEntries: adminProcedure.query(async () => {
    return db
      .select()
      .from(waitlistEntries)
      .orderBy(desc(waitlistEntries.createdAt));
  }),

  deleteWaitlistEntry: adminProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ input }) => {
      await db
        .delete(waitlistEntries)
        .where(eq(waitlistEntries.id, input.id));
      return { success: true };
    }),
});
