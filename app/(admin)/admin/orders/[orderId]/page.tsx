import Link from "next/link";
import { notFound } from "next/navigation";
import { trpc } from "@/lib/trpc/server";
import { formatCents, formatOrderId } from "@/lib/format";
import { Package, MapPin } from "lucide-react";

const STATUS_LABEL: Record<string, string> = {
  pending: "Pending",
  confirmed: "Confirmed",
  out_for_delivery: "Out for Delivery",
  delivered: "Delivered",
  cancelled: "Cancelled",
};

const STATUS_BADGE_CLASSES: Record<string, string> = {
  pending: "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400",
  confirmed: "border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400",
  out_for_delivery: "border-violet-500/30 bg-violet-500/10 text-violet-600 dark:text-violet-400",
  delivered: "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  cancelled: "border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400",
};

function formatAddress(order: {
  deliveryStreet: string;
  deliveryApt: string | null;
  deliveryCity: string;
  deliveryState: string;
  deliveryZip: string;
}) {
  const line1 = order.deliveryApt
    ? `${order.deliveryStreet}, ${order.deliveryApt}`
    : order.deliveryStreet;
  return `${line1}, ${order.deliveryCity}, ${order.deliveryState} ${order.deliveryZip}`;
}

export default async function AdminOrderDetailPage({
  params,
}: {
  params: Promise<{ orderId: string }>;
}) {
  const { orderId } = await params;

  try {
    const order = await trpc.orders.adminById({ id: orderId });
    const statusLabel = STATUS_LABEL[order.status] ?? order.status.replace(/_/g, " ");
    const statusClasses = STATUS_BADGE_CLASSES[order.status] ?? "border-border bg-muted text-foreground";

    return (
      <div className="min-h-screen bg-background">
        <div className="mx-auto max-w-3xl px-6 py-8">
          <Link
            href="/admin/orders"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <span aria-hidden>←</span> Back to orders
          </Link>

          <div className="mt-8 space-y-6">
            {/* Order header card */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h1 className="font-serif text-2xl font-bold text-foreground">
                    Order #{formatOrderId(order.id)}
                  </h1>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {new Date(order.createdAt).toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <span
                  className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${statusClasses}`}
                >
                  {statusLabel}
                </span>
              </div>
            </div>

            {/* Items card */}
            <div className="rounded-xl border border-border bg-card shadow-sm">
              <div className="flex items-center gap-2 border-b border-border px-6 py-4">
                <Package className="h-4 w-4 text-muted-foreground" />
                <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  Order items
                </h2>
              </div>
              <ul className="divide-y divide-border">
                {order.items.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between px-6 py-4"
                  >
                    <div>
                      <p className="font-medium text-foreground">
                        {item.productName} — {item.weightLbs} lb × {item.quantity}
                      </p>
                    </div>
                    <p className="font-medium text-foreground">
                      {formatCents(item.subtotalCents)}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between border-t border-border px-6 py-4">
                <span className="font-semibold text-foreground">Total</span>
                <span className="font-serif text-lg font-bold text-foreground">
                  {formatCents(order.totalCents)}
                </span>
              </div>
            </div>

            {/* Delivery card */}
            <div className="rounded-xl border border-border bg-card shadow-sm">
              <div className="flex items-center gap-2 border-b border-border px-6 py-4">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  Delivery address
                </h2>
              </div>
              <div className="px-6 py-4">
                <p className="text-sm text-foreground">
                  {formatAddress(order)}
                </p>
                {order.deliveryNotes && (
                  <p className="mt-2 text-sm text-muted-foreground">
                    <span className="font-medium">Notes:</span> {order.deliveryNotes}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch {
    notFound();
  }
}
