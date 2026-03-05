import { trpc } from "@/lib/trpc/server";
import { formatCents } from "@/lib/format";
import { RevenueChart } from "./RevenueChart";
import { StatusChart } from "./StatusChart";

function last6Months(): { month: string; totalCents: number; key: string }[] {
  const result: { month: string; totalCents: number; key: string }[] = [];
  const now = new Date();
  for (let i = 5; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    result.push({
      month: `${d.toLocaleDateString("en-US", { month: "short" })} ${y}`,
      totalCents: 0,
      key: `${y}-${m}`,
    });
  }
  return result;
}

export default async function AdminAnalyticsPage() {
  const [
    revenueByMonthRaw,
    ordersByStatus,
    averageOrderValue,
    ordersThisMonth,
    revenueThisMonth,
  ] = await Promise.all([
    trpc.analytics.revenueByMonth(),
    trpc.analytics.ordersByStatus(),
    trpc.analytics.averageOrderValue(),
    trpc.analytics.ordersThisMonth(),
    trpc.analytics.revenueThisMonth(),
  ]);

  const sixMonths = last6Months();
  revenueByMonthRaw.forEach((r) => {
    const match = sixMonths.find((s) => s.key === r.month);
    if (match) match.totalCents = r.totalCents;
  });
  const revenueByMonth = sixMonths.map((s) => ({
    month: s.month,
    totalCents: s.totalCents,
  }));

  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  const dateRangeLabel = `${
    thirtyDaysAgo.toLocaleDateString("en-US", { month: "short", day: "numeric" })
  } – ${new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" })}`;

  return (
    <div className="min-h-screen bg-background p-6">
      <header className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-foreground">Analytics</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Last 30 days · {dateRangeLabel}
        </p>
      </header>

      <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard
          label="Average Order Value"
          value={formatCents(averageOrderValue)}
        />
        <StatCard
          label="Orders this month"
          value={String(ordersThisMonth)}
        />
        <StatCard
          label="Revenue this month"
          value={formatCents(revenueThisMonth)}
        />
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="mb-4 font-serif text-lg font-semibold text-foreground">
            Revenue (6 months)
          </h2>
          <div className="h-[280px] w-full">
            <RevenueChart data={revenueByMonth} />
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="mb-4 font-serif text-lg font-semibold text-foreground">
            Orders by Status
          </h2>
          <div className="h-[280px] w-full">
            <StatusChart data={ordersByStatus} />
          </div>
        </div>
      </section>
    </div>
  );
}

function StatCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-border border-l-2 border-l-sage bg-card p-5">
      <p className="text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
      <p className="mt-1 font-serif text-4xl font-bold text-foreground">{value}</p>
    </div>
  );
}
