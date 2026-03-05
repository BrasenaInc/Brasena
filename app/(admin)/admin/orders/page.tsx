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

  const statusBadgeClasses: Record<string, string> = {
    pending: "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400",
    confirmed: "border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400",
    out_for_delivery: "border-violet-500/30 bg-violet-500/10 text-violet-600 dark:text-violet-400",
    delivered: "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    cancelled: "border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400",
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <header className="mb-8">
          <div className="flex flex-wrap items-baseline gap-3">
            <h1 className="font-serif text-3xl font-bold text-foreground">
              Orders
            </h1>
            <span className="rounded-full border border-border bg-muted/50 px-3 py-1.5 text-xs font-medium text-muted-foreground">
              {orders.length} total
            </span>
          </div>
        </header>

        {/* Filter tabs */}
        <div className="mb-6 flex flex-wrap gap-2 border-b border-border pb-4">
          {["all", ...statusOptions].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setFilter(tab)}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                filter === tab
                  ? "border-b-2 border-sage text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab === "all" ? "All" : statusLabel[tab] ?? tab}
            </button>
          ))}
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="rounded-xl border border-border bg-card py-20 text-center shadow-sm">
            <p className="text-foreground font-medium">No orders yet</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Orders will appear here once customers checkout
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-sm">
            <table className="w-full min-w-[700px] text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/30 text-left text-xs uppercase tracking-widest text-muted-foreground">
                  <th className="px-6 py-4 font-medium">Order #</th>
                  <th className="px-6 py-4 font-medium">Customer</th>
                  <th className="px-6 py-4 font-medium">Date</th>
                  <th className="px-6 py-4 font-medium">Items</th>
                  <th className="px-6 py-4 font-medium">Total</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 text-right font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b border-border transition-colors hover:bg-muted/20 last:border-b-0"
                  >
                    <td className="px-6 py-4 font-mono text-foreground">
                      #{formatOrderId(order.id)}
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-foreground">
                          {order.customer.name ?? "—"}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {order.customer.email ?? "—"}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      {relativeTime(
                        order.createdAt instanceof Date
                          ? order.createdAt
                          : new Date(order.createdAt)
                      )}
                    </td>
                    <td className="px-6 py-4 text-foreground">{order.itemCount}</td>
                    <td className="px-6 py-4 font-medium text-foreground">
                      {formatCents(order.totalCents)}
                    </td>
                    <td className="px-6 py-4">
                      {updateStatus.isPending &&
                      updateStatus.variables?.id === order.id ? (
                        <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
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
                          className={`rounded-md border px-2.5 py-1 text-xs font-medium bg-background ${statusBadgeClasses[order.status] ?? "border-border text-foreground"}`}
                        >
                          {statusOptions.map((s) => (
                            <option key={s} value={s}>
                              {statusLabel[s]}
                            </option>
                          ))}
                        </select>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Button variant="outline" size="sm" className="border-border text-foreground hover:bg-muted" asChild>
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
    </div>
  );
}
