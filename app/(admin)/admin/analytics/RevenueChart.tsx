"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const SAGE = "#8BAF8E";
const GRID = "#1E2B1E";
const AXIS = "#666";
const TOOLTIP_BG = "#111814";

export type RevenueByMonthPoint = { month: string; totalCents: number };

export function RevenueChart({ data }: { data: RevenueByMonthPoint[] }) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={data} margin={{ top: 12, right: 12, bottom: 12, left: 12 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={GRID} vertical={false} />
        <XAxis
          dataKey="month"
          tick={{ fill: AXIS, fontSize: 12 }}
          axisLine={{ stroke: GRID }}
          tickLine={{ stroke: GRID }}
        />
        <YAxis
          tick={{ fill: AXIS, fontSize: 12 }}
          axisLine={{ stroke: GRID }}
          tickLine={{ stroke: GRID }}
          tickFormatter={(v) => `$${v / 100}`}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: TOOLTIP_BG,
            border: `1px solid ${GRID}`,
            borderRadius: 8,
          }}
          labelStyle={{ color: SAGE }}
          formatter={(value: unknown) => [`$${((Number(value) || 0) / 100).toFixed(2)}`, "Revenue"]}
          labelFormatter={(label) => label}
        />
        <Bar dataKey="totalCents" fill={SAGE} radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
