import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { trpc } from "@/lib/trpc/server";
import { createShopT } from "@/lib/i18n/shop-translations";
import { Button } from "@/components/ui/button";

function formatPrice(cents: number) {
  return `$${(cents / 100).toFixed(2)}`;
}

export default async function OrdersPage() {
  const [orders, user] = await Promise.all([
    trpc.orders.list(),
    trpc.users.me(),
  ]);
  const t = createShopT((user.language ?? "en") as "en" | "es");

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight">{t("orders.myOrders")}</h1>
      </div>
      {orders.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <ShoppingBag className="mb-4 h-12 w-12 text-muted-foreground/40" />
          <h3 className="mb-1 text-base font-medium text-muted-foreground">
            No orders yet
          </h3>
          <p className="mb-4 text-sm text-muted-foreground/60">
            {t("orders.noOrders")}
          </p>
          <Button variant="outline" asChild>
            <Link href="/home">Start shopping</Link>
          </Button>
        </div>
      ) : (
        <ul className="space-y-3">
          {orders.map((order) => (
            <li key={order.id}>
              <Link
                href={`/orders/${order.id}`}
                className="block rounded-xl border p-4 transition-colors hover:bg-accent/50"
              >
                <span className="font-mono text-sm text-muted-foreground">
                  BR-{order.id.slice(0, 4).toUpperCase()}
                </span>
                <span className="ml-2 font-medium">
                  {formatPrice(order.totalCents)}
                </span>
                <span className="ml-2 text-sm text-muted-foreground">
                  — {order.status}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
