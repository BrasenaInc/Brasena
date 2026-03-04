"use client";

import * as React from "react";
import Link from "next/link";
import { trpc } from "@/lib/trpc/client";
import { formatCents, formatOrderId, relativeTime } from "@/lib/format";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

const statusOptions = [
  "pending",
  "confirmed",
  "out_for_delivery",
  "delivered",
  "cancelled",
] as const;

const statusLabel: Record<string, string> = {
  pending: "Pending",
  confirmed: "Confirmed",
  out_for_delivery: "Out for Delivery",
  delivered: "Delivered",
  cancelled: "Cancelled",
};

const statusSelectClasses: Record<string, string> = {
  pending: "text-yellow-400",
  confirmed: "text-blue-400",
  out_for_delivery: "text-purple-400",
  delivered: "text-sage",
  cancelled: "text-red-400",
};

export default function AdminOrdersPage() {
  const utils = trpc.useUtils();
  const { data: orders = [], isLoading } = trpc.orders.adminList.useQuery();
  const updateStatus = trpc.orders.adminUpdateStatus.useMutation({
    onSuccess: () => {
      void utils.orders.adminList.invalidate();
    },
    onError: () => {
      toast.error("Failed to update status");
    },
  });

  const [filter, setFilter] = React.useState<string>("all");
  const filtered =
    filter === "all"
      ? orders
      : orders.filter((o) => o.status === filter);

  return (
    <div className="space-y-6 p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="font-serif text-2xl font-bold tracking-tight">
          Orders
        </h1>
        <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm font-medium">
          {orders.length} total
        </span>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2">
        {["all", ...statusOptions].map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setFilter(tab)}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
              filter === tab
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {tab === "all" ? "All" : statusLabel[tab] ?? tab}
          </button>
        ))}
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      ) : filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <p className="text-lg font-medium text-muted-foreground">
            No orders yet
          </p>
          <p className="mt-1 text-sm text-muted-foreground/80">
            Orders will appear here once customers checkout
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full min-w-[700px] text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-4 py-3 text-left font-medium">Order #</th>
                <th className="px-4 py-3 text-left font-medium">Customer</th>
                <th className="px-4 py-3 text-left font-medium">Date</th>
                <th className="px-4 py-3 text-left font-medium">Items</th>
                <th className="px-4 py-3 text-left font-medium">Total</th>
                <th className="px-4 py-3 text-left font-medium">Status</th>
                <th className="px-4 py-3 text-right font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((order) => (
                <tr key={order.id} className="border-b last:border-0">
                  <td className="font-mono px-4 py-3">
                    {formatOrderId(order.id)}
                  </td>
                  <td className="px-4 py-3">
                    <div>
                      <p className="font-medium">
                        {order.customer.name ?? "—"}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {order.customer.email ?? "—"}
                      </p>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {relativeTime(
                      order.createdAt instanceof Date
                        ? order.createdAt
                        : new Date(order.createdAt)
                    )}
                  </td>
                  <td className="px-4 py-3">{order.itemCount}</td>
                  <td className="px-4 py-3">
                    {formatCents(order.totalCents)}
                  </td>
                  <td className="px-4 py-3">
                    {updateStatus.isPending &&
                    updateStatus.variables?.id === order.id ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <select
                        value={order.status}
                        onChange={(e) => {
                          const value = e.target
                            .value as (typeof statusOptions)[number];
                          updateStatus.mutate({
                            id: order.id,
                            status: value,
                          });
                        }}
                        className={`rounded border bg-background px-2 py-1 text-xs font-medium ${statusSelectClasses[order.status] ?? ""}`}
                      >
                        {statusOptions.map((s) => (
                          <option key={s} value={s}>
                            {statusLabel[s]}
                          </option>
                        ))}
                      </select>
                    )}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/admin/orders/${order.id}`}>View</Link>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
