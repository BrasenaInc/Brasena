"use client";

import { useState, useMemo } from "react";
import {
  TrendingUp,
  Star,
  Phone,
  MapPin,
  Trophy,
} from "lucide-react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { trpc } from "@/lib/trpc/client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

type GrowthTab = "overview" | "survey" | "geo" | "raffle";

const COLORS = ["#6B8F71", "#8aab8f", "#a8c4ab", "#c8d8ca", "#e8ede9"];

export default function AdminGrowthPage() {
  const [activeTab, setActiveTab] = useState<GrowthTab>("overview");
  const [prizeTier, setPrizeTier] = useState<"grand" | "second" | "third">("grand");
  const [winner, setWinner] = useState<{ firstName: string; email: string; raffleEntriesTotal: number } | null>(null);
  const [drawing, setDrawing] = useState(false);

  const { data: stats } = trpc.waitlist.adminStats.useQuery();
  const { data: surveyInsights = [] } = trpc.waitlist.adminSurveyInsights.useQuery();
  const { data: geoData = [] } = trpc.waitlist.adminGeoData.useQuery();
  const { data: leaderboard = [] } = trpc.waitlist.adminLeaderboard.useQuery();
  const { data: drawLog = [] } = trpc.waitlist.adminDrawLog.useQuery();
  const drawWinner = trpc.waitlist.adminDrawWinner.useMutation({
    onSuccess: (data) => {
      setWinner({
        firstName: data.firstName ?? "—",
        email: data.email ?? "—",
        raffleEntriesTotal: data.raffleEntriesTotal,
      });
      setDrawing(false);
    },
    onError: () => setDrawing(false),
  });

  const totalSignups = stats?.totalSignups ?? 0;
  const totalReferrals = stats?.totalReferrals ?? 0;
  const totalEntries = stats?.totalEntries ?? 0;
  const surveyRate = totalSignups ? ((stats?.surveyCompleted ?? 0) / totalSignups) * 100 : 0;
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

  const surveyAgg = useMemo(() => {
    const heard: Record<string, number> = {};
    const budget: Record<string, number> = {};
    const freq: Record<string, number> = {};
    for (const { answers } of surveyInsights) {
      const a = answers as Record<string, string>;
      if (a.heard) heard[a.heard] = (heard[a.heard] ?? 0) + 1;
      if (a.spend) budget[a.spend] = (budget[a.spend] ?? 0) + 1;
      if (a.freq) freq[a.freq] = (freq[a.freq] ?? 0) + 1;
    }
    return { heard, budget, freq };
  }, [surveyInsights]);

  const maxHeard = Math.max(...Object.values(surveyAgg.heard), 1);
  const budgetData = Object.entries(surveyAgg.budget).map(([name, value]) => ({ name, value }));
  const prizes = {
    grand: { label: "Grand Prize", value: "$500 Meat Bundle" },
    second: { label: "2nd Prize", value: "$250 Freezer Box" },
    third: { label: "3rd Prize", value: "$100 Bundle + 20x $25 off" },
  };

  const tabs = [
    { id: "overview" as const, label: "Overview" },
    { id: "survey" as const, label: "Survey Insights" },
    { id: "geo" as const, label: "Geo & Sources" },
    { id: "raffle" as const, label: "Raffle Draw" },
  ];

  return (
    <div className="min-h-screen bg-[#F5F2EC]">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <h1 className="mb-6 font-serif text-3xl font-bold text-[#192019]">Growth Analytics</h1>
        <div className="mb-6 flex gap-6 border-b border-black/7">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveTab(t.id)}
              className={`pb-3 text-sm transition-colors ${
                activeTab === t.id ? "border-b-2 border-[#192019] font-semibold text-[#192019]" : "text-[#888] hover:text-[#192019]"
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
                  <div key={m.label} className="rounded-xl border border-black/7 bg-white p-5">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-[13px] font-semibold text-[#1a1a1a]">{m.label}</span>
                      <span className="text-[13px] font-bold text-[#6B8F71]">{pct.toFixed(0)}%</span>
                    </div>
                    <div className="mb-1.5 h-1.5 overflow-hidden rounded-full bg-[#F5F2EC]">
                      <div className="h-full rounded-full bg-gradient-to-r from-[#6B8F71] to-[#8aab8f]" style={{ width: `${Math.min(pct, 100)}%` }} />
                    </div>
                    <p className="text-[11px] text-[#888]">{m.current} of {m.target}{m.unit}</p>
                  </div>
                );
              })}
            </section>
          </div>
        )}

        {activeTab === "survey" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              <div className="rounded-xl border border-black/7 bg-white p-5">
                <h2 className="mb-4 font-serif text-base font-semibold text-[#192019]">Where They Heard About Us</h2>
                <div className="space-y-3">
                  {Object.entries(surveyAgg.heard)
                    .sort((a, b) => b[1] - a[1])
                    .slice(0, 6)
                    .map(([label, count]) => (
                      <div key={label} className="flex items-center gap-3">
                        <span className="w-[130px] shrink-0 truncate text-xs text-[#555]">{label || "Unknown"}</span>
                        <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#F5F2EC]">
                          <div className="h-full rounded-full bg-[#6B8F71]" style={{ width: `${(count / maxHeard) * 100}%` }} />
                        </div>
                        <span className="w-6 text-right text-xs font-semibold text-[#555]">{count}</span>
                      </div>
                    ))}
                </div>
              </div>
              <div className="rounded-xl border border-black/7 bg-white p-5">
                <h2 className="mb-4 font-serif text-base font-semibold text-[#192019]">Monthly Budget</h2>
                {budgetData.length > 0 ? (
                  <PieChart width={180} height={180}>
                    <Pie data={budgetData} cx={90} cy={90} innerRadius={50} outerRadius={70} dataKey="value" strokeWidth={0}>
                      {budgetData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                ) : (
                  <p className="text-sm text-[#888]">No data yet</p>
                )}
              </div>
              <div className="rounded-xl border border-black/7 bg-white p-5">
                <h2 className="mb-4 font-serif text-base font-semibold text-[#192019]">Purchase Frequency</h2>
                <div className="space-y-2">
                  {Object.entries(surveyAgg.freq)
                    .sort((a, b) => b[1] - a[1])
                    .map(([label, count]) => (
                      <div key={label} className="flex items-center justify-between rounded-xl bg-[#F5F2EC] px-4 py-3">
                        <span className="text-[13px] text-[#555]">{label}</span>
                        <span className="text-[15px] font-bold text-[#1a1a1a]">{count}</span>
                      </div>
                    ))}
                  {Object.keys(surveyAgg.freq).length === 0 && <p className="text-sm text-[#888]">No data yet</p>}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "geo" && (
          <div className="space-y-6">
            <div className="rounded-xl border border-black/7 bg-white p-5">
              <h2 className="mb-4 font-serif text-base font-semibold text-[#192019]">Zip Code Breakdown</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-black/7 text-left text-xs uppercase tracking-widest text-[#888]">
                      <th className="pb-3 pr-4">Zip Code</th>
                      <th className="pb-3 pr-4">Signups</th>
                      <th className="pb-3">% of Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {geoData.map((z) => (
                      <tr key={z.zip} className="border-b border-black/5">
                        <td className="py-3 pr-4 font-medium text-[#192019]">{z.zip}</td>
                        <td className="py-3 pr-4 text-[#555]">{z.count}</td>
                        <td className="py-3">
                          <div className="flex items-center gap-2">
                            <div className="h-1.5 w-[80px] overflow-hidden rounded-full bg-[#F5F2EC]">
                              <div className="h-full rounded-full bg-[#6B8F71]" style={{ width: `${z.pct}%` }} />
                            </div>
                            <span className="text-xs text-[#555]">{z.pct}%</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {geoData.length === 0 && (
                      <tr>
                        <td colSpan={3} className="py-8 text-center text-[#888]">No zip data yet</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === "raffle" && (
          <div className="space-y-6">
            <div className="rounded-xl border border-black/7 bg-white p-5">
              <h2 className="mb-4 font-serif text-base font-semibold text-[#192019]">Full Leaderboard (Top 10)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-black/7 text-left text-xs uppercase tracking-widest text-[#888]">
                      <th className="pb-3 pr-4">Rank</th>
                      <th className="pb-3 pr-4">Name</th>
                      <th className="pb-3 pr-4">Email</th>
                      <th className="pb-3 pr-4">Entries</th>
                      <th className="pb-3 pr-4">Referrals</th>
                      <th className="pb-3">Survey</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaderboard.slice(0, 10).map((e, i) => (
                      <tr
                        key={e.customerId}
                        className={`border-b border-black/5 ${
                          i === 0 ? "bg-[rgba(212,175,55,0.08)] border-[rgba(212,175,55,0.2)]" :
                          i === 1 ? "bg-[rgba(192,192,192,0.08)]" :
                          i === 2 ? "bg-[rgba(196,120,80,0.08)]" : ""
                        }`}
                      >
                        <td className="py-3 pr-4 font-serif font-bold text-[#192019]">{i + 1}</td>
                        <td className="py-3 pr-4 text-[#192019]">{e.firstName}</td>
                        <td className="py-3 pr-4 text-[#555]">{e.email}</td>
                        <td className="py-3 pr-4 font-semibold text-[#6B8F71]">{e.raffleEntriesTotal}</td>
                        <td className="py-3 pr-4 text-[#555]">{e.referralCount}</td>
                        <td className="py-3 text-[#555]">—</td>
                      </tr>
                    ))}
                    {leaderboard.length === 0 && (
                      <tr>
                        <td colSpan={6} className="py-8 text-center text-[#888]">No entries yet</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-xl border border-black/7 bg-white p-6">
              <h2 className="mb-4 font-serif text-base font-semibold text-[#192019]">Draw Winner</h2>
              <div className="mb-6 flex gap-3">
                {(["grand", "second", "third"] as const).map((tier) => (
                  <button
                    key={tier}
                    type="button"
                    onClick={() => setPrizeTier(tier)}
                    className={`rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors ${
                      prizeTier === tier ? "border-[#6B8F71] bg-[#6B8F71]/10 text-[#192019]" : "border-black/10 text-[#555] hover:bg-black/5"
                    }`}
                  >
                    <span className="block font-semibold">{prizes[tier].label}</span>
                    <span className="text-xs text-[#888]">{prizes[tier].value}</span>
                  </button>
                ))}
              </div>
              <Button
                className="bg-[#192019] text-white hover:bg-[#2a3a2a]"
                disabled={drawing}
                onClick={() => {
                  setDrawing(true);
                  drawWinner.mutate({ prizeTier });
                }}
              >
                {drawing ? "Drawing…" : "Draw Winner"}
              </Button>
            </div>

            <div className="rounded-xl border border-black/7 bg-white p-5">
              <h2 className="mb-4 font-serif text-base font-semibold text-[#192019]">Draw Audit Log</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-black/7 text-left text-xs uppercase tracking-widest text-[#888]">
                      <th className="pb-3 pr-4">Date</th>
                      <th className="pb-3 pr-4">Prize</th>
                      <th className="pb-3 pr-4">Winner</th>
                      <th className="pb-3 pr-4">Email</th>
                      <th className="pb-3">Entries at draw</th>
                    </tr>
                  </thead>
                  <tbody>
                    {drawLog.map((row) => (
                      <tr key={String(row.date)} className="border-b border-black/5">
                        <td className="py-3 pr-4 text-[#555]">{new Date(row.date).toLocaleString()}</td>
                        <td className="py-3 pr-4 text-[#192019]">{row.prizeTier}</td>
                        <td className="py-3 pr-4 text-[#192019]">{row.winnerName ?? "—"}</td>
                        <td className="py-3 pr-4 text-[#555]">{row.winnerEmail ?? "—"}</td>
                        <td className="py-3 text-[#555]">{row.entriesAtDraw}</td>
                      </tr>
                    ))}
                    {drawLog.length === 0 && (
                      <tr>
                        <td colSpan={5} className="py-8 text-center text-[#888]">No draws yet</td>
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
        <DialogContent className="max-w-md text-center border-black/10 bg-white">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#6B8F71] bg-[rgba(107,143,113,0.1)]">
            <Trophy className="h-6 w-6 text-[#6B8F71]" />
          </div>
          <DialogTitle className="font-serif text-2xl font-bold text-[#192019]">Winner Drawn</DialogTitle>
          <p className="mt-1 text-sm text-[#888]">{prizes[prizeTier].label} — {prizes[prizeTier].value}</p>
          {winner && (
            <div className="mt-6 rounded-xl bg-[#F5F2EC] px-6 py-5">
              <p className="font-serif text-2xl font-bold text-[#192019]">{winner.firstName}</p>
              <p className="mt-1 text-[13px] text-[#888]">{winner.email}</p>
              <p className="mt-2 text-[12px] text-[#6B8F71]">{winner.raffleEntriesTotal} raffle entries</p>
            </div>
          )}
          <div className="mt-6 flex gap-3">
            <Button variant="outline" className="flex-1 border-black/10" onClick={() => setWinner(null)}>Close</Button>
            <Button className="flex-1 bg-[#192019] text-white hover:bg-[#2a3a2a]">Log Winner</Button>
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
