"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { trpc } from "@/lib/trpc/client";
import { Button } from "@/components/ui/button";

const SURVEY_LABELS: Record<string, string> = {
  heard: "How they heard about us",
  freq: "Purchase frequency",
  spend: "Monthly budget",
  priority: "Top priority",
};

function escapeCsv(s: string) {
  return `"${String(s).replace(/"/g, '""')}"`;
}

export default function AdminWaitlistPage() {
  const router = useRouter();
  const { data: signups = [] } = trpc.waitlist.adminList.useQuery();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { data: selectedUser } = trpc.waitlist.adminGetById.useQuery(
    { id: selectedId! },
    { enabled: !!selectedId }
  );

  const [filter, setFilter] = useState<"all" | "residential" | "business">("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let list =
      filter === "all"
        ? signups
        : signups.filter((s) => s.type === filter);
    const q = search.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (s) =>
          (s.name ?? "").toLowerCase().includes(q) ||
          (s.email ?? "").toLowerCase().includes(q)
      );
    }
    return list;
  }, [signups, filter, search]);

  const b2cCount = signups.filter((s) => s.type === "residential").length;
  const b2bCount = signups.filter((s) => s.type === "business").length;

  const exportCSV = () => {
    const header =
      "Name,Email,Phone,Birthday,Address,Type,Survey Completed,Joined";
    const rows = filtered.map((s) =>
      [
        escapeCsv(s.name ?? ""),
        escapeCsv(s.email ?? ""),
        escapeCsv(s.phone ?? ""),
        escapeCsv(s.birthday ?? ""),
        escapeCsv(s.address ?? ""),
        `"${s.type}"`,
        s.surveyAnswers ? "Yes" : "No",
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

  function initial(name: string | null) {
    if (name?.trim()) return name.trim().charAt(0).toUpperCase();
    return "?";
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-6 py-8">
        {/* Header row */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <h1 className="font-serif text-3xl font-bold text-foreground">Waitlist</h1>
          <Button
            variant="outline"
            size="sm"
            className="border-border text-foreground hover:bg-muted"
            onClick={exportCSV}
          >
            Export CSV
          </Button>
        </div>

        {/* Stats row */}
        <div className="mb-6 flex flex-wrap gap-2">
          <span className="rounded-full border border-sage/20 bg-sage/10 px-3 py-1 text-xs text-sage">
            {signups.length} total
          </span>
          <span className="rounded-full border border-sage/20 bg-sage/10 px-3 py-1 text-xs text-sage">
            {b2cCount} residential
          </span>
          <span className="rounded-full border border-sage/20 bg-sage/10 px-3 py-1 text-xs text-sage">
            {b2bCount} business
          </span>
        </div>

        {/* Filter tabs */}
        <div className="mb-4 flex gap-6 border-b border-border">
          {(
            [
              ["all", "All"],
              ["residential", "Residential (B2C)"],
              ["business", "Business (B2B)"],
            ] as const
          ).map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => setFilter(value)}
              className={`pb-3 text-sm transition-colors ${
                filter === value
                  ? "border-b-2 border-sage text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="mb-4">
          <input
            type="search"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-64 rounded-lg border border-border bg-background px-4 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-sage/50"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30 text-left text-xs uppercase tracking-widest text-muted-foreground">
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Type</th>
                <th className="px-4 py-3 font-medium">Phone</th>
                <th className="px-4 py-3 font-medium">Joined</th>
                <th className="px-4 py-3 font-medium">Survey</th>
                <th className="px-4 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="py-20 text-center text-muted-foreground"
                  >
                    <p>No signups yet</p>
                    <p className="mt-1 text-sm">
                      Signups will appear here once visitors join the waitlist
                    </p>
                  </td>
                </tr>
              ) : (
                filtered.map((s) => (
                  <tr
                    key={s.id}
                    className="cursor-pointer border-b border-border transition-colors hover:bg-muted/30 last:border-b-0"
                    onClick={() => setSelectedId(s.id)}
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage/15 text-sm font-semibold text-sage">
                          {initial(s.name)}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            {s.name ?? "—"}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {s.email ?? "—"}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      {s.type === "residential" ? (
                        <span className="inline-flex rounded border border-sage/30 bg-sage/15 px-2 py-0.5 text-xs font-semibold text-sage">
                          B2C
                        </span>
                      ) : (
                        <span className="inline-flex rounded border border-blue-500/30 bg-blue-500/15 px-2 py-0.5 text-xs font-semibold text-blue-400">
                          B2B
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {s.phone ?? "—"}
                    </td>
                    <td className="px-4 py-3 text-xs text-muted-foreground">
                      {new Date(s.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </td>
                    <td className="px-4 py-3">
                      {s.surveyAnswers ? (
                        <span className="inline-flex rounded border border-sage/20 bg-sage/10 px-2 py-0.5 text-xs text-sage">
                          Completed
                        </span>
                      ) : (
                        <span className="inline-flex rounded border border-yellow-500/20 bg-yellow-500/10 px-2 py-0.5 text-xs text-yellow-400">
                          Pending
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                      <button
                        type="button"
                        className="text-xs text-sage hover:underline"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedId(s.id);
                        }}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal overlay */}
      {selectedId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
          onClick={() => setSelectedId(null)}
        >
          <div
            className="w-full max-h-[85vh] max-w-[680px] overflow-y-auto rounded-2xl border border-border bg-card shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedUser && (
              <>
                {/* Modal header */}
                <div className="relative border-b border-border p-6">
                  <button
                    type="button"
                    className="absolute right-5 top-5 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-muted hover:bg-muted/80"
                    onClick={() => setSelectedId(null)}
                    aria-label="Close"
                  >
                    <X className="h-4 w-4 text-muted-foreground" />
                  </button>

                  <div className="flex flex-wrap items-start justify-between gap-4 pr-10">
                    <div className="flex items-center gap-4">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-sage/30 bg-sage/15 text-2xl font-bold text-sage">
                        {initial(selectedUser.name)}
                      </div>
                      <div>
                        <h2 className="font-serif text-2xl font-bold text-foreground">
                          {selectedUser.name ?? "—"}
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          {selectedUser.email ?? "—"}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {selectedUser.phone ?? "—"}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      {selectedUser.type === "residential" ? (
                        <span className="inline-flex rounded border border-sage/30 bg-sage/15 px-2 py-0.5 text-xs font-semibold text-sage">
                          B2C
                        </span>
                      ) : (
                        <span className="inline-flex rounded border border-blue-500/30 bg-blue-500/15 px-2 py-0.5 text-xs font-semibold text-blue-400">
                          B2B
                        </span>
                      )}
                      <p className="mt-2 text-xs text-muted-foreground">
                        Joined{" "}
                        {new Date(selectedUser.createdAt).toLocaleDateString(
                          "en-US",
                          { month: "long", day: "numeric", year: "numeric" }
                        )}
                      </p>
                      {selectedUser.surveyAnswers ? (
                        <span className="mt-2 inline-flex rounded border border-sage/20 bg-sage/10 px-2 py-0.5 text-xs text-sage">
                          Completed
                        </span>
                      ) : (
                        <span className="mt-2 inline-flex rounded border border-yellow-500/20 bg-yellow-500/10 px-2 py-0.5 text-xs text-yellow-400">
                          Pending
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Contact & Details */}
                <div className="border-b border-border p-6">
                  <h3 className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">
                    Contact & Details
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl border border-border bg-muted/30 p-4">
                      <p className="mb-1 text-xs uppercase tracking-widest text-muted-foreground">
                        Email address
                      </p>
                      <p className="text-sm font-medium text-foreground">
                        {selectedUser.email ?? "—"}
                      </p>
                    </div>
                    <div className="rounded-xl border border-border bg-muted/30 p-4">
                      <p className="mb-1 text-xs uppercase tracking-widest text-muted-foreground">
                        Phone number
                      </p>
                      <p className="text-sm font-medium text-foreground">
                        {selectedUser.phone ?? "—"}
                      </p>
                    </div>
                    <div className="rounded-xl border border-border bg-muted/30 p-4">
                      <p className="mb-1 text-xs uppercase tracking-widest text-muted-foreground">
                        Birthday
                      </p>
                      <p className="text-sm font-medium text-foreground">
                        {selectedUser.birthday ?? "—"}
                      </p>
                    </div>
                    <div className="col-span-2 rounded-xl border border-border bg-muted/30 p-4">
                      <p className="mb-1 text-xs uppercase tracking-widest text-muted-foreground">
                        Address
                      </p>
                      <p className="text-sm font-medium text-foreground">
                        {selectedUser.address ?? "—"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Survey Results */}
                <div className="p-6">
                  <h3 className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">
                    Survey Results
                    {selectedUser.surveyAnswers && (
                      <span className="ml-2 inline-flex rounded border border-sage/20 bg-sage/10 px-2 py-0.5 text-xs text-sage">
                        Completed
                      </span>
                    )}
                  </h3>

                  {selectedUser.surveyAnswers ? (
                    <div className="grid grid-cols-2 gap-4">
                      {(
                        [
                          "heard",
                          "freq",
                          "spend",
                          "priority",
                        ] as const
                      ).map((key) => {
                        const answers = selectedUser.surveyAnswers!;
                        return (
                          <div
                            key={key}
                            className="rounded-xl border border-border bg-muted/30 p-4"
                          >
                            <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
                              {SURVEY_LABELS[key] ?? key}
                            </p>
                            <p className="text-sm font-semibold text-foreground">
                              {answers[key] ?? "—"}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="rounded-xl border border-border bg-muted/30 p-6 text-center text-sm text-muted-foreground">
                      Survey not completed
                    </div>
                  )}
                </div>

                {/* Modal footer */}
                <div className="flex justify-end gap-2 border-t border-border p-6">
                  <Button
                    variant="outline"
                    className="border-border text-foreground hover:bg-muted"
                    onClick={() => setSelectedId(null)}
                  >
                    Close
                  </Button>
                  <Button
                    variant="ghost"
                    className="text-sage hover:bg-sage/10"
                    onClick={() => {
                      router.push(`/admin/orders?customer=${selectedUser.id}`);
                    }}
                  >
                    View Orders
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
