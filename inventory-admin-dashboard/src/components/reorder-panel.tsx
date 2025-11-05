"use client";

import { ArrowRight, Truck } from "lucide-react";

type ReorderItem = {
  sku: string;
  name: string;
  supplier: string;
  stock: number;
  reorderPoint: number;
  eta: string;
};

type ReorderPanelProps = {
  data: ReorderItem[];
};

export function ReorderPanel({ data }: ReorderPanelProps) {
  return (
    <div className="rounded-3xl bg-slate-900/60 p-6 backdrop-blur ring-1 ring-slate-700/50 shadow-lg shadow-slate-900/30">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">Reorder Pipeline</h3>
          <p className="mt-1 text-sm text-slate-400">
            Critical items at or below the reorder threshold.
          </p>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/80 px-4 py-2 text-xs uppercase tracking-widest text-slate-400">
          <Truck className="h-4 w-4 text-sky-300" />
          {data.length} Shipments
        </span>
      </div>
      <div className="mt-6 space-y-4">
        {data.map((item) => (
          <div
            key={item.sku}
            className="flex flex-col gap-4 rounded-2xl border border-slate-800/70 bg-slate-950/40 p-4 transition hover:border-sky-500/40 hover:bg-slate-900/50"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-slate-200">{item.name}</p>
                <p className="text-xs uppercase tracking-widest text-slate-500">SKU {item.sku}</p>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300">
                <ArrowRight className="h-4 w-4" />
                ETA {item.eta}
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
              <div>
                <span className="text-xs uppercase tracking-widest text-slate-500">
                  Supplier
                </span>
                <p className="font-medium text-slate-200">{item.supplier}</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-slate-500">
                  On Hand
                </span>
                <p className="font-medium text-slate-200">{item.stock}</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-slate-500">
                  Reorder Point
                </span>
                <p className="font-medium text-slate-200">{item.reorderPoint}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
