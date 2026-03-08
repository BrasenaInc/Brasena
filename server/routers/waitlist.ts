import { z } from "zod";
import { nanoid } from "nanoid";
import { TRPCError } from "@trpc/server";
import { desc, eq, sql, inArray, gte } from "drizzle-orm";
import { router, adminProcedure, publicProcedure } from "../trpc";
import { db } from "@/db";
import { waitlistEntries, eventsLog } from "@/db/schema";
import { sendWaitlistConfirmationSMS } from "@/lib/messaging/sms";
import { sendWaitlistConfirmationEmail } from "@/lib/messaging/email";

export const waitlistRouter = router({
  adminList: adminProcedure.query(async () => {
    return db
      .select()
      .from(waitlistEntries)
      .orderBy(desc(waitlistEntries.createdAt));
  }),

  adminDelete: adminProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ input }) => {
      await db.delete(waitlistEntries).where(eq(waitlistEntries.id, input.id));
      return { success: true };
    }),

  unsubscribe: publicProcedure
    .input(z.object({ email: z.string().email().trim().toLowerCase() }))
    .mutation(async ({ input }) => {
      const [existing] = await db
        .select()
        .from(waitlistEntries)
        .where(eq(waitlistEntries.email, input.email));
      if (existing) {
        await db.delete(waitlistEntries).where(eq(waitlistEntries.email, input.email));
      }
      return { success: true, removed: !!existing };
    }),

  adminClearAll: adminProcedure.mutation(async () => {
    await db.delete(eventsLog).where(eq(eventsLog.eventName, "raffle_draw"));
    await db.delete(waitlistEntries);
    return { success: true };
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
        source: z.string().optional(),
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

        const referralCode = `BRAS${nanoid(6).toUpperCase()}`;
        const payload = {
          name: input.name,
          email: input.email,
          phone: input.phone ?? "—",
          birthday: input.birthday ?? "—",
          address: input.address ?? "—",
          type: input.type,
          surveyAnswers: input.surveyAnswers ?? null,
          raffleEntriesTotal: 1,
          source: input.source ?? "direct",
        };

        await db.insert(waitlistEntries).values(payload);

        const firstName = payload.name.split(" ")[0] ?? payload.name;
        await Promise.allSettled([
          sendWaitlistConfirmationSMS(
            payload.phone,
            firstName,
            referralCode
          ),
          sendWaitlistConfirmationEmail(
            payload.email,
            firstName,
            referralCode,
            1
          ),
        ]);

        const raffleDisplay = Math.floor(Math.random() * 9000) + 1000;
        return { success: true, raffleNumber: raffleDisplay };
      } catch (err) {
        if (err instanceof TRPCError) throw err;
        console.error("[waitlist.export]", err);
        const msg =
          err instanceof Error ? err.message : "Something went wrong. Please try again.";
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: msg });
      }
    }),

  adminStats: adminProcedure.query(async () => {
    const all = await db.select().from(waitlistEntries);
    const totalSignups = all.length;
    const surveyCompleted = all.filter((e) => e.surveyAnswers != null && e.surveyAnswers.trim() !== "").length;
    const surveyCompletionRate = totalSignups > 0 ? ((surveyCompleted / totalSignups) * 100).toFixed(1) : "0";
    const totalEntries = all.reduce((sum, e) => sum + (e.raffleEntriesTotal ?? 1), 0);
    return {
      totalSignups,
      surveyCompleted,
      surveyCompletionRate,
      totalReferrals: 0,
      totalEntries,
      usersWithReferrals: 0,
      smsOptIns: 0,
      emailOptIns: totalSignups,
      distinctZips: new Set(all.map((e) => (e.address || "").match(/\b\d{5}(-\d{4})?\b/)?.[0]).filter(Boolean)).size,
    };
  }),

  adminSignupsByDay: adminProcedure
    .input(z.object({ days: z.number().min(0).default(7) }))
    .query(async ({ input }) => {
      const cutoff = new Date();
      if (input.days > 0) cutoff.setDate(cutoff.getDate() - input.days);
      const q = db
        .select({
          date: sql<string>`to_char(${waitlistEntries.createdAt}, 'YYYY-MM-DD')`,
          count: sql<number>`count(*)::int`,
        })
        .from(waitlistEntries)
        .groupBy(sql`date(${waitlistEntries.createdAt})`)
        .orderBy(sql`date(${waitlistEntries.createdAt})`);
      const rows = input.days > 0 ? await q.where(gte(waitlistEntries.createdAt, cutoff)) : await q;
      return rows;
    }),

  adminSourceBreakdown: adminProcedure.query(async () => {
    const rows = await db
      .select({
        source: waitlistEntries.source,
        count: sql<number>`count(*)::int`,
      })
      .from(waitlistEntries)
      .groupBy(waitlistEntries.source)
      .orderBy(desc(sql`count(*)`));
    return rows.map((r) => ({ source: r.source ?? "direct", count: r.count }));
  }),

  adminSurveyInsights: adminProcedure.query(async () => {
    const rows = await db
      .select({ surveyAnswers: waitlistEntries.surveyAnswers })
      .from(waitlistEntries)
      .where(sql`${waitlistEntries.surveyAnswers} is not null and trim(${waitlistEntries.surveyAnswers}) != ''`);
    return rows.map((r) => ({
      answers: r.surveyAnswers ? (JSON.parse(r.surveyAnswers) as Record<string, unknown>) : {},
    }));
  }),

  adminSignups: adminProcedure
    .input(
      z.object({
        page: z.number().min(1).default(1),
        pageSize: z.number().min(1).max(100).default(50),
        search: z.string().optional(),
        typeFilter: z.enum(["all", "residential", "business"]).default("all"),
        surveyFilter: z.enum(["all", "completed", "pending"]).default("all"),
      })
    )
    .query(async ({ input }) => {
      let q = db.select().from(waitlistEntries).orderBy(desc(waitlistEntries.createdAt));
      const all = await q;
      let filtered = all;
      if (input.search?.trim()) {
        const s = input.search.trim().toLowerCase();
        filtered = filtered.filter(
          (e) =>
            (e.name ?? "").toLowerCase().includes(s) ||
            (e.email ?? "").toLowerCase().includes(s)
        );
      }
      if (input.typeFilter !== "all") filtered = filtered.filter((e) => e.type === input.typeFilter);
      if (input.surveyFilter === "completed") filtered = filtered.filter((e) => e.surveyAnswers != null && String(e.surveyAnswers).trim() !== "");
      if (input.surveyFilter === "pending") filtered = filtered.filter((e) => !e.surveyAnswers || String(e.surveyAnswers).trim() === "");
      const total = filtered.length;
      const start = (input.page - 1) * input.pageSize;
      const page = filtered.slice(start, start + input.pageSize);
      return {
        items: page.map((e) => ({
          customerId: e.id,
          firstName: e.name?.split(" ")[0] ?? e.name,
          name: e.name,
          email: e.email,
          phone: e.phone,
          type: e.type,
          raffleEntriesTotal: e.raffleEntriesTotal ?? 1,
          surveyCompleted: !!(e.surveyAnswers != null && String(e.surveyAnswers).trim() !== ""),
          source: e.source ?? "direct",
          createdAt: e.createdAt,
        })),
        total,
      };
    }),

  adminGeoData: adminProcedure.query(async () => {
    const all = await db.select({ address: waitlistEntries.address }).from(waitlistEntries);
    const zipCount = new Map<string, number>();
    for (const row of all) {
      const match = (row.address || "").match(/\b(\d{5})(-\d{4})?\b/);
      const zip = match ? match[1] : "unknown";
      zipCount.set(zip, (zipCount.get(zip) ?? 0) + 1);
    }
    const total = all.length;
    return Array.from(zipCount.entries())
      .map(([zip, count]) => ({ zip, count, pct: total > 0 ? ((count / total) * 100).toFixed(1) : "0" }))
      .sort((a, b) => b.count - a.count);
  }),

  adminLeaderboard: adminProcedure.query(async () => {
    const rows = await db
      .select({
        id: waitlistEntries.id,
        name: waitlistEntries.name,
        email: waitlistEntries.email,
        raffleEntriesTotal: waitlistEntries.raffleEntriesTotal,
      })
      .from(waitlistEntries)
      .orderBy(desc(waitlistEntries.raffleEntriesTotal))
      .limit(20);
    return rows.map((r) => ({
      customerId: r.id,
      firstName: r.name?.split(" ")[0] ?? r.name,
      email: r.email,
      raffleEntriesTotal: r.raffleEntriesTotal ?? 1,
      referralCount: 0,
    }));
  }),

  adminDrawWinner: adminProcedure
    .input(z.object({ prizeTier: z.enum(["grand", "second", "third"]) }))
    .mutation(async ({ input }) => {
      const entries = await db.select().from(waitlistEntries);
      const tickets: { id: string; name: string | null; email: string | null; raffleEntriesTotal: number }[] = [];
      for (const e of entries) {
        const n = e.raffleEntriesTotal ?? 1;
        for (let i = 0; i < n; i++) {
          tickets.push({
            id: e.id,
            name: e.name,
            email: e.email,
            raffleEntriesTotal: e.raffleEntriesTotal ?? 1,
          });
        }
      }
      if (tickets.length === 0) throw new TRPCError({ code: "BAD_REQUEST", message: "No raffle entries" });
      const idx = Math.floor(Math.random() * tickets.length);
      const winner = tickets[idx];
      await db.insert(eventsLog).values({
        eventName: "raffle_draw",
        metadata: {
          prizeTier: input.prizeTier,
          winnerId: winner.id,
          entriesAtDraw: winner.raffleEntriesTotal,
        } as unknown as Record<string, unknown>,
      });
      return {
        customerId: winner.id,
        firstName: winner.name?.split(" ")[0] ?? winner.name ?? "—",
        email: winner.email ?? "—",
        raffleEntriesTotal: winner.raffleEntriesTotal,
      };
    }),

  adminDrawLog: adminProcedure.query(async () => {
    const rows = await db
      .select()
      .from(eventsLog)
      .where(eq(eventsLog.eventName, "raffle_draw"))
      .orderBy(desc(eventsLog.createdAt));
    const winnerIds = rows
      .map((r) => (r.metadata as { winnerId?: string } | null)?.winnerId)
      .filter((id): id is string => !!id);
    const winners = winnerIds.length
      ? await db.select({ id: waitlistEntries.id, name: waitlistEntries.name, email: waitlistEntries.email }).from(waitlistEntries).where(inArray(waitlistEntries.id, winnerIds))
      : [];
    const winnerMap = new Map(winners.map((w) => [w.id, w]));
    return rows.map((r) => {
      const meta = (r.metadata as { prizeTier?: string; winnerId?: string; entriesAtDraw?: number } | null) ?? {};
      const w = meta.winnerId ? winnerMap.get(meta.winnerId) : null;
      return {
        date: r.createdAt,
        prizeTier: meta.prizeTier ?? "—",
        winnerId: meta.winnerId ?? "—",
        winnerName: w?.name ?? null,
        winnerEmail: w?.email ?? null,
        entriesAtDraw: meta.entriesAtDraw ?? 0,
      };
    });
  }),
});
