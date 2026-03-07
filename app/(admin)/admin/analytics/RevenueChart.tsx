"use client";

import { useTheme } from "next-themes";
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

export type RevenueByMonthPoint = { month: string; totalCents: number };

const chartColors = {
  light: {
    grid: "#e5e5e0",
    axis: "#666",
    tooltipBg: "#111814",
    tooltipBorder: "#1E2B1E",
  },
  dark: {
    grid: "hsl(150 8% 25%)",
    axis: "hsl(120 6% 55%)",
    tooltipBg: "hsl(150 10% 11%)",
    tooltipBorder: "hsl(150 8% 20%)",
  },
};

export function RevenueChart({ data }: { data: RevenueByMonthPoint[] }) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const colors = chartColors[isDark ? "dark" : "light"];
  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={data} margin={{ top: 12, right: 12, bottom: 12, left: 12 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={colors.grid} vertical={false} />
        <XAxis
          dataKey="month"
          tick={{ fill: colors.axis, fontSize: 12 }}
          axisLine={{ stroke: colors.grid }}
          tickLine={{ stroke: colors.grid }}
        />
        <YAxis
          tick={{ fill: colors.axis, fontSize: 12 }}
          axisLine={{ stroke: colors.grid }}
          tickLine={{ stroke: colors.grid }}
          tickFormatter={(v) => `$${v / 100}`}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: colors.tooltipBg,
            border: `1px solid ${colors.tooltipBorder}`,
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
