import Link from "next/link";
import { trpc } from "@/lib/trpc/server";
import { createShopT } from "@/lib/i18n/shop-translations";
import { formatCents, formatOrderId } from "@/lib/format";
import { Button } from "@/components/ui/button";

const statusBadgeClasses: Record<string, string> = {
  pending: "bg-yellow-500/15 text-yellow-400 border border-yellow-500/30",
  confirmed: "bg-blue-500/15 text-blue-400 border border-blue-500/30",
  out_for_delivery:
    "bg-purple-500/15 text-purple-400 border border-purple-500/30",
  delivered: "bg-sage/15 text-sage border border-sage/30",
  cancelled: "bg-red-500/15 text-red-400 border border-red-500/30",
};

const statusTKeys: Record<string, string> = {
  pending: "orders.statusPending",
  confirmed: "orders.statusConfirmed",
  out_for_delivery: "orders.statusOutForDelivery",
  delivered: "orders.statusDelivered",
  cancelled: "orders.statusCancelled",
};

function StatusBadge({
  status,
  statusLabel,
}: {
  status: string;
  statusLabel: string;
}) {
  const classes =
    statusBadgeClasses[status] ??
    "bg-muted text-muted-foreground border border-border";
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${classes}`}
    >
      {statusLabel}
    </span>
  );
}

export default async function OrdersPage() {
  const [orders, user] = await Promise.all([
    trpc.orders.list(),
    trpc.users.me(),
  ]);
  const lang = (user.language ?? "en") as "en" | "es";
  const t = createShopT(lang);
  const locale = lang === "es" ? "es-ES" : "en-US";

  return (
    <div className="space-y-6">
      <h1 className="font-serif text-2xl font-bold tracking-tight">
        {t("orders.myOrders")}
      </h1>

      {orders.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <p className="mb-2 text-lg font-medium text-muted-foreground">
            {t("orders.noOrdersYet")}
          </p>
          <Button variant="outline" asChild>
            <Link href="/home">{t("productDetail.backToShop")}</Link>
          </Button>
        </div>
      ) : (
        <ul className="space-y-4">
          {orders.map((order) => (
            <li
              key={order.id}
              className="rounded-xl border bg-card p-4 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-sm font-semibold">
                    {t("orders.order")} #{formatOrderId(order.id)}
                  </span>
                  <StatusBadge
                    status={order.status}
                    statusLabel={t(statusTKeys[order.status] ?? "orders.status")}
                  />
                  <span className="text-sm text-muted-foreground">
                    {order.createdAt instanceof Date
                      ? order.createdAt.toLocaleDateString(locale, {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })
                      : new Date(order.createdAt).toLocaleDateString(locale, {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-medium">
                    {formatCents(order.totalCents)}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {order.items.length}{" "}
                    {order.items.length === 1
                      ? t("cart.item")
                      : t("cart.items")}
                  </span>
                  <Button asChild size="sm" variant="secondary">
                    <Link href={`/orders/${order.id}`}>
                      {t("orders.trackOrder")}
                    </Link>
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
