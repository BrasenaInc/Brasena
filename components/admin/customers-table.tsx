"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { relativeTime, formatCents } from "@/lib/format";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Customer = {
  id: string;
  fullName: string | null;
  email: string | null;
  language: string;
  createdAt: Date;
  orderCount: number;
  totalSpentCents: number;
};

export function CustomersTable({ customers }: { customers: Customer[] }) {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return customers;
    return customers.filter((c) => {
      const name = (c.fullName ?? "").toLowerCase();
      const email = (c.email ?? "").toLowerCase();
      return name.includes(q) || email.includes(q);
    });
  }, [customers, search]);

  function initials(c: Customer): string {
    if (c.fullName?.trim()) return c.fullName.trim().charAt(0).toUpperCase();
    if (c.email?.trim()) return c.email.trim().charAt(0).toUpperCase();
    return "?";
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Input
          type="search"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-xs bg-background border-border text-foreground placeholder:text-muted-foreground"
        />
      </div>

      <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/30 text-left text-xs uppercase tracking-widest text-muted-foreground">
              <th className="px-6 py-4 font-medium">Customer</th>
              <th className="px-6 py-4 font-medium">Joined</th>
              <th className="px-6 py-4 font-medium">Orders</th>
              <th className="px-6 py-4 font-medium">Total Spent</th>
              <th className="px-6 py-4 font-medium">Language</th>
              <th className="px-6 py-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-16 text-center">
                  <p className="text-muted-foreground">No customers yet</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Customers will appear here once they sign up
                  </p>
                </td>
              </tr>
            ) : (
              filtered.map((c) => (
                <tr
                  key={c.id}
                  className="border-b border-border transition-colors hover:bg-muted/20 last:border-b-0"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage/20 text-sm font-semibold text-sage">
                        {initials(c)}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">
                          {c.fullName ?? "—"}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {c.email ?? "—"}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">
                    {relativeTime(new Date(c.createdAt))}
                  </td>
                  <td className="px-6 py-4">
                    {c.orderCount === 0 ? (
                      <span className="text-muted-foreground">—</span>
                    ) : (
                      c.orderCount
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {c.totalSpentCents === 0 ? (
                      <span className="text-muted-foreground">—</span>
                    ) : (
                      formatCents(c.totalSpentCents)
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <span className="rounded-md border border-border bg-muted/30 px-2.5 py-1 text-xs font-medium text-foreground">
                      {c.language === "es" ? "ES" : "EN"}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-border text-foreground hover:bg-muted"
                      asChild
                    >
                      <Link href={`/admin/orders?customer=${c.id}`}>
                        View Orders
                      </Link>
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
