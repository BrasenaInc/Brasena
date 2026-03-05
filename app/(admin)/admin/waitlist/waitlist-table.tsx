"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";

type Signup = {
  id: string;
  name: string;
  email: string;
  phone: string;
  birthday: string;
  address: string;
  type: "residential" | "business";
  createdAt: Date;
};

const MAX_TRUNCATE = 20;

function TruncateCell({ value }: { value: string }) {
  const truncated = value.length > MAX_TRUNCATE ? `${value.slice(0, MAX_TRUNCATE)}…` : value;
  return (
    <span
      className="block max-w-[120px] truncate text-foreground/90"
      title={value || undefined}
    >
      {truncated || "—"}
    </span>
  );
}

export function WaitlistTable({ signups }: { signups: Signup[] }) {
  const [filter, setFilter] = useState<"all" | "residential" | "business">("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let list = filter === "all" ? signups : signups.filter((s) => s.type === filter);
    const q = search.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.email.toLowerCase().includes(q) ||
          (s.phone && s.phone.toLowerCase().includes(q)) ||
          (s.address && s.address.toLowerCase().includes(q))
      );
    }
    return list;
  }, [signups, filter, search]);

  const exportCSV = (data: Signup[]) => {
    const header = "Name,Email,Phone,Birthday,Address,Type,Joined";
    const rows = data.map((s) =>
      [
        `"${(s.name ?? "").replace(/"/g, '""')}"`,
        `"${(s.email ?? "").replace(/"/g, '""')}"`,
        `"${(s.phone ?? "").replace(/"/g, '""')}"`,
        `"${(s.birthday ?? "").replace(/"/g, '""')}"`,
        `"${(s.address ?? "").replace(/"/g, '""')}"`,
        `"${s.type}"`,
        `"${new Date(s.createdAt).toLocaleDateString()}"`,
      ].join(",")
    );
    const csv = [header, ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `brasena-waitlist-${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <Input
          type="search"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-xs bg-background border-border text-foreground placeholder:text-muted-foreground"
        />
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex rounded-lg border border-border bg-muted/30 p-0.5">
            {(["all", "residential", "business"] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setFilter(tab)}
                className={`rounded-md px-4 py-2 text-xs font-medium transition-colors ${
                  filter === tab
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab === "all"
                  ? "All"
                  : tab === "residential"
                    ? "Residential (B2C)"
                    : "Business (B2B)"}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => exportCSV(filtered)}
            className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
          >
            Export CSV
          </button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-sm">
        <table className="w-full min-w-[800px] text-sm table-fixed">
          <thead>
            <tr className="border-b border-border bg-muted/30 text-left text-xs uppercase tracking-widest text-muted-foreground">
              <th className="w-[14%] px-6 py-4 font-medium">Name</th>
              <th className="w-[18%] px-6 py-4 font-medium">Email</th>
              <th className="w-[12%] px-6 py-4 font-medium">Phone</th>
              <th className="w-[10%] px-6 py-4 font-medium">Birthday</th>
              <th className="w-[16%] px-6 py-4 font-medium">Address</th>
              <th className="w-[10%] px-6 py-4 font-medium">Type</th>
              <th className="w-[14%] px-6 py-4 font-medium">Joined</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-6 py-16 text-center text-muted-foreground">
                  {search.trim() ? "No signups match your search" : "No signups yet"}
                </td>
              </tr>
            ) : (
              filtered.map((s) => (
                <tr
                  key={s.id}
                  className="border-b border-border transition-colors hover:bg-muted/20 last:border-b-0"
                >
                  <td className="px-6 py-4 text-foreground break-words">
                    {s.name}
                  </td>
                  <td className="px-6 py-4 text-foreground/90 break-all">
                    {s.email}
                  </td>
                  <td className="px-6 py-4">
                    <TruncateCell value={s.phone ?? ""} />
                  </td>
                  <td className="px-6 py-4">
                    <TruncateCell value={s.birthday ?? ""} />
                  </td>
                  <td className="px-6 py-4">
                    <TruncateCell value={s.address ?? ""} />
                  </td>
                  <td className="px-6 py-4">
                    {s.type === "residential" ? (
                      <span className="inline-flex rounded-md border border-sage/30 bg-sage/10 px-2.5 py-1 text-xs font-medium text-sage">
                        B2C
                      </span>
                    ) : (
                      <span className="inline-flex rounded-md border border-blue-500/30 bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-600 dark:text-blue-400">
                        B2B
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-muted-foreground whitespace-nowrap">
                    {new Date(s.createdAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
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
