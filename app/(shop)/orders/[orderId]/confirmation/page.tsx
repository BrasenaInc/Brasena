import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle } from "lucide-react";
import { trpc } from "@/lib/trpc/server";
import { createShopT } from "@/lib/i18n/shop-translations";

export default async function OrderConfirmationPage({
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
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-sage/20">
          <CheckCircle className="h-8 w-8 text-sage" />
        </div>
        <h1 className="mb-2 font-serif text-3xl font-bold">{t("confirmation.orderPlaced")}</h1>
        <p className="mb-1 text-muted-foreground">
          {t("orders.order")}{" "}
          <span className="font-mono text-foreground">{orderNumber}</span>
        </p>
        <p className="mb-8 text-muted-foreground">
          {order.totalCents >= 15000
            ? t("confirmation.confirmShortly")
            : t("confirmation.shipUpdates")}
        </p>
        <div className="flex w-full max-w-xs flex-col gap-3">
          <Link
            href={`/orders/${orderId}`}
            className="w-full rounded-xl bg-sage px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-sage-dark"
          >
            {t("orders.trackOrder")}
          </Link>
          <Link
            href="/home"
            className="w-full rounded-xl border px-6 py-3 text-center text-sm font-medium transition-colors hover:bg-accent"
          >
            {t("orders.continueShopping")}
          </Link>
        </div>
      </div>
    );
  } catch {
    notFound();
  }
}
