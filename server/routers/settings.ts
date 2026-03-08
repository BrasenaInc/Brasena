import { z } from "zod";
import { eq, desc } from "drizzle-orm";
import { router, publicProcedure } from "../trpc";
import { adminProcedure } from "../trpc";
import { db } from "@/db";
import { siteSettings } from "@/db/schema";
import { customers, waitlistEntries } from "@/db/schema/waitlist";
import { nanoid } from "nanoid";

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
        .from(customers)
        .where(eq(customers.email, input.email));

      if (existing) {
        return { success: true, alreadyRegistered: true };
      }

      const [c] = await db
        .insert(customers)
        .values({
          firstName: input.name.split(" ")[0] ?? input.name,
          lastName: input.name.split(" ").slice(1).join(" ") || null,
          email: input.email,
          phone: input.phone !== "—" ? input.phone : null,
          address: input.address !== "—" ? input.address : null,
          birthday: input.birthday !== "—" ? input.birthday : null,
          emailOptIn: true,
        })
        .returning();

      const referralCode = `BRAS${nanoid(6).toUpperCase()}`;
      await db.insert(waitlistEntries).values({
        customerId: c!.customerId,
        type: "b2c",
        name: input.name,
        email: input.email,
        phone: input.phone !== "—" ? input.phone : null,
        birthday: input.birthday !== "—" ? input.birthday : null,
        address: input.address !== "—" ? input.address : null,
        referralCode,
        source: "direct",
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
        .where(eq(waitlistEntries.entryId, input.id));
      return { success: true };
    }),
});
