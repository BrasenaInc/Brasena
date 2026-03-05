import { db } from "@/db";
import { notificationLog } from "@/db/schema";
import { desc } from "drizzle-orm";
import { formatOrderId } from "@/lib/format";
import {
  notificationTypeLabel,
  notificationStatusLabel,
} from "@/lib/notification-labels";

export default async function NotificationsPage() {
  const logs = await db
    .select()
    .from(notificationLog)
    .orderBy(desc(notificationLog.createdAt))
    .limit(100);

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <header className="mb-8">
          <h1 className="font-serif text-3xl font-bold text-foreground">
            Notification Log
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Last 100 notifications sent by the system
          </p>
        </header>

        {logs.length === 0 ? (
          <div className="rounded-xl border border-border bg-card px-6 py-16 text-center">
            <p className="text-muted-foreground">No notifications sent yet.</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Notifications will appear here after orders are placed.
            </p>
          </div>
        ) : (
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/30 text-left text-xs uppercase tracking-widest text-muted-foreground">
                  <th className="px-6 py-4 font-medium">Type</th>
                  <th className="px-6 py-4 font-medium">Order</th>
                  <th className="px-6 py-4 font-medium">Recipient</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium">Provider</th>
                  <th className="px-6 py-4 font-medium">Sent</th>
                </tr>
              </thead>
              <tbody>
                {logs.map((log) => (
                  <tr
                    key={log.id}
                    className="border-b border-border transition-colors hover:bg-muted/20 last:border-b-0"
                  >
                    <td className="px-6 py-4 font-medium text-foreground">
                      {notificationTypeLabel(log.type)}
                    </td>
                    <td className="px-6 py-4 font-mono text-xs text-muted-foreground">
                      #{formatOrderId(log.orderId)}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      {log.recipient}
                    </td>
                    <td className="px-6 py-4">
                      <NotificationStatusBadge status={log.status} />
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      {log.providerId ?? "—"}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      {new Date(log.createdAt).toLocaleString("en-US", {
                        month: "short",
                        day: "numeric",
                        hour: "numeric",
                        minute: "2-digit",
                      })}
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

function NotificationStatusBadge({ status }: { status: string }) {
  const label = notificationStatusLabel(status);
  const variant =
    status === "sent"
      ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
      : status === "mock_sent"
        ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20"
        : "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${variant}`}
    >
      {label}
    </span>
  );
}
