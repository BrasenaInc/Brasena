"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  X,
  Users,
  ClipboardCheck,
  Share2,
  Star,
  ArrowRight,
  Trash2,
  Loader2,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { trpc } from "@/lib/trpc/client";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

type WaitlistTab = "overview" | "members";

const SURVEY_LABELS: Record<string, string> = {
  heard: "How they heard about us",
  freq: "Purchase frequency",
  spend: "Monthly budget",
  priority: "Top priority",
};

function escapeCsv(s: string) {
  return `"${String(s).replace(/"/g, '""')}"`;
}

async function invalidateWaitlist(utils: ReturnType<typeof trpc.useUtils>) {
  await Promise.all([
    utils.waitlist.adminList.invalidate(),
    utils.waitlist.adminStats.invalidate(),
    utils.waitlist.adminSignupsByDay.invalidate(),
    utils.waitlist.adminSourceBreakdown.invalidate(),
    utils.waitlist.adminSurveyInsights.invalidate(),
    utils.waitlist.adminSignups.invalidate(),
    utils.waitlist.adminGeoData.invalidate(),
    utils.waitlist.adminLeaderboard.invalidate(),
    utils.waitlist.adminDrawLog.invalidate(),
    utils.settings.getWaitlistEntries.invalidate(),
  ]);
}

export default function AdminWaitlistPage() {
  const router = useRouter();
  const utils = trpc.useUtils();
  const [activeTab, setActiveTab] = useState<WaitlistTab>("overview");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [removeId, setRemoveId] = useState<string | null>(null);
  const [clearAllOpen, setClearAllOpen] = useState(false);
  const [daysFilter, setDaysFilter] = useState<7 | 30 | 0>(7);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<"all" | "residential" | "business">("all");
  const [surveyFilter, setSurveyFilter] = useState<"all" | "completed" | "pending">("all");

  const deleteOne = trpc.waitlist.adminDelete.useMutation({
    onSuccess: async (_, variables) => {
      setRemoveId(null);
      if (selectedId === variables.id) setSelectedId(null);
      await invalidateWaitlist(utils);
    },
  });
  const clearAll = trpc.waitlist.adminClearAll.useMutation({
    onSuccess: async () => {
      setClearAllOpen(false);
      setSelectedId(null);
      await invalidateWaitlist(utils);
    },
  });

  const { data: stats } = trpc.waitlist.adminStats.useQuery();
  const { data: signupsByDay = [] } = trpc.waitlist.adminSignupsByDay.useQuery({
    days: daysFilter,
  });
  const { data: sourceBreakdown = [] } = trpc.waitlist.adminSourceBreakdown.useQuery();
  const { data: leaderboard = [] } = trpc.waitlist.adminLeaderboard.useQuery();
  const { data: signupsData } = trpc.waitlist.adminSignups.useQuery({
    page: 1,
    pageSize: 500,
    search: search.trim() || undefined,
    typeFilter,
    surveyFilter,
  });
  const { data: allForExport = [] } = trpc.waitlist.adminList.useQuery(undefined, {
    enabled: activeTab === "members",
  });
  const { data: selectedUser } = trpc.waitlist.adminGetById.useQuery(
    { id: selectedId! },
    { enabled: !!selectedId }
  );

  const maxSource = Math.max(...sourceBreakdown.map((s) => s.count), 1);
  const totalSignups = stats?.totalSignups ?? 0;
  const surveyCompleted = stats?.surveyCompleted ?? 0;
  const totalEntries = stats?.totalEntries ?? 0;
  const goalPct = Math.min(100, Math.round((totalSignups / 100) * 100));
  const typeData = [
    { name: "B2C", value: allForExport.filter((s) => s.type === "residential").length },
    { name: "B2B", value: allForExport.filter((s) => s.type === "business").length },
  ].filter((d) => d.value > 0);
  if (typeData.length === 0) typeData.push({ name: "B2C", value: 0 });

  const funnelJoined = totalSignups;
  const funnelSurvey = surveyCompleted;
  const funnelReferred = stats?.usersWithReferrals ?? 0;

  function initial(name: string | null) {
    if (name?.trim()) return name.trim().charAt(0).toUpperCase();
    return "?";
  }

  function formatBirthday(value: string | null | undefined): string {
    if (!value?.trim()) return "—";
    const match = value.trim().match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (!match) return value.trim();
    const [, y, m, day] = match;
    const date = new Date(Number(y), Number(m) - 1, Number(day));
    return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  }

  function formatPhone(value: string | null | undefined): string {
    if (!value?.trim()) return "—";
    const digits = value.replace(/\D/g, "");
    if (digits.length === 10) return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
    if (digits.length === 11 && digits.startsWith("1")) return `${digits.slice(1, 4)}-${digits.slice(4, 7)}-${digits.slice(7)}`;
    return value.trim();
  }

  const exportCSV = () => {
    const header = "Name,Email,Phone,Birthday,Address,Type,Raffle Entries,Source,Survey,Joined";
    const rows = allForExport.map((s) =>
      [
        escapeCsv(s.name ?? ""),
        escapeCsv(s.email ?? ""),
        escapeCsv(s.phone ?? ""),
        escapeCsv(s.birthday ?? ""),
        escapeCsv(s.address ?? ""),
        `"${s.type}"`,
        String(s.raffleEntriesTotal ?? 1),
        escapeCsv((s as { source?: string }).source ?? "direct"),
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

  const COLORS = ["#6B8F71", "#e8ede9"];

  return (
    <div className="min-h-screen bg-[#F5F2EC]">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <h1 className="font-serif text-3xl font-bold text-[#192019]">Waitlist</h1>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="border-black/10 text-[#192019] hover:bg-black/5"
              onClick={exportCSV}
            >
              Export CSV
            </Button>
            <AlertDialog open={clearAllOpen} onOpenChange={setClearAllOpen}>
              <Button
                variant="outline"
                size="sm"
                className="border-destructive/30 text-destructive hover:bg-destructive/10"
                onClick={() => setClearAllOpen(true)}
                disabled={(stats?.totalSignups ?? 0) === 0}
              >
                Clear all data
              </Button>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Clear all waitlist data?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will permanently remove every waitlist signup and all raffle draw history.
                    Use this to start with a clean list. This cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                    onClick={() => clearAll.mutate()}
                    disabled={clearAll.isPending}
                  >
                    {clearAll.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : "Clear all"}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>

        <div className="mb-6 flex gap-6 border-b border-black/7">
          <button
            type="button"
            onClick={() => setActiveTab("overview")}
            className={`pb-3 text-sm transition-colors ${
              activeTab === "overview"
                ? "border-b-2 border-[#192019] font-semibold text-[#192019]"
                : "text-[#888] hover:text-[#192019]"
            }`}
          >
            Overview
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("members")}
            className={`pb-3 text-sm transition-colors ${
              activeTab === "members"
                ? "border-b-2 border-[#192019] font-semibold text-[#192019]"
                : "text-[#888] hover:text-[#192019]"
            }`}
          >
            All Members
          </button>
          <button
            type="button"
            onClick={() => router.push("/admin/growth")}
            className="pb-3 text-sm text-[#888] transition-colors hover:text-[#192019]"
          >
            Growth Analytics <ArrowRight className="ml-1 inline h-3 w-3" />
          </button>
        </div>

        {activeTab === "overview" && (
          <div className="space-y-6">
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard
                label="Total Signups"
                value={String(stats?.totalSignups ?? 0)}
                subtext="all time"
                icon={<Users className="h-4 w-4" />}
              />
              <StatCard
                label="Survey Completion"
                value={`${stats?.surveyCompletionRate ?? 0}%`}
                subtext="completed survey"
                icon={<ClipboardCheck className="h-4 w-4" />}
              />
              <StatCard
                label="Total Referrals"
                value={String(stats?.totalReferrals ?? 0)}
                subtext="referral count"
                icon={<Share2 className="h-4 w-4" />}
              />
              <StatCard
                label="Total Raffle Entries"
                value={String(stats?.totalEntries ?? 0)}
                subtext="entries"
                icon={<Star className="h-4 w-4" />}
              />
            </section>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_340px]">
              <div className="rounded-xl border border-black/7 bg-white p-5">
                <div className="mb-3 flex items-center justify-between">
                  <h2 className="font-serif text-base font-semibold text-[#192019]">Signups Over Time</h2>
                  <div className="flex gap-1">
                    {([7, 30, 0] as const).map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => setDaysFilter(d)}
                        className={`rounded px-2 py-1 text-xs font-medium ${
                          daysFilter === d ? "bg-[#6B8F71] text-white" : "bg-black/5 text-[#555] hover:bg-black/10"
                        }`}
                      >
                        {d === 0 ? "All" : `${d}d`}
                      </button>
                    ))}
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={200}>
                  <AreaChart data={signupsByDay}>
                    <defs>
                      <linearGradient id="sageFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#6B8F71" stopOpacity={0.18} />
                        <stop offset="100%" stopColor="#6B8F71" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
                    <XAxis dataKey="date" tick={{ fontSize: 10, fill: "#888" }} tickLine={false} axisLine={false} />
                    <YAxis tick={{ fontSize: 10, fill: "#888" }} tickLine={false} axisLine={false} allowDecimals={false} />
                    <Tooltip contentStyle={{ background: "#fff", border: "1px solid rgba(0,0,0,0.08)", borderRadius: 8, fontSize: 12 }} />
                    <Area type="monotone" dataKey="count" stroke="#6B8F71" strokeWidth={2.5} fill="url(#sageFill)" dot={{ fill: "#fff", stroke: "#6B8F71", strokeWidth: 2, r: 4 }} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="rounded-xl border border-black/7 bg-white p-5">
                <h2 className="mb-4 font-serif text-base font-semibold text-[#192019]">Source Breakdown</h2>
                <div className="space-y-3">
                  {sourceBreakdown.slice(0, 6).map((s) => (
                    <div key={s.source} className="flex items-center gap-3">
                      <span className="w-[130px] shrink-0 truncate text-xs text-[#555]">{s.source || "Unknown"}</span>
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#F5F2EC]">
                        <div
                          className="h-full rounded-full bg-[#6B8F71] transition-all"
                          style={{ width: `${(s.count / maxSource) * 100}%` }}
                        />
                      </div>
                      <span className="w-6 text-right text-xs font-semibold text-[#555]">{s.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              <div className="rounded-xl border border-black/7 bg-white p-5">
                <h2 className="mb-4 font-serif text-base font-semibold text-[#192019]">Conversion Funnel</h2>
                <div className="space-y-2">
                  <FunnelBar label="Visited page" count={funnelJoined} pct={100} color="#192019" />
                  <FunnelBar label="Joined waitlist" count={funnelJoined} pct={100} color="#6B8F71" />
                  <FunnelBar label="Survey done" count={funnelSurvey} pct={totalSignups ? (funnelSurvey / totalSignups) * 100 : 0} color="#8aab8f" />
                  <FunnelBar label="Referred someone" count={funnelReferred} pct={totalSignups ? (funnelReferred / totalSignups) * 100 : 0} color="#c8d8ca" />
                </div>
              </div>
              <div className="rounded-xl border border-black/7 bg-white p-5">
                <h2 className="mb-4 font-serif text-base font-semibold text-[#192019]">Customer Type</h2>
                <div className="flex items-center justify-center gap-4">
                  <PieChart width={100} height={100}>
                    <Pie data={typeData} cx={50} cy={50} innerRadius={28} outerRadius={42} dataKey="value" strokeWidth={0}>
                      {typeData.map((_, i) => (
                        <Cell key={i} fill={COLORS[i % COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                  <div className="text-xs text-[#555]">
                    <p>B2C: {typeData[0]?.value ?? 0}</p>
                    <p>B2B: {typeData[1]?.value ?? 0}</p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-black/7 bg-white p-5">
                <h2 className="mb-4 font-serif text-base font-semibold text-[#192019]">Leaderboard & Goal</h2>
                <ul className="mb-4 space-y-1.5">
                  {leaderboard.slice(0, 5).map((e, i) => (
                    <li key={e.customerId} className="flex items-center justify-between text-xs">
                      <span className="text-[#555]">{i + 1}. {e.firstName}.</span>
                      <span className="font-semibold text-[#6B8F71]">{e.raffleEntriesTotal} entries</span>
                    </li>
                  ))}
                </ul>
                <div>
                  <div className="mb-1 flex justify-between text-xs">
                    <span className="font-medium text-[#1a1a1a]">Goal: 100 signups</span>
                    <span className="font-bold text-[#6B8F71]">{goalPct}%</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#F5F2EC]">
                    <div className="h-full rounded-full bg-gradient-to-r from-[#6B8F71] to-[#8aab8f]" style={{ width: `${goalPct}%` }} />
                  </div>
                  <p className="mt-1 text-[11px] text-[#888]">{totalSignups} of 100</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "members" && (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <input
                type="search"
                placeholder="Search by name or email..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-64 rounded-lg border border-black/10 bg-white px-4 py-2 text-sm text-[#192019] outline-none placeholder:text-[#888] focus:border-[#6B8F71]/50"
              />
              <div className="flex gap-1">
                {(["all", "residential", "business"] as const).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTypeFilter(t)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-medium ${
                      typeFilter === t ? "bg-[#192019] text-white" : "bg-black/5 text-[#555] hover:bg-black/10"
                    }`}
                  >
                    {t === "all" ? "All" : t === "residential" ? "B2C" : "B2B"}
                  </button>
                ))}
              </div>
              <div className="flex gap-1">
                {(["all", "completed", "pending"] as const).map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSurveyFilter(s)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-medium ${
                      surveyFilter === s ? "bg-[#192019] text-white" : "bg-black/5 text-[#555] hover:bg-black/10"
                    }`}
                  >
                    {s === "all" ? "Survey: All" : s === "completed" ? "Completed" : "Pending"}
                  </button>
                ))}
              </div>
            </div>
            <div className="overflow-x-auto rounded-xl border border-black/7 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-black/7 bg-[#F5F2EC]/50 text-left text-xs uppercase tracking-widest text-[#888]">
                    <th className="px-4 py-3 font-medium">Name</th>
                    <th className="px-4 py-3 font-medium">Type</th>
                    <th className="px-4 py-3 font-medium">Phone</th>
                    <th className="px-4 py-3 font-medium">Joined</th>
                    <th className="px-4 py-3 font-medium">Entries</th>
                    <th className="px-4 py-3 font-medium">Source</th>
                    <th className="px-4 py-3 font-medium">Survey</th>
                    <th className="px-4 py-3 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {(!signupsData?.items.length) ? (
                    <tr>
                      <td colSpan={8} className="py-20 text-center text-[#888]">
                        No signups yet
                      </td>
                    </tr>
                  ) : (
                    signupsData.items.map((s) => (
                      <tr
                        key={s.customerId}
                        className="cursor-pointer border-b border-black/5 transition-colors hover:bg-black/5 last:border-b-0"
                        onClick={() => setSelectedId(s.customerId)}
                      >
                        <td className="px-4 py-3">
                          <div>
                            <p className="font-medium text-[#192019]">{s.name ?? "—"}</p>
                            <p className="text-xs text-[#888]">{s.email ?? "—"}</p>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          {s.type === "residential" ? (
                            <span className="rounded bg-[#6B8F71]/15 px-2 py-0.5 text-xs font-semibold text-[#6B8F71]">B2C</span>
                          ) : (
                            <span className="rounded bg-blue-500/15 px-2 py-0.5 text-xs font-semibold text-blue-600">B2B</span>
                          )}
                        </td>
                        <td className="px-4 py-3 text-[#555]">{s.phone ?? "—"}</td>
                        <td className="px-4 py-3 text-xs text-[#555]">
                          {new Date(s.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                        </td>
                        <td className="px-4 py-3">
                          <span className="flex items-center gap-1 text-xs font-semibold text-[#6B8F71]">
                            <Star className="h-3 w-3 fill-[#6B8F71]" />
                            {s.raffleEntriesTotal ?? 1}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span className="rounded bg-black/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#888]">
                            {(s as { source?: string }).source ?? "Direct"}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          {s.surveyCompleted ? (
                            <span className="rounded border border-[#6B8F71]/20 bg-[#6B8F71]/10 px-2 py-0.5 text-xs text-[#6B8F71]">Completed</span>
                          ) : (
                            <span className="rounded border border-amber-500/20 bg-amber-500/10 px-2 py-0.5 text-xs text-amber-600">Pending</span>
                          )}
                        </td>
                        <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              className="text-xs font-medium text-[#6B8F71] hover:underline"
                              onClick={() => setSelectedId(s.customerId)}
                            >
                              View
                            </button>
                            <AlertDialog open={removeId === s.customerId} onOpenChange={(open) => !open && setRemoveId(null)}>
                              <button
                                type="button"
                                className="rounded p-1 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                                aria-label="Remove from waitlist"
                                onClick={() => setRemoveId(s.customerId)}
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                              </button>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Remove from waitlist?</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Remove {s.email} from the waitlist? They will no longer appear in signups or raffle draws. This cannot be undone.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction
                                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                    onClick={() => deleteOne.mutate({ id: s.customerId })}
                                    disabled={deleteOne.isPending}
                                  >
                                    {deleteOne.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : "Remove"}
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {selectedId && selectedUser && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 sm:p-6"
          onClick={() => setSelectedId(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-[520px] overflow-y-auto rounded-2xl bg-white shadow-2xl ring-1 ring-black/5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative border-b border-black/7 bg-[#F5F2EC]/50 px-6 pt-6 pb-5">
              <button
                type="button"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-[#888] hover:bg-black/5 hover:text-[#192019]"
                onClick={() => setSelectedId(null)}
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-4 pr-12">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#6B8F71]/20 text-xl font-semibold text-[#6B8F71]">
                  {initial(selectedUser.name)}
                </div>
                <div className="min-w-0">
                  <h2 className="font-serif text-xl font-bold tracking-tight text-[#192019] truncate">
                    {selectedUser.name ?? "—"}
                  </h2>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    {selectedUser.type === "residential" ? (
                      <span className="rounded-md bg-[#6B8F71]/15 px-2 py-0.5 text-xs font-medium text-[#6B8F71]">B2C</span>
                    ) : (
                      <span className="rounded-md bg-blue-500/15 px-2 py-0.5 text-xs font-medium text-blue-600">B2B</span>
                    )}
                    <span className="text-xs text-[#888]">
                      Joined {new Date(selectedUser.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                    {selectedUser.surveyAnswers ? (
                      <span className="rounded-md bg-[#6B8F71]/15 px-2 py-0.5 text-xs font-medium text-[#6B8F71]">Survey done</span>
                    ) : (
                      <span className="rounded-md bg-amber-500/15 px-2 py-0.5 text-xs font-medium text-amber-600">Survey pending</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6 py-5">
              <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-[#888]">Contact & details</h3>
              <dl className="space-y-3">
                <div>
                  <dt className="text-[11px] font-medium uppercase tracking-wider text-[#888]">Email</dt>
                  <dd className="mt-0.5 text-sm text-[#192019]">{selectedUser.email ?? "—"}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-medium uppercase tracking-wider text-[#888]">Phone</dt>
                  <dd className="mt-0.5 text-sm text-[#192019]">{formatPhone(selectedUser.phone)}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-medium uppercase tracking-wider text-[#888]">Birthday</dt>
                  <dd className="mt-0.5 text-sm text-[#192019]">{formatBirthday(selectedUser.birthday)}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-medium uppercase tracking-wider text-[#888]">Address</dt>
                  <dd className="mt-0.5 text-sm text-[#192019]">{selectedUser.address ?? "—"}</dd>
                </div>
              </dl>
            </div>
            <div className="border-t border-black/7 px-6 py-5">
              <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-[#888]">
                Survey {selectedUser.surveyAnswers && <span className="ml-2 font-normal text-[#6B8F71]">· Completed</span>}
              </h3>
              {selectedUser.surveyAnswers && typeof selectedUser.surveyAnswers === "object" ? (
                <dl className="grid grid-cols-2 gap-x-6 gap-y-3">
                  {(["heard", "freq", "spend", "priority"] as const).map((key) => (
                    <div key={key}>
                      <dt className="text-[11px] font-medium uppercase tracking-wider text-[#888]">{SURVEY_LABELS[key] ?? key}</dt>
                      <dd className="mt-0.5 text-sm font-medium text-[#192019]">{(selectedUser.surveyAnswers as Record<string, string>)[key] ?? "—"}</dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <p className="text-sm text-[#888]">Not completed</p>
              )}
            </div>
            <div className="flex justify-end gap-2 border-t border-black/7 px-6 py-4">
              <Button variant="outline" size="sm" className="border-black/10" onClick={() => setSelectedId(null)}>Close</Button>
              <Button size="sm" className="bg-[#192019] text-white hover:bg-[#2a3a2a]" onClick={() => router.push(`/admin/orders?customer=${selectedUser.id}`)}>View Orders</Button>
              <AlertDialog open={removeId === selectedUser.id} onOpenChange={(open) => !open && setRemoveId(null)}>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-destructive/30 text-destructive hover:bg-destructive/10"
                  onClick={() => setRemoveId(selectedUser.id)}
                >
                  Remove from waitlist
                </Button>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Remove from waitlist?</AlertDialogTitle>
                    <AlertDialogDescription>
                      Remove {selectedUser.email} from the waitlist? They will no longer appear in signups or raffle draws. This cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                      onClick={() => deleteOne.mutate({ id: selectedUser.id })}
                      disabled={deleteOne.isPending}
                    >
                      {deleteOne.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : "Remove"}
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function StatCard({
  label,
  value,
  subtext,
  icon,
}: {
  label: string;
  value: string;
  subtext: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-black/7 bg-white p-5">
      <div className="absolute left-0 right-0 top-0 h-[3px] rounded-t-xl bg-[#6B8F71]" />
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#888]">{label}</span>
        <div className="rounded-lg bg-[rgba(107,143,113,0.1)] p-1.5 text-[#6B8F71]">{icon}</div>
      </div>
      <div className="font-serif text-[32px] font-bold leading-none text-[#1a1a1a]">{value}</div>
      <div className="mt-2 text-[11px] text-[#888]">{subtext}</div>
    </div>
  );
}

function FunnelBar({
  label,
  count,
  pct,
  color,
}: {
  label: string;
  count: number;
  pct: number;
  color: string;
}) {
  return (
    <div className="relative h-9 overflow-hidden rounded-lg bg-[#F5F2EC]">
      <div
        className="flex h-full min-w-[120px] items-center justify-between rounded-lg px-3"
        style={{ width: `${Math.max(pct, 5)}%`, background: color }}
      >
        <span className="text-xs font-medium text-white">{label}</span>
        <span className="text-xs font-bold text-white">{count} · {pct.toFixed(0)}%</span>
      </div>
    </div>
  );
}
