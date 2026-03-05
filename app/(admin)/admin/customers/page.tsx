import { trpc } from "@/lib/trpc/server";
import { CustomersTable } from "@/components/admin/customers-table";

export default async function AdminCustomersPage() {
  const customers = await trpc.users.adminList();

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
      </div>
    </div>
  );
}
