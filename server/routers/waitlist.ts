/**
 * Waitlist tRPC router: signup, survey, referral codes, export, unsubscribe, admin stats/draw.
 * Uses db/schema/waitlist (customers, waitlist_entries, survey_responses, referrals, events_log).
 * Email/SMS gated by NOTIFICATIONS_LIVE; failures are caught and logged, procedures return null or safe defaults.
 */
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { and, count, desc, eq, like, or, sql } from "drizzle-orm";
import { router, adminProcedure, publicProcedure } from "../trpc";
import { db } from "@/db";
import {
  customers,
  waitlistEntries,
  surveyResponses,
  referrals,
  eventsLog,
} from "@/db/schema/waitlist";
import { customAlphabet } from "nanoid";
import { sendWaitlistConfirmationSMS } from "@/lib/messaging/sms";
import {
  sendWaitlistConfirmationEmail,
  sendSurveyCompletionEmail,
  sendReferralNotificationEmail,
  sendMilestoneNotificationEmail,
} from "@/lib/messaging/email";

const referralCodeId = customAlphabet("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", 8);

const ENTRIES = {
  SIGNUP: 1,
  SURVEY: 2,
  REFERRAL: 3,
  MILESTONE_5: 10,
  MILESTONE_10: 25,
  MILESTONE_25: 75,
} as const;

function normalizePhone(phone: string): string {
  return phone.replace(/\D/g, "");
}

export const waitlistRouter = router({
  signup: publicProcedure
    .input(
      z.object({
        firstName: z.string().min(1),
        lastName: z.string().optional(),
        email: z.string().email(),
        phone: z.string().optional(),
        zipCode: z.string().optional(),
        householdSize: z.string().optional(),
        birthday: z.string().optional(),
        address: z.string().optional(),
        smsOptIn: z.boolean().default(false),
        referralCode: z.string().optional(),
        type: z.enum(["b2c", "b2b"]).default("b2c"),
        source: z.string().default("direct"),
      })
    )
    .mutation(async ({ input }) => {
      try {
        let existingByEmail: { customerId: string } | undefined;
        try {
          const [e] = await db
            .select()
            .from(customers)
            .where(eq(customers.email, input.email));
          existingByEmail = e;
        } catch (err) {
          console.error("[waitlist.signup] customers table not ready:", err);
        }
        if (existingByEmail) {
          throw new TRPCError({
            code: "CONFLICT",
            message: "This email is already on the waitlist.",
          });
        }

        const phoneDigits = input.phone ? normalizePhone(input.phone) : "";
        if (phoneDigits.length > 0) {
          let existingByPhone: { customerId: string } | undefined;
          try {
            const [p] = await db
              .select()
              .from(customers)
              .where(
                sql`regexp_replace(${customers.phone}, '\\D', '', 'g') = ${phoneDigits}`
              )
              .limit(1);
            existingByPhone = p;
          } catch (err) {
            console.error("[waitlist.signup] customers table not ready:", err);
          }
          if (existingByPhone) {
            throw new TRPCError({
              code: "CONFLICT",
              message: "This phone number is already on the waitlist.",
            });
          }
        }

        let newReferralCode: string | null = null;
        try {
          for (let attempt = 0; attempt < 10; attempt++) {
            const candidate = `BRAS${referralCodeId()}`;
            const [existing] = await db
              .select({ referralCode: waitlistEntries.referralCode })
              .from(waitlistEntries)
              .where(eq(waitlistEntries.referralCode, candidate))
              .limit(1);
            if (!existing) {
              newReferralCode = candidate;
              break;
            }
          }
        } catch (err) {
          console.error("[waitlist.signup] waitlist_entries table not ready:", err);
          newReferralCode = `BRAS${referralCodeId()}`;
        }
        if (!newReferralCode) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Could not generate a unique referral code. Please try again.",
          });
        }

      let referrerEntry: { customerId: string; entryId: string; raffleEntriesTotal: number | null } | undefined;
      if (input.referralCode) {
        try {
          const [ref] = await db
            .select()
            .from(waitlistEntries)
            .where(eq(waitlistEntries.referralCode, input.referralCode))
            .limit(1);
          if (ref) referrerEntry = { customerId: ref.customerId, entryId: ref.entryId, raffleEntriesTotal: ref.raffleEntriesTotal };
        } catch (err) {
          console.error("[waitlist.signup] waitlist_entries table not ready:", err);
        }
      }

      const fullName = [input.firstName, input.lastName].filter(Boolean).join(" ");

      const phoneToStore =
        input.phone && normalizePhone(input.phone).length > 0
          ? normalizePhone(input.phone)
          : null;

      const householdSizeParsed = input.householdSize?.trim();
      const householdSize =
        householdSizeParsed !== undefined && householdSizeParsed !== ""
          ? parseInt(householdSizeParsed, 10)
          : null;
      const householdSizeSafe =
        householdSize != null && !Number.isNaN(householdSize)
          ? householdSize
          : null;

      const [newCustomer] = await db
        .insert(customers)
        .values({
          firstName: input.firstName,
          lastName: input.lastName ?? null,
          email: input.email,
          phone: phoneToStore,
          zipCode: input.zipCode?.trim() || null,
          householdSize: householdSizeSafe,
          birthday: input.birthday?.trim() || null,
          address: input.address?.trim() || null,
          smsOptIn: input.smsOptIn,
          emailOptIn: true,
        })
        .returning();

      const [newEntry] = await db
        .insert(waitlistEntries)
        .values({
          customerId: newCustomer!.customerId,
          type: input.type,
          raffleEntriesTotal: ENTRIES.SIGNUP,
          surveyCompleted: false,
          referralCode: newReferralCode,
          referredByCustomerId: referrerEntry?.customerId && referrerEntry.customerId.length === 36 ? referrerEntry.customerId : null,
          source: input.referralCode ? "referral" : input.source,
          name: fullName,
          email: input.email,
          phone: phoneToStore,
          birthday: input.birthday ?? null,
          address: input.address ?? null,
        })
        .returning();

      await db.insert(eventsLog).values({
        customerId: newCustomer!.customerId,
        eventName: "signup",
        metadata: { source: input.source, referralCode: input.referralCode ?? null },
      });

      let referrerNewTotal = 0;
      let totalReferralsForEmail = 0;
      let milestoneEventForEmail: string | null = null;
      let milestoneBonusForEmail = 0;

      if (referrerEntry) {
        const newTotal = (referrerEntry.raffleEntriesTotal ?? 1) + ENTRIES.REFERRAL;

        const [refCountRow] = await db
          .select({ referralCount: count() })
          .from(referrals)
          .where(eq(referrals.referrerCustomerId, referrerEntry.customerId));
        const totalReferrals = Number(refCountRow?.referralCount ?? 0) + 1;

        let milestoneBonus = 0;
        let milestoneEvent: string | null = null;

        const checkMilestone = async (
          milestone: number,
          bonus: number,
          eventName: string
        ) => {
          if (totalReferrals !== milestone) return;
          const [existing] = await db
            .select()
            .from(eventsLog)
            .where(
              and(
                eq(eventsLog.customerId, referrerEntry!.customerId),
                eq(eventsLog.eventName, eventName)
              )
            )
            .limit(1);
          if (!existing) {
            milestoneBonus = bonus;
            milestoneEvent = eventName;
          }
        };
        await checkMilestone(5, ENTRIES.MILESTONE_5, "milestone_5");
        await checkMilestone(10, ENTRIES.MILESTONE_10, "milestone_10");
        await checkMilestone(25, ENTRIES.MILESTONE_25, "milestone_25");

        const finalTotal = newTotal + milestoneBonus;
        referrerNewTotal = finalTotal;
        totalReferralsForEmail = totalReferrals;
        milestoneEventForEmail = milestoneEvent;
        milestoneBonusForEmail = milestoneBonus;

        await db
          .update(waitlistEntries)
          .set({ raffleEntriesTotal: finalTotal })
          .where(eq(waitlistEntries.entryId, referrerEntry.entryId));

        await db.insert(referrals).values({
          referrerCustomerId: referrerEntry.customerId,
          referredCustomerId: newCustomer!.customerId,
          entriesAwarded: ENTRIES.REFERRAL + milestoneBonus,
        });

        await db.insert(eventsLog).values({
          customerId: referrerEntry.customerId,
          eventName: "referral",
          metadata: { referredEmail: input.email, entriesAwarded: ENTRIES.REFERRAL },
        });

        if (milestoneEvent) {
          await db.insert(eventsLog).values({
            customerId: referrerEntry.customerId,
            eventName: milestoneEvent,
            metadata: { bonusEntries: milestoneBonus, totalReferrals },
          });
        }
      }

      const [referrerCustomer] =
        referrerEntry != null
          ? await db
              .select({
                email: customers.email,
                firstName: customers.firstName,
              })
              .from(customers)
              .where(eq(customers.customerId, referrerEntry.customerId))
              .limit(1)
          : [];

      await Promise.allSettled([
        input.phone && input.smsOptIn
          ? sendWaitlistConfirmationSMS(input.phone, input.firstName, newReferralCode)
          : Promise.resolve(),
        sendWaitlistConfirmationEmail(
          input.email,
          input.firstName,
          newReferralCode,
          ENTRIES.SIGNUP
        ),
        referrerEntry && referrerCustomer
          ? sendReferralNotificationEmail(
              referrerCustomer.email,
              referrerCustomer.firstName ?? "",
              input.firstName,
              referrerEntry.referralCode,
              ENTRIES.REFERRAL,
              referrerNewTotal,
              totalReferralsForEmail
            )
          : Promise.resolve(),
        milestoneEventForEmail && referrerCustomer && referrerEntry
          ? sendMilestoneNotificationEmail(
              referrerCustomer.email,
              referrerCustomer.firstName ?? "",
              referrerEntry.referralCode,
              totalReferralsForEmail as 5 | 10 | 25,
              milestoneBonusForEmail,
              referrerNewTotal
            )
          : Promise.resolve(),
      ]);

      return {
        customerId: newCustomer!.customerId,
        referralCode: newReferralCode,
        entries: ENTRIES.SIGNUP,
        firstName: input.firstName,
        email: input.email,
        phone: input.phone ?? null,
      };
      } catch (err) {
        if (err instanceof TRPCError) throw err;
        const message =
          err instanceof Error ? err.message : String(err);
        const cause =
          err instanceof Error && (err as Error & { cause?: unknown }).cause;
        console.error("[waitlist.signup]", message, cause ?? err);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message:
            process.env.NODE_ENV === "development" && message
              ? message
              : "The waitlist is being set up. Please try again in a few minutes.",
        });
      }
    }),

  submitSurvey: publicProcedure
    .input(
      z.object({
        customerId: z.string().uuid(),
        answers: z.record(z.string(), z.any()),
      })
    )
    .mutation(async ({ input }) => {
      try {
        const [entry] = await db
          .select()
          .from(waitlistEntries)
          .where(eq(waitlistEntries.customerId, input.customerId))
          .limit(1);
        if (!entry) {
          console.error("[waitlist.submitSurvey] entry not found or table not ready");
          return { entries: 1 };
        }
        if (entry.surveyCompleted) return { entries: entry.raffleEntriesTotal ?? 1 };

        const newTotal = (entry.raffleEntriesTotal ?? 1) + ENTRIES.SURVEY;

        await db
          .update(waitlistEntries)
          .set({
            surveyCompleted: true,
            surveyAnswers: input.answers as Record<string, unknown>,
            raffleEntriesTotal: newTotal,
          })
          .where(eq(waitlistEntries.customerId, input.customerId));

        await db.insert(surveyResponses).values({
          customerId: input.customerId,
          answers: input.answers as Record<string, unknown>,
        });

        await db.insert(eventsLog).values({
          customerId: input.customerId,
          eventName: "survey_complete",
          metadata: { answers: input.answers },
        });

        const [customer] = await db
          .select()
          .from(customers)
          .where(eq(customers.customerId, input.customerId))
          .limit(1);
        if (customer) {
          await Promise.allSettled([
            sendSurveyCompletionEmail(
              customer.email,
              customer.firstName,
              entry.referralCode,
              newTotal,
              2
            ),
          ]);
        }

        return { entries: newTotal };
      } catch (err) {
        if (err instanceof TRPCError) throw err;
        console.error("[waitlist.submitSurvey] table not ready:", err);
        return { entries: 1 };
      }
    }),

  export: publicProcedure
    .input(z.object({ email: z.string().email() }))
    .query(async ({ input }) => {
      try {
        const [entry] = await db
          .select()
          .from(waitlistEntries)
          .where(eq(waitlistEntries.email, input.email))
          .orderBy(desc(waitlistEntries.createdAt))
          .limit(1);
        return entry ?? null;
      } catch (err) {
        console.error("[waitlist.export] DB query failed:", err);
        return null;
      }
    }),

  unsubscribe: publicProcedure
    .input(z.object({ email: z.string().email().trim().toLowerCase() }))
    .mutation(async ({ input }) => {
      try {
        const [c] = await db
          .select()
          .from(customers)
          .where(eq(customers.email, input.email))
          .limit(1);
        if (!c) return { removed: false };
        const id = c.customerId;
        await db.delete(referrals).where(eq(referrals.referrerCustomerId, id));
        await db.delete(referrals).where(eq(referrals.referredCustomerId, id));
        await db.delete(surveyResponses).where(eq(surveyResponses.customerId, id));
        await db.delete(eventsLog).where(eq(eventsLog.customerId, id));
        await db.delete(waitlistEntries).where(eq(waitlistEntries.customerId, id));
        await db.delete(customers).where(eq(customers.customerId, id));
        return { removed: true };
      } catch (err) {
        console.error("[waitlist.unsubscribe] table not ready:", err);
        return { removed: false };
      }
    }),

  getReferralStatus: publicProcedure
    .input(z.object({ referralCode: z.string() }))
    .query(async ({ input }) => {
      try {
        const [entry] = await db
          .select()
          .from(waitlistEntries)
          .where(eq(waitlistEntries.referralCode, input.referralCode))
          .limit(1);
        if (!entry) return null;
        return {
          referralCode: entry.referralCode,
          raffleEntriesTotal: entry.raffleEntriesTotal,
          surveyCompleted: entry.surveyCompleted,
        };
      } catch (err) {
        console.error("[waitlist.getReferralStatus] table not ready:", err);
        return null;
      }
    }),

  leaderboard: publicProcedure.query(async () => {
    try {
      const top = await db
        .select({
          name: waitlistEntries.name,
          entries: waitlistEntries.raffleEntriesTotal,
          code: waitlistEntries.referralCode,
        })
        .from(waitlistEntries)
        .orderBy(desc(waitlistEntries.raffleEntriesTotal))
        .limit(10);

      return top.map((row, i) => {
        const parts = (row.name ?? "").split(" ");
        const displayName = parts[0]
          ? parts[0] + " " + (parts[1]?.[0] ?? "") + "."
          : "Anonymous";
        return {
          rank: i + 1,
          name: displayName,
          entries: row.entries ?? 1,
          code: row.code,
        };
      });
    } catch (err) {
      console.error("[waitlist.leaderboard] table not ready:", err);
      return [];
    }
  }),

  adminStats: adminProcedure.query(async () => {
    try {
      const [totalSignups] = await db.select({ count: count() }).from(waitlistEntries);
      const [surveysCompleted] = await db
        .select({ count: count() })
        .from(waitlistEntries)
        .where(eq(waitlistEntries.surveyCompleted, true));
      const [totalReferralsRow] = await db.select({ count: count() }).from(referrals);
      const [totalEntriesRow] = await db.select({
        total: sql<number>`coalesce(sum(${waitlistEntries.raffleEntriesTotal}), 0)::int`,
      }).from(waitlistEntries);
      const [smsOptRow] = await db.select({ count: count() }).from(customers).where(eq(customers.smsOptIn, true));
      const zipRows = await db.select({ zipCode: customers.zipCode }).from(customers).where(sql`${customers.zipCode} is not null and trim(${customers.zipCode}) != ''`);

      const total = Number(totalSignups?.count ?? 0);
      const surveys = Number(surveysCompleted?.count ?? 0);
      const totalReferralsCount = Number(totalReferralsRow?.count ?? 0);
      const totalEntries = Number(totalEntriesRow?.total ?? 0);
      const smsOptIns = Number(smsOptRow?.count ?? 0);
      const distinctZips = new Set(zipRows.map((r) => (r.zipCode ?? "").replace(/\s/g, ""))).size;

      return {
        totalSignups: total,
        surveyCompletionRate: total > 0 ? Math.round((surveys / total) * 100) : 0,
        totalReferrals: totalReferralsCount,
        totalEntries,
        viralCoefficient:
          total > 0 ? parseFloat((totalReferralsCount / total).toFixed(2)) : 0,
        smsOptIns,
        distinctZips,
      };
    } catch (err) {
      console.error("[waitlist.adminStats] table not ready:", err);
      return {
        totalSignups: 0,
        surveyCompletionRate: 0,
        totalReferrals: 0,
        totalEntries: 0,
        viralCoefficient: 0,
        smsOptIns: 0,
        distinctZips: 0,
      };
    }
  }),

  adminSignupsByDay: adminProcedure
    .input(z.object({ days: z.number().min(0).default(0) }).optional())
    .query(async ({ input }) => {
      try {
        const days = input?.days ?? 0;
        const cutoff = days > 0 ? new Date() : null;
        if (cutoff) cutoff.setDate(cutoff.getDate() - days);

        const base = db
          .select({
            date: sql<string>`date_trunc('day', ${waitlistEntries.createdAt})::date::text`,
            count: count(),
          })
          .from(waitlistEntries);
        const withWhere = cutoff
          ? base.where(sql`${waitlistEntries.createdAt} >= ${cutoff.toISOString()}::timestamptz`)
          : base;
        const rows = await withWhere
          .groupBy(sql`date_trunc('day', ${waitlistEntries.createdAt})`)
          .orderBy(sql`date_trunc('day', ${waitlistEntries.createdAt})`);
        return rows;
      } catch (err) {
        console.error("[waitlist.adminSignupsByDay] table not ready:", err);
        return [];
      }
    }),

  adminSourceBreakdown: adminProcedure.query(async () => {
    try {
      const rows = await db
        .select({
          source: waitlistEntries.source,
          count: count(),
        })
        .from(waitlistEntries)
        .groupBy(waitlistEntries.source)
        .orderBy(desc(count()));
      return rows;
    } catch (err) {
      console.error("[waitlist.adminSourceBreakdown] table not ready:", err);
      return [];
    }
  }),

  adminSignups: adminProcedure
    .input(
      z.object({
        search: z.string().nullish(),
        limit: z.number().default(50),
        offset: z.number().default(0),
        page: z.number().min(1).default(1),
        pageSize: z.number().min(1).max(100).default(50),
        typeFilter: z.enum(["all", "b2c", "b2b"]).default("all"),
        surveyFilter: z.enum(["all", "completed", "pending"]).default("all"),
      })
    )
    .query(async ({ input }) => {
      try {
        const s = input.search?.trim();
        const typeCond =
          input.typeFilter === "all"
            ? undefined
            : eq(waitlistEntries.type, input.typeFilter);
        const surveyCond =
          input.surveyFilter === "all"
            ? undefined
            : input.surveyFilter === "completed"
              ? eq(waitlistEntries.surveyCompleted, true)
              : eq(waitlistEntries.surveyCompleted, false);
        const searchCond = s
          ? or(
              like(waitlistEntries.name, `%${s}%`),
              like(waitlistEntries.email, `%${s}%`)
            )
          : undefined;
        const whereClause = [searchCond, typeCond, surveyCond].filter(Boolean);
        const whereAll =
          whereClause.length > 0 ? and(...whereClause) : undefined;

        const base = db
          .select()
          .from(waitlistEntries)
          .orderBy(desc(waitlistEntries.createdAt));
        const allRows = whereAll ? await base.where(whereAll) : await base;
        const total = allRows.length;
        const start = (input.page - 1) * input.pageSize;
        const items = allRows.slice(start, start + input.pageSize);
        return { items, total };
      } catch (err) {
        console.error("[waitlist.adminSignups] table not ready:", err);
        return { items: [], total: 0 };
      }
    }),

  adminGetById: adminProcedure
    .input(z.object({ id: z.string().uuid() }))
    .query(async ({ input }) => {
      try {
        const [entry] = await db
          .select()
          .from(waitlistEntries)
          .where(eq(waitlistEntries.entryId, input.id))
          .limit(1);
        return entry ?? null;
      } catch (err) {
        console.error("[waitlist.adminGetById] table not ready:", err);
        return null;
      }
    }),

  adminClearAll: adminProcedure.mutation(async () => {
    try {
      await db.delete(referrals);
      await db.delete(surveyResponses);
      await db.delete(eventsLog);
      await db.delete(waitlistEntries);
      await db.delete(customers);
      return { success: true };
    } catch (err) {
      console.error("[waitlist.adminClearAll] table not ready:", err);
      return { success: true };
    }
  }),

  adminDrawWinner: adminProcedure.mutation(async () => {
    try {
      const entries = await db.select().from(waitlistEntries);
      if (entries.length === 0) return null;

      const pool: typeof entries = [];
      for (const entry of entries) {
        const n = entry.raffleEntriesTotal ?? 1;
        for (let i = 0; i < n; i++) pool.push(entry);
      }
      const winner = pool[Math.floor(Math.random() * pool.length)]!;

      await db.insert(eventsLog).values({
        customerId: winner.customerId,
        eventName: "raffle_draw",
        metadata: {
          drawnAt: new Date().toISOString(),
          pool: pool.length,
          winnerName: winner.name ?? null,
          winnerEmail: winner.email ?? null,
          entriesAtDraw: winner.raffleEntriesTotal ?? 1,
        },
      });

      return {
        name: winner.name,
        email: winner.email,
        entries: winner.raffleEntriesTotal,
        code: winner.referralCode,
      };
    } catch (err) {
      console.error("[waitlist.adminDrawWinner] table not ready:", err);
      return null;
    }
  }),

  adminList: adminProcedure.query(async () => {
    try {
      return await db
        .select()
        .from(waitlistEntries)
        .orderBy(desc(waitlistEntries.createdAt));
    } catch (err) {
      console.error("[waitlist.adminList] table not ready:", err);
      return [];
    }
  }),

  adminDelete: adminProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ input }) => {
      try {
        await db
          .delete(waitlistEntries)
          .where(eq(waitlistEntries.entryId, input.id));
        return { success: true };
      } catch (err) {
        console.error("[waitlist.adminDelete] table not ready:", err);
        return { success: true };
      }
    }),

  adminDrawLog: adminProcedure.query(async () => {
    try {
      const rows = await db
        .select()
        .from(eventsLog)
        .where(eq(eventsLog.eventName, "raffle_draw"))
        .orderBy(desc(eventsLog.createdAt));
      return rows.map((r) => {
        const meta = (r.metadata as { drawnAt?: string; winnerName?: string; winnerEmail?: string; entriesAtDraw?: number }) ?? {};
        return {
          date: r.createdAt,
          prizeTier: "—",
          winnerName: meta.winnerName ?? null,
          winnerEmail: meta.winnerEmail ?? null,
          entriesAtDraw: meta.entriesAtDraw ?? 0,
        };
      });
    } catch (err) {
      console.error("[waitlist.adminDrawLog] table not ready:", err);
      return [];
    }
  }),
});
