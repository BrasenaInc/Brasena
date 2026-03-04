import Link from "next/link";
import { notFound } from "next/navigation";
import { trpc } from "@/lib/trpc/server";
import { createShopT } from "@/lib/i18n/shop-translations";
import { formatCents, formatOrderId } from "@/lib/format";

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

const stepKeys = [
  "orders.stepPlaced",
  "orders.stepConfirmed",
  "orders.stepOutForDelivery",
  "orders.stepDelivered",
] as const;

function stepIndex(status: string): number {
  switch (status) {
    case "pending":
      return 0;
    case "confirmed":
      return 1;
    case "out_for_delivery":
      return 2;
    case "delivered":
      return 3;
    default:
      return -1;
  }
}

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

export default async function OrderDetailPage({
  params,
}: {
  params: Promise<{ orderId: string }>;
}) {
  const { orderId } = await params;

  try {
    const [order, user] = await Promise.all([
      trpc.orders.byId({ id: orderId }),
      trpc.users.me(),
    ]);
    const lang = (user.language ?? "en") as "en" | "es";
    const t = createShopT(lang);
    const locale = lang === "es" ? "es-ES" : "en-US";
    const steps = stepKeys.map((key, i) => ({ key, label: t(key) }));
    const currentStep = stepIndex(order.status);
    const isCancelled = order.status === "cancelled";

    const datePlaced =
      order.createdAt instanceof Date
        ? order.createdAt
        : new Date(order.createdAt);

    return (
      <div className="mx-auto max-w-3xl space-y-8">
        <Link
          href="/orders"
          className="inline-block text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          ← {t("orders.backToOrders")}
        </Link>

        {/* Section 1 — Header */}
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="font-serif text-2xl font-bold tracking-tight">
            {t("orders.order")} #{formatOrderId(order.id)}
          </h1>
          <StatusBadge
            status={order.status}
            statusLabel={t(statusTKeys[order.status] ?? "orders.status")}
          />
          <span className="text-sm text-muted-foreground">
            {t("orders.placed")}{" "}
            {datePlaced.toLocaleDateString(locale, {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>

        {/* Section 2 — Status Timeline or Cancelled */}
        {isCancelled ? (
          <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-center text-red-400">
            {t("orders.orderCancelled")}
          </div>
        ) : (
          <div className="rounded-xl border bg-card p-6">
            {/* Desktop: horizontal stepper */}
            <div className="hidden sm:flex sm:items-start">
              {steps.map((step, i) => {
                const completed = i <= currentStep;
                const isLast = i === steps.length - 1;
                return (
                  <div
                    key={step.key}
                    className="flex flex-1 flex-col items-center"
                  >
                    <div className="flex w-full items-center">
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 ${
                          completed
                            ? "border-sage bg-sage text-primary-foreground"
                            : "border-muted-foreground/30 bg-transparent"
                        }`}
                      >
                        {completed ? (
                          <span className="text-sm">✓</span>
                        ) : (
                          <span className="text-xs text-muted-foreground">
                            {i + 1}
                          </span>
                        )}
                      </div>
                      {!isLast && (
                        <div
                          className={`h-0.5 flex-1 ${
                            completed ? "bg-sage" : "bg-muted"
                          }`}
                        />
                      )}
                    </div>
                    <span
                      className={`mt-2 text-center text-xs font-medium ${
                        completed ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                );
              })}
            </div>
            {/* Mobile: vertical stepper */}
            <div className="flex flex-col gap-0 sm:hidden">
              {steps.map((step, i) => {
                const completed = i <= currentStep;
                const isLast = i === steps.length - 1;
                return (
                  <div key={step.key} className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 ${
                          completed
                            ? "border-sage bg-sage text-primary-foreground"
                            : "border-muted-foreground/30 bg-transparent"
                        }`}
                      >
                        {completed ? (
                          <span className="text-sm">✓</span>
                        ) : (
                          <span className="text-xs text-muted-foreground">
                            {i + 1}
                          </span>
                        )}
                      </div>
                      {!isLast && (
                        <div
                          className={`w-0.5 flex-1 min-h-[24px] ${
                            completed ? "bg-sage" : "bg-muted"
                          }`}
                        />
                      )}
                    </div>
                    <div className="pb-6">
                      <span
                        className={`text-xs font-medium ${
                          completed ? "text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {step.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Section 3 — Order Summary */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border bg-card p-6">
            <h2 className="mb-4 font-semibold">{t("orders.orderItems")}</h2>
            <ul className="space-y-3">
              {order.items.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between gap-4 text-sm"
                >
                  <div>
                    <p className="font-medium">{item.productName}</p>
                    <p className="text-muted-foreground">
                      {item.weightLbs} lb × {item.quantity}
                    </p>
                  </div>
                  <span className="shrink-0">
                    {formatCents(item.subtotalCents)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border bg-card p-6">
            <h2 className="mb-4 font-semibold">{t("orders.priceBreakdown")}</h2>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">{t("cart.subtotal")}</dt>
                <dd>{formatCents(order.subtotalCents)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">
                  {t("orders.deliveryFee")}
                </dt>
                <dd>{formatCents(order.deliveryFeeCents)}</dd>
              </div>
              <div className="flex justify-between border-t pt-2 font-bold">
                <dt>{t("cart.total")}</dt>
                <dd>{formatCents(order.totalCents)}</dd>
              </div>
            </dl>
            <div className="mt-4 border-t pt-4">
              <p className="text-xs text-muted-foreground">
                {t("orders.deliveryAddress")}
              </p>
              <p className="mt-1 text-sm">
                {order.deliveryStreet}
                {order.deliveryApt ? `, ${order.deliveryApt}` : ""}
              </p>
              <p className="text-sm">
                {order.deliveryCity}, {order.deliveryState} {order.deliveryZip}
              </p>
              {order.deliveryNotes && (
                <p className="mt-1 text-sm text-muted-foreground">
                  {order.deliveryNotes}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  } catch {
    notFound();
  }
}
