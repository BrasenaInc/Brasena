"use client";

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

export function StatusChart({ data }: { data: OrdersByStatusPoint[] }) {
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
          {chartData.map((entry, i) => (
            <Cell
              key={entry.status}
              fill={STATUS_COLORS[entry.status] ?? "#666"}
            />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: "#111814",
            border: "1px solid #1E2B1E",
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
            <span style={{ color: "#999" }}>
              {value} ({entry.payload?.value ?? 0})
            </span>
          )}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
