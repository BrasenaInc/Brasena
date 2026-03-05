import { router, adminProcedure } from "../trpc";
import { db } from "@/db";
import { orders, users } from "@/db/schema";
import { eq, ne, sql, and, gte } from "drizzle-orm";

export const analyticsRouter = router({
  revenueByMonth: adminProcedure.query(async () => {
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
    const rows = await db
      .select({
        month: sql<string>`to_char(date_trunc('month', ${orders.createdAt}), 'YYYY-MM')`,
        totalCents: sql<number>`coalesce(sum(${orders.totalCents}), 0)::bigint`,
      })
      .from(orders)
      .where(
        and(
          gte(orders.createdAt, sixMonthsAgo),
          ne(orders.status, "cancelled")
        )
      )
      .groupBy(sql`date_trunc('month', ${orders.createdAt})`)
      .orderBy(sql`date_trunc('month', ${orders.createdAt})`);
    return rows.map((r) => ({ month: r.month, totalCents: Number(r.totalCents) }));
  }),

  ordersByStatus: adminProcedure.query(async () => {
    const rows = await db
      .select({
        status: orders.status,
        count: sql<number>`count(*)::int`,
      })
      .from(orders)
      .groupBy(orders.status);
    return rows.map((r) => ({ status: r.status, count: r.count }));
  }),

  ordersByDay: adminProcedure.query(async () => {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const rows = await db
      .select({
        day: sql<string>`to_char(${orders.createdAt}, 'YYYY-MM-DD')`,
        count: sql<number>`count(*)::int`,
      })
      .from(orders)
      .where(gte(orders.createdAt, thirtyDaysAgo))
      .groupBy(sql`date(${orders.createdAt})`)
      .orderBy(sql`date(${orders.createdAt})`);
    return rows.map((r) => ({ day: r.day, count: r.count }));
  }),

  averageOrderValue: adminProcedure.query(async () => {
    const [row] = await db
      .select({
        avg: sql<number>`coalesce(avg(${orders.totalCents}), 0)::double precision`,
      })
      .from(orders)
      .where(ne(orders.status, "cancelled"));
    return Math.round(Number(row?.avg ?? 0));
  }),

  ordersThisMonth: adminProcedure.query(async () => {
    const startOfMonth = new Date();
    startOfMonth.setDate(1);
    startOfMonth.setHours(0, 0, 0, 0);
    const [row] = await db
      .select({ count: sql<number>`count(*)::int` })
      .from(orders)
      .where(gte(orders.createdAt, startOfMonth));
    return Number(row?.count ?? 0);
  }),

  revenueThisMonth: adminProcedure.query(async () => {
    const startOfMonth = new Date();
    startOfMonth.setDate(1);
    startOfMonth.setHours(0, 0, 0, 0);
    const [row] = await db
      .select({
        total: sql<number>`coalesce(sum(${orders.totalCents}), 0)::bigint`,
      })
      .from(orders)
      .where(
        and(
          gte(orders.createdAt, startOfMonth),
          ne(orders.status, "cancelled")
        )
      );
    return Number(row?.total ?? 0);
  }),

  b2cVsB2b: adminProcedure.query(async () => {
    const rows = await db
      .select({
        customerType: users.customerType,
        orderCount: sql<number>`count(*)::int`,
      })
      .from(orders)
      .innerJoin(users, eq(orders.customerId, users.id))
      .groupBy(users.customerType);
    return rows.map((r) => ({ type: r.customerType, count: r.orderCount }));
  }),
});
