import Link from "next/link";
import { notFound } from "next/navigation";
import { trpc } from "@/lib/trpc/server";
import { createShopT } from "@/lib/i18n/shop-translations";

function formatPrice(cents: number) {
  return `$${(cents / 100).toFixed(2)}`;
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
    const t = createShopT((user.language ?? "en") as "en" | "es");
    const orderNumber = `BR-${orderId.slice(0, 4).toUpperCase()}`;

    return (
      <div className="mx-auto max-w-2xl space-y-6">
        <Link
          href="/orders"
          className="inline-block text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          ← {t("orders.backToOrders")}
        </Link>
        <div className="rounded-xl border bg-card p-6">
          <h1 className="font-serif text-2xl font-bold">
            {t("orders.order")} {orderNumber}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground capitalize">
            {t("orders.status")}: {order.status.replace(/_/g, " ")}
          </p>
          <div className="mt-6 space-y-2 border-t pt-4">
            <p className="text-sm text-muted-foreground">{t("orders.deliveryAddress")}</p>
            <p>
              {order.deliveryStreet}
              {order.deliveryApt ? `, ${order.deliveryApt}` : ""}
            </p>
            <p>
              {order.deliveryCity}, {order.deliveryState} {order.deliveryZip}
            </p>
            {order.deliveryNotes && (
              <p className="text-sm text-muted-foreground pt-2">
                {t("orders.notes")}: {order.deliveryNotes}
              </p>
            )}
          </div>
          <ul className="mt-6 space-y-2 border-t pt-4">
            {order.items.map((item) => (
              <li
                key={item.id}
                className="flex justify-between text-sm"
              >
                <span>
                  {item.productName} — {item.weightLbs}lb × {item.quantity}
                </span>
                <span>{formatPrice(item.subtotalCents)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between border-t pt-4 font-semibold">
            <span>{t("orders.total")}</span>
            <span>{formatPrice(order.totalCents)}</span>
          </div>
        </div>
      </div>
    );
  } catch {
    notFound();
  }
}
