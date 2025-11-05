"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const chartGradientId = "inventoryTrend";

type InventoryTrendChartProps = {
  data: Array<{ month: string; inventory: number; sold: number }>;
};

export function InventoryTrendChart({ data }: InventoryTrendChartProps) {
  return (
    <div className="relative h-full rounded-3xl bg-slate-900/60 p-6 backdrop-blur ring-1 ring-slate-700/50 shadow-lg shadow-slate-900/30">
      <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="relative">
        <h3 className="text-lg font-semibold text-white">Stock vs. Sales</h3>
        <p className="mt-1 text-sm text-slate-400">
          Track inventory health against fulfilled orders over the last 12 months.
        </p>
      </div>
      <div className="relative mt-8 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id={`${chartGradientId}-stock`} x1="0" x2="0" y1="0" y2="1">
                <stop offset="5%" stopColor="#34d399" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#34d399" stopOpacity={0} />
              </linearGradient>
              <linearGradient id={`${chartGradientId}-sales`} x1="0" x2="0" y1="0" y2="1">
                <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#38bdf8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis dataKey="month" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#0f1729",
                borderRadius: "1rem",
                border: "1px solid rgba(148, 163, 184, 0.2)",
                color: "#e2e8f0",
              }}
            />
            <Area
              type="monotone"
              dataKey="inventory"
              stroke="#22c55e"
              strokeWidth={2.2}
              fill={`url(#${chartGradientId}-stock)`}
              name="Inventory"
            />
            <Area
              type="monotone"
              dataKey="sold"
              stroke="#38bdf8"
              strokeWidth={2.2}
              fill={`url(#${chartGradientId}-sales)`}
              name="Units Sold"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
