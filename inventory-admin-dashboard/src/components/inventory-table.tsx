"use client";

import { ArrowDownWideNarrow, ArrowUpNarrowWide } from "lucide-react";
import { useState } from "react";

type InventoryItem = {
  sku: string;
  name: string;
  category: string;
  stock: number;
  reorderPoint: number;
  incoming: number;
  status: "In Stock" | "Low Stock" | "Out of Stock";
};

type SortKey = keyof Pick<InventoryItem, "name" | "category" | "stock" | "incoming">;

type TableProps = {
  data: InventoryItem[];
};

export function InventoryTable({ data }: TableProps) {
  const [sortKey, setSortKey] = useState<SortKey>("stock");
  const [direction, setDirection] = useState<"asc" | "desc">("desc");

  const sortedData = [...data].sort((a, b) => {
    const aValue = a[sortKey];
    const bValue = b[sortKey];

    if (typeof aValue === "number" && typeof bValue === "number") {
      return direction === "asc" ? aValue - bValue : bValue - aValue;
    }

    return direction === "asc"
      ? String(aValue).localeCompare(String(bValue))
      : String(bValue).localeCompare(String(aValue));
  });

  function changeSort(key: SortKey) {
    if (key === sortKey) {
      setDirection(direction === "asc" ? "desc" : "asc");
      return;
    }

    setSortKey(key);
    setDirection("desc");
  }

  return (
    <div className="rounded-3xl bg-slate-900/60 p-6 backdrop-blur ring-1 ring-slate-700/50 shadow-lg shadow-slate-900/30">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">Inventory Overview</h3>
          <p className="mt-1 text-sm text-slate-400">
            Current warehouse standing with automatic reorder tracking.
          </p>
        </div>
        <span className="rounded-2xl border border-slate-700/60 bg-slate-900/80 px-4 py-2 text-xs uppercase tracking-widest text-slate-400">
          {data.length} SKUs
        </span>
      </div>
      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800/70">
        <table className="min-w-full divide-y divide-slate-800">
          <thead className="bg-slate-900/80">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-slate-400">
                SKU
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-slate-400">
                <button
                  onClick={() => changeSort("name")}
                  className="group flex items-center gap-2 text-left text-slate-400 transition hover:text-white"
                >
                  Product
                  {sortKey === "name" ? (
                    direction === "asc" ? (
                      <ArrowUpNarrowWide className="h-4 w-4" />
                    ) : (
                      <ArrowDownWideNarrow className="h-4 w-4" />
                    )
                  ) : null}
                </button>
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-slate-400">
                <button
                  onClick={() => changeSort("category")}
                  className="group flex items-center gap-2 text-left text-slate-400 transition hover:text-white"
                >
                  Category
                  {sortKey === "category" ? (
                    direction === "asc" ? (
                      <ArrowUpNarrowWide className="h-4 w-4" />
                    ) : (
                      <ArrowDownWideNarrow className="h-4 w-4" />
                    )
                  ) : null}
                </button>
              </th>
              <th className="px-6 py-4 text-right text-xs font-medium uppercase tracking-wider text-slate-400">
                <button
                  onClick={() => changeSort("stock")}
                  className="group flex items-center gap-2 text-right text-slate-400 transition hover:text-white"
                >
                  On Hand
                  {sortKey === "stock" ? (
                    direction === "asc" ? (
                      <ArrowUpNarrowWide className="h-4 w-4" />
                    ) : (
                      <ArrowDownWideNarrow className="h-4 w-4" />
                    )
                  ) : null}
                </button>
              </th>
              <th className="px-6 py-4 text-right text-xs font-medium uppercase tracking-wider text-slate-400">
                Reorder Point
              </th>
              <th className="px-6 py-4 text-right text-xs font-medium uppercase tracking-wider text-slate-400">
                <button
                  onClick={() => changeSort("incoming")}
                  className="group flex items-center gap-2 text-right text-slate-400 transition hover:text-white"
                >
                  Incoming
                  {sortKey === "incoming" ? (
                    direction === "asc" ? (
                      <ArrowUpNarrowWide className="h-4 w-4" />
                    ) : (
                      <ArrowDownWideNarrow className="h-4 w-4" />
                    )
                  ) : null}
                </button>
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-slate-400">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 bg-slate-950/40">
            {sortedData.map((item) => (
              <tr key={item.sku} className="hover:bg-slate-900/40 transition">
                <td className="whitespace-nowrap px-6 py-4 text-sm font-mono text-slate-400">
                  {item.sku}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-200">
                  {item.name}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-400">
                  {item.category}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-semibold text-slate-200">
                  {item.stock.toLocaleString()}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-slate-400">
                  {item.reorderPoint.toLocaleString()}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-slate-400">
                  {item.incoming.toLocaleString()}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                      item.status === "In Stock"
                        ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                        : item.status === "Low Stock"
                          ? "bg-amber-500/10 text-amber-300 border border-amber-500/20"
                          : "bg-rose-500/10 text-rose-300 border border-rose-500/20"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
