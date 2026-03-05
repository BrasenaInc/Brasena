import Link from "next/link";
import { trpc } from "@/lib/trpc/server";
import { formatCents, formatOrderId } from "@/lib/format";

const STATUS_LABELS: Record<string, string> = {
  pending: "Pending",
  confirmed: "Confirmed",
  out_for_delivery: "Out for Delivery",
  delivered: "Delivered",
  cancelled: "Cancelled",
};
const STATUS_CLASS: Record<string, string> = {
  pending: "text-yellow-400",
  confirmed: "text-blue-400",
  out_for_delivery: "text-purple-400",
  delivered: "text-sage",
  cancelled: "text-red-400",
};

export default async function AdminDashboardPage() {
  const [
    totalRevenue,
    orderCount,
    customerCount,
    pendingCount,
    recentOrders,
    topProducts,
  ] = await Promise.all([
    trpc.orders.getTotalRevenue(),
    trpc.orders.getOrdersCount(),
    trpc.users.getCustomerCount(),
    trpc.orders.getPendingCount(),
    trpc.orders.getRecentOrders(),
    trpc.orders.getTopProducts(),
  ]);

  const today = new Date();
  const subtitle = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-background p-6">
      <header className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
      </header>

      <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Total Revenue"
          value={formatCents(totalRevenue)}
          subtext="all time"
        />
        <StatCard
          label="Total Orders"
          value={String(orderCount)}
          subtext="all time"
        />
        <StatCard
          label="Customers"
          value={String(customerCount)}
          subtext="registered"
        />
        <StatCard
          label="Pending"
          value={String(pendingCount)}
          subtext="need attention"
          highlight={pendingCount > 0}
        />
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-serif text-lg font-semibold text-foreground">
              Recent Orders
            </h2>
            <Link
              href="/admin/orders"
              className="text-xs text-sage hover:underline"
            >
              View all →
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-xs uppercase tracking-widest text-muted-foreground">
                  <th className="pb-3 pr-4">Order #</th>
                  <th className="pb-3 pr-4">Customer</th>
                  <th className="pb-3 pr-4">Status</th>
                  <th className="pb-3 pr-4">Total</th>
                  <th className="pb-3">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-8 text-center text-muted-foreground">
                      No orders yet
                    </td>
                  </tr>
                ) : (
                  recentOrders.map((o) => (
                    <tr
                      key={o.id}
                      className="border-b border-border transition-colors hover:bg-accent"
                    >
                      <td className="py-3 pr-4 font-medium text-foreground">
                        {formatOrderId(o.id)}
                      </td>
                      <td className="py-3 pr-4 text-foreground/90">{o.customerName}</td>
                      <td className="py-3 pr-4">
                        <span
                          className={
                            STATUS_CLASS[o.status] ?? "text-muted-foreground"
                          }
                        >
                          {STATUS_LABELS[o.status] ?? o.status}
                        </span>
                      </td>
                      <td className="py-3 pr-4 text-foreground">
                        {formatCents(o.totalCents)}
                      </td>
                      <td className="py-3 text-muted-foreground">
                        {new Date(o.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="mb-4 font-serif text-lg font-semibold text-foreground">
            Top Products
          </h2>
          {topProducts.length === 0 ? (
            <p className="py-8 text-center text-sm text-muted-foreground">
              No orders yet
            </p>
          ) : (
            <ul className="space-y-3">
              {topProducts.map((p, i) => (
                <li
                  key={p.productName}
                  className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0"
                >
                  <span className="font-serif text-sage">{i + 1}.</span>
                  <span className="flex-1 px-2 text-foreground">{p.productName}</span>
                  <span className="text-muted-foreground">
                    {p.unitsSold} sold
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}

function StatCard({
  label,
  value,
  subtext,
  highlight,
}: {
  label: string;
  value: string;
  subtext: string;
  highlight?: boolean;
}) {
  return (
    <div className="rounded-xl border border-border border-l-2 border-l-sage bg-card p-5">
      <p className="text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
      <p
        className={`mt-1 font-serif text-4xl font-bold ${highlight ? "text-yellow-400" : "text-foreground"}`}
      >
        {value}
      </p>
      <p className="mt-1 text-xs text-muted-foreground">{subtext}</p>
    </div>
  );
}
