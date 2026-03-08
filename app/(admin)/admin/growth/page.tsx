"use client";

import { useState } from "react";
import {
  TrendingUp,
  Star,
  Phone,
  MapPin,
  Trophy,
} from "lucide-react";
import { trpc } from "@/lib/trpc/client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

type GrowthTab = "overview" | "raffle";

export default function AdminGrowthPage() {
  const [activeTab, setActiveTab] = useState<GrowthTab>("overview");
  const [prizeTier, setPrizeTier] = useState<"grand" | "second" | "third">("grand");
  const [winner, setWinner] = useState<{ firstName: string; email: string; raffleEntriesTotal: number } | null>(null);
  const [drawing, setDrawing] = useState(false);

  const { data: stats } = trpc.waitlist.adminStats.useQuery();
  const { data: leaderboard = [] } = trpc.waitlist.leaderboard.useQuery();
  const { data: drawLog = [] } = trpc.waitlist.adminDrawLog.useQuery();
  const drawWinner = trpc.waitlist.adminDrawWinner.useMutation({
    onSuccess: (data) => {
      if (!data) {
        setDrawing(false);
        return;
      }
      setWinner({
        firstName: (data?.name ?? "—").split(" ")[0] ?? "—",
        email: data?.email ?? "—",
        raffleEntriesTotal: data?.entries ?? 0,
      });
      setDrawing(false);
    },
    onError: () => setDrawing(false),
  });

  const totalSignups = stats?.totalSignups ?? 0;
  const totalReferrals = stats?.totalReferrals ?? 0;
  const totalEntries = stats?.totalEntries ?? 0;
  const surveyRate = stats?.surveyCompletionRate ?? 0;
  const distinctZips = stats?.distinctZips ?? 0;
  const viralCoeff = totalSignups ? totalReferrals / totalSignups : 0;
  const avgEntries = totalSignups ? totalEntries / totalSignups : 0;
  const smsRate = totalSignups ? (((stats?.smsOptIns ?? 0) / totalSignups) * 100).toFixed(1) : "0";
  const milestones = [
    { label: "100 Signups", current: totalSignups, target: 100, unit: "" },
    { label: "50% Survey Rate", current: Math.round(surveyRate), target: 50, unit: "%" },
    { label: "10 Referrals", current: totalReferrals, target: 10, unit: "" },
    { label: "5 Zip Codes", current: distinctZips, target: 5, unit: "" },
  ];

  const prizes = {
    grand: { label: "Grand Prize", value: "$500 Meat Bundle" },
    second: { label: "2nd Prize", value: "$250 Freezer Box" },
    third: { label: "3rd Prize", value: "$100 Bundle + 20x $25 off" },
  };

  const tabs = [
    { id: "overview" as const, label: "Overview" },
    { id: "raffle" as const, label: "Raffle Draw" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <h1 className="mb-6 font-serif text-3xl font-bold text-foreground">Growth Analytics</h1>
        <div className="mb-6 flex gap-6 border-b border-border">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveTab(t.id)}
              className={`pb-3 text-sm transition-colors ${
                activeTab === t.id ? "border-b-2 border-foreground font-semibold text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {activeTab === "overview" && (
          <div className="space-y-6">
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard label="Viral Coefficient" value={viralCoeff.toFixed(2)} subtext="referrals / signup" icon={<TrendingUp className="h-4 w-4" />} />
              <StatCard label="Avg Entries / Person" value={avgEntries.toFixed(1)} subtext="raffle entries" icon={<Star className="h-4 w-4" />} />
              <StatCard label="SMS Opt-in Rate" value={`${smsRate}%`} subtext="of signups" icon={<Phone className="h-4 w-4" />} />
              <StatCard label="Zip Codes Reached" value={String(distinctZips)} subtext="distinct zips" icon={<MapPin className="h-4 w-4" />} />
            </section>
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {milestones.map((m) => {
                const pct = m.target ? Math.min(100, (m.current / m.target) * 100) : 0;
                return (
                  <div key={m.label} className="rounded-xl border border-border bg-card p-5">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-[13px] font-semibold text-foreground">{m.label}</span>
                      <span className="text-[13px] font-bold text-primary">{pct.toFixed(0)}%</span>
                    </div>
                    <div className="mb-1.5 h-1.5 overflow-hidden rounded-full bg-muted">
                      <div className="h-full rounded-full bg-gradient-to-r from-primary to-sage-light" style={{ width: `${Math.min(pct, 100)}%` }} />
                    </div>
                    <p className="text-[11px] text-muted-foreground">{m.current} of {m.target}{m.unit}</p>
                  </div>
                );
              })}
            </section>
          </div>
        )}

        {activeTab === "raffle" && (
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-5">
              <h2 className="mb-4 font-serif text-base font-semibold text-foreground">Full Leaderboard (Top 10)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left text-xs uppercase tracking-widest text-muted-foreground">
                      <th className="pb-3 pr-4">Rank</th>
                      <th className="pb-3 pr-4">Name</th>
                      <th className="pb-3">Entries</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaderboard.slice(0, 10).map((e, i) => (
                      <tr
                        key={e.code}
                        className={`border-b border-border/50 ${
                          i === 0 ? "bg-amber-500/10 dark:bg-amber-400/10 border-amber-500/20 dark:border-amber-400/20" :
                          i === 1 ? "bg-slate-400/10 dark:bg-slate-400/10" :
                          i === 2 ? "bg-amber-700/10 dark:bg-amber-600/10" : ""
                        }`}
                      >
                        <td className="py-3 pr-4 font-serif font-bold text-foreground">{e.rank}</td>
                        <td className="py-3 pr-4 text-foreground">{e.name}</td>
                        <td className="py-3 font-semibold text-primary">{e.entries}</td>
                      </tr>
                    ))}
                    {leaderboard.length === 0 && (
                      <tr>
                        <td colSpan={3} className="py-8 text-center text-muted-foreground">No entries yet</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="mb-4 font-serif text-base font-semibold text-foreground">Draw Winner</h2>
              <div className="mb-6 flex gap-3">
                {(["grand", "second", "third"] as const).map((tier) => (
                  <button
                    key={tier}
                    type="button"
                    onClick={() => setPrizeTier(tier)}
                    className={`rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors ${
                      prizeTier === tier ? "border-primary bg-primary/10 text-foreground" : "border-border text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    <span className="block font-semibold">{prizes[tier].label}</span>
                    <span className="text-xs text-muted-foreground">{prizes[tier].value}</span>
                  </button>
                ))}
              </div>
              <Button
                className="bg-foreground text-background hover:bg-foreground/90"
                disabled={drawing}
                onClick={() => {
                  setDrawing(true);
                  drawWinner.mutate();
                }}
              >
                {drawing ? "Drawing…" : "Draw Winner"}
              </Button>
            </div>

            <div className="rounded-xl border border-border bg-card p-5">
              <h2 className="mb-4 font-serif text-base font-semibold text-foreground">Draw Audit Log</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left text-xs uppercase tracking-widest text-muted-foreground">
                      <th className="pb-3 pr-4">Date</th>
                      <th className="pb-3 pr-4">Prize</th>
                      <th className="pb-3 pr-4">Winner</th>
                      <th className="pb-3 pr-4">Email</th>
                      <th className="pb-3">Entries at draw</th>
                    </tr>
                  </thead>
                  <tbody>
                    {drawLog.map((row, i) => (
                      <tr key={String(row.date ?? "") + i} className="border-b border-border/50">
                        <td className="py-3 pr-4 text-muted-foreground">{row.date ? new Date(row.date).toLocaleString() : "—"}</td>
                        <td className="py-3 pr-4 text-foreground">{row.prizeTier}</td>
                        <td className="py-3 pr-4 text-foreground">{row.winnerName ?? "—"}</td>
                        <td className="py-3 pr-4 text-muted-foreground">{row.winnerEmail ?? "—"}</td>
                        <td className="py-3 text-muted-foreground">{row.entriesAtDraw}</td>
                      </tr>
                    ))}
                    {drawLog.length === 0 && (
                      <tr>
                        <td colSpan={5} className="py-8 text-center text-muted-foreground">No draws yet</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      <Dialog open={!!winner} onOpenChange={() => setWinner(null)}>
        <DialogContent className="max-w-md text-center border-border bg-card">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary bg-primary/10">
            <Trophy className="h-6 w-6 text-primary" />
          </div>
          <DialogTitle className="font-serif text-2xl font-bold text-foreground">Winner Drawn</DialogTitle>
          <p className="mt-1 text-sm text-muted-foreground">{prizes[prizeTier].label} — {prizes[prizeTier].value}</p>
          {winner && (
            <div className="mt-6 rounded-xl bg-muted px-6 py-5">
              <p className="font-serif text-2xl font-bold text-foreground">{winner.firstName}</p>
              <p className="mt-1 text-[13px] text-muted-foreground">{winner.email}</p>
              <p className="mt-2 text-[12px] text-primary">{winner.raffleEntriesTotal} raffle entries</p>
            </div>
          )}
          <div className="mt-6 flex gap-3">
            <Button variant="outline" className="flex-1 border-border" onClick={() => setWinner(null)}>Close</Button>
            <Button className="flex-1 bg-foreground text-background hover:bg-foreground/90">Log Winner</Button>
          </div>
        </DialogContent>
      </Dialog>
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
    <div className="relative overflow-hidden rounded-xl border border-border bg-card p-5">
      <div className="absolute left-0 right-0 top-0 h-[3px] rounded-t-xl bg-primary" />
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">{label}</span>
        <div className="rounded-lg bg-primary/10 p-1.5 text-primary">{icon}</div>
      </div>
      <div className="font-serif text-[32px] font-bold leading-none text-foreground">{value}</div>
      <div className="mt-2 text-[11px] text-muted-foreground">{subtext}</div>
    </div>
  );
}
