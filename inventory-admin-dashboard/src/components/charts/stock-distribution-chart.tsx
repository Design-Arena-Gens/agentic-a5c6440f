"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const COLORS = ["#38bdf8", "#f97316", "#facc15", "#a855f7", "#34d399"];

type StockDistributionChartProps = {
  data: Array<{ category: string; quantity: number }>;
};

export function StockDistributionChart({ data }: StockDistributionChartProps) {
  const total = data.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="relative rounded-3xl bg-slate-900/60 p-6 backdrop-blur ring-1 ring-slate-700/50 shadow-lg shadow-slate-900/30">
      <div className="absolute -right-24 -bottom-24 h-48 w-48 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="relative flex items-start justify-between gap-6">
        <div>
          <h3 className="text-lg font-semibold text-white">Stock Distribution</h3>
          <p className="mt-1 text-sm text-slate-400">
            Category breakdown showing how inventory is allocated.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-700/60 bg-slate-900/80 px-4 py-2 text-right">
          <p className="text-xs uppercase tracking-widest text-slate-400">Total Units</p>
          <p className="text-2xl font-semibold text-white">{total.toLocaleString()}</p>
        </div>
      </div>
      <div className="relative mt-8 flex flex-col gap-6 md:flex-row">
        <div className="h-60 w-full md:w-1/2">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="quantity"
                nameKey="category"
                innerRadius={70}
                outerRadius={110}
                paddingAngle={6}
                strokeWidth={4}
              >
                {data.map((entry, index) => (
                  <Cell key={entry.category} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0f1729",
                  borderRadius: "1rem",
                  border: "1px solid rgba(148, 163, 184, 0.2)",
                  color: "#e2e8f0",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-col justify-center gap-4 md:w-1/2">
          {data.map((item, index) => (
            <div key={item.category} className="flex items-center gap-3">
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <div className="flex flex-1 items-baseline justify-between">
                <p className="text-sm font-medium text-slate-200">{item.category}</p>
                <p className="text-sm text-slate-400">
                  {item.quantity.toLocaleString()} units
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
