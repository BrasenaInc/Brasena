"use client";

import { useTheme } from "next-themes";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";

const STATUS_COLORS: Record<string, string> = {
  pending: "#EAB308",
  confirmed: "#3B82F6",
  out_for_delivery: "#A855F7",
  delivered: "#8BAF8E",
  cancelled: "#EF4444",
};

const STATUS_LABELS: Record<string, string> = {
  pending: "Pending",
  confirmed: "Confirmed",
  out_for_delivery: "Out for Delivery",
  delivered: "Delivered",
  cancelled: "Cancelled",
};

export type OrdersByStatusPoint = { status: string; count: number };

const tooltipColors = {
  light: { bg: "#111814", border: "#1E2B1E" },
  dark: { bg: "hsl(150 10% 11%)", border: "hsl(150 8% 20%)" },
};
const legendColors = { light: "#666", dark: "hsl(120 6% 55%)" };

export function StatusChart({ data }: { data: OrdersByStatusPoint[] }) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const tooltip = tooltipColors[isDark ? "dark" : "light"];
  const legendColor = legendColors[isDark ? "dark" : "light"];

  const chartData = data.map((d) => ({
    name: STATUS_LABELS[d.status] ?? d.status,
    value: d.count,
    status: d.status,
  }));

  return (
    <ResponsiveContainer width="100%" height={280}>
      <PieChart>
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={90}
          paddingAngle={2}
          label={({ name, value }) => `${name}: ${value}`}
        >
          {chartData.map((entry) => (
            <Cell
              key={entry.status}
              fill={STATUS_COLORS[entry.status] ?? legendColor}
            />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: tooltip.bg,
            border: `1px solid ${tooltip.border}`,
            borderRadius: 8,
          }}
          formatter={(value, name) => [value ?? 0, name]}
        />
        <Legend
          layout="horizontal"
          align="center"
          verticalAlign="bottom"
          wrapperStyle={{ fontSize: 12 }}
          formatter={(value, entry) => (
            <span style={{ color: legendColor }}>
              {value} ({entry.payload?.value ?? 0})
            </span>
          )}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
