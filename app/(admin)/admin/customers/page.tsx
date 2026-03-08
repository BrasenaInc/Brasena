import Link from "next/link";
import { trpc } from "@/lib/trpc/server";
import { CustomersTable } from "@/components/admin/customers-table";
import { Button } from "@/components/ui/button";

export default async function AdminCustomersPage() {
  const [customers, waitlistSignups] = await Promise.all([
    trpc.users.adminList(),
    trpc.waitlist.adminList(),
  ]);

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <header className="mb-8">
          <div className="flex flex-wrap items-baseline gap-3">
            <h1 className="font-serif text-3xl font-bold text-foreground">
              Customers
            </h1>
            <span className="rounded-full border border-border bg-muted/50 px-3 py-1.5 text-xs font-medium text-muted-foreground">
              {customers.length} registered
            </span>
          </div>
        </header>

        <CustomersTable customers={customers} />

        <section className="mt-12">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <h2 className="font-serif text-xl font-semibold text-foreground">
              Waitlist signups
            </h2>
            <span className="rounded-full border border-border bg-muted/50 px-3 py-1.5 text-xs font-medium text-muted-foreground">
              {waitlistSignups.length} signups
            </span>
          </div>
          {waitlistSignups.length === 0 ? (
            <div className="rounded-xl border border-border bg-card px-6 py-16 text-center shadow-sm">
              <p className="text-muted-foreground">No waitlist signups yet</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Signups will appear here and on the Waitlist page
              </p>
              <Button asChild variant="outline" size="sm" className="mt-4">
                <Link href="/admin/waitlist">Open Waitlist</Link>
              </Button>
            </div>
          ) : (
            <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/30 text-left text-xs uppercase tracking-widest text-muted-foreground">
                    <th className="px-6 py-4 font-medium">Name</th>
                    <th className="px-6 py-4 font-medium">Email</th>
                    <th className="px-6 py-4 font-medium">Type</th>
                    <th className="px-6 py-4 font-medium">Joined</th>
                    <th className="px-6 py-4 font-medium">Entries</th>
                    <th className="px-6 py-4 font-medium">Survey</th>
                    <th className="px-6 py-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {waitlistSignups.map((s) => (
                    <tr
                      key={s.entryId}
                      className="border-b border-border transition-colors hover:bg-muted/20 last:border-b-0"
                    >
                      <td className="px-6 py-4">{s.name ?? "—"}</td>
                      <td className="px-6 py-4">{s.email ?? "—"}</td>
                      <td className="px-6 py-4">{s.type ?? "—"}</td>
                      <td className="px-6 py-4">
                        {s.createdAt
                          ? new Date(s.createdAt).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })
                          : "—"}
                      </td>
                      <td className="px-6 py-4">{s.raffleEntriesTotal ?? 1}</td>
                      <td className="px-6 py-4">
                        {s.surveyCompleted ? "Yes" : "No"}
                      </td>
                      <td className="px-6 py-4">
                        <Button asChild variant="ghost" size="sm">
                          <Link href="/admin/waitlist">View</Link>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
