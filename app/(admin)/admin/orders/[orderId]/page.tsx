import Link from "next/link";
import { notFound } from "next/navigation";
import { trpc } from "@/lib/trpc/server";
import { formatCents, formatOrderId } from "@/lib/format";

export default async function AdminOrderDetailPage({
  params,
}: {
  params: Promise<{ orderId: string }>;
}) {
  const { orderId } = await params;

  try {
    const order = await trpc.orders.adminById({ id: orderId });

    return (
      <div className="space-y-6 p-6">
        <Link
          href="/admin/orders"
          className="inline-block text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          ← Back to orders
        </Link>
        <div className="rounded-xl border bg-card p-6">
          <h1 className="font-serif text-2xl font-bold tracking-tight">
            Order #{formatOrderId(order.id)}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground capitalize">
            {order.status.replace(/_/g, " ")}
          </p>
          <ul className="mt-6 space-y-2 border-t pt-4">
            {order.items.map((item) => (
              <li key={item.id} className="flex justify-between text-sm">
                <span>
                  {item.productName} — {item.weightLbs} lb × {item.quantity}
                </span>
                <span>{formatCents(item.subtotalCents)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between border-t pt-4 font-semibold">
            <span>Total</span>
            <span>{formatCents(order.totalCents)}</span>
          </div>
          <div className="mt-4 border-t pt-4 text-sm text-muted-foreground">
            <p>Delivery: {order.deliveryStreet}, {order.deliveryCity}, {order.deliveryState} {order.deliveryZip}</p>
          </div>
        </div>
      </div>
    );
  } catch {
    notFound();
  }
}
