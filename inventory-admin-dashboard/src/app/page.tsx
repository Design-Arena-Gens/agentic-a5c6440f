import {
  Activity,
  AlertTriangle,
  BarChart3,
  CircleDollarSign,
  Package,
  RefreshCcw,
  Search,
  ShoppingCart,
} from "lucide-react";
import { ActivityTimeline } from "@/components/activity-timeline";
import { InventoryTable } from "@/components/inventory-table";
import { ReorderPanel } from "@/components/reorder-panel";
import { StatCard } from "@/components/stat-card";
import { InventoryTrendChart } from "@/components/charts/inventory-trend-chart";
import { StockDistributionChart } from "@/components/charts/stock-distribution-chart";

export default function Home() {
  const statCards = [
    {
      title: "Inventory On Hand",
      value: "52,814",
      delta: "+8.2%",
      deltaLabel: "vs last month",
      deltaVariant: "success" as const,
      icon: Package,
      footer: (
        <span>
          <span className="font-semibold text-emerald-300">1,249</span> units received over the last
          7 days.
        </span>
      ),
    },
    {
      title: "Inventory Value",
      value: "$2.48M",
      delta: "+3.7%",
      deltaLabel: "Cost of goods on hand",
      deltaVariant: "default" as const,
      icon: CircleDollarSign,
      footer: (
        <span>
          Holding cost forecast aligned with <span className="font-semibold">Q2 budget</span>.
        </span>
      ),
    },
    {
      title: "Turnover Velocity",
      value: "5.2x",
      delta: "+0.6x",
      deltaLabel: "Inventory turns in the last 12 months",
      deltaVariant: "success" as const,
      icon: RefreshCcw,
      footer: (
        <span>
          High performers: Home Tech, Smart Accessories.{" "}
          <span className="text-slate-400">Target: 4.5x.</span>
        </span>
      ),
    },
    {
      title: "Backorder Rate",
      value: "1.8%",
      delta: "-0.4%",
      deltaLabel: "Outstanding customer orders",
      deltaVariant: "success" as const,
      icon: Activity,
      footer: (
        <span>
          <span className="font-semibold text-emerald-300">32</span> backorders resolved today.
        </span>
      ),
    },
  ];

  const inventoryTrendData = [
    { month: "Aug", inventory: 42000, sold: 3800 },
    { month: "Sep", inventory: 43500, sold: 4200 },
    { month: "Oct", inventory: 44850, sold: 4500 },
    { month: "Nov", inventory: 46200, sold: 4780 },
    { month: "Dec", inventory: 48950, sold: 5200 },
    { month: "Jan", inventory: 50500, sold: 5100 },
    { month: "Feb", inventory: 49800, sold: 4800 },
    { month: "Mar", inventory: 51200, sold: 5300 },
    { month: "Apr", inventory: 52540, sold: 5600 },
    { month: "May", inventory: 53400, sold: 5800 },
    { month: "Jun", inventory: 54800, sold: 6000 },
    { month: "Jul", inventory: 52814, sold: 5900 },
  ];

  const stockDistribution = [
    { category: "Home Tech", quantity: 14820 },
    { category: "Smart Accessories", quantity: 10240 },
    { category: "Office Essentials", quantity: 8450 },
    { category: "Wellness", quantity: 6020 },
    { category: "Outdoor", quantity: 5284 },
  ];

  const inventoryTable = [
    {
      sku: "HT-4012",
      name: "Aura Smart Thermostat",
      category: "Home Tech",
      stock: 820,
      reorderPoint: 320,
      incoming: 600,
      status: "In Stock" as const,
    },
    {
      sku: "AC-2981",
      name: "Pulse Pro Earbuds",
      category: "Smart Accessories",
      stock: 135,
      reorderPoint: 200,
      incoming: 500,
      status: "Low Stock" as const,
    },
    {
      sku: "OF-1880",
      name: "FlexLift Standing Desk",
      category: "Office Essentials",
      stock: 62,
      reorderPoint: 120,
      incoming: 180,
      status: "Low Stock" as const,
    },
    {
      sku: "WN-9054",
      name: "Revive Massage Gun",
      category: "Wellness",
      stock: 420,
      reorderPoint: 280,
      incoming: 0,
      status: "In Stock" as const,
    },
    {
      sku: "OT-5516",
      name: "Solstice Solar Lantern",
      category: "Outdoor",
      stock: 28,
      reorderPoint: 150,
      incoming: 400,
      status: "Low Stock" as const,
    },
    {
      sku: "AC-6012",
      name: "Nova Charge Dock",
      category: "Smart Accessories",
      stock: 0,
      reorderPoint: 140,
      incoming: 240,
      status: "Out of Stock" as const,
    },
    {
      sku: "HT-5021",
      name: "Halo Smart Bulb (4 pack)",
      category: "Home Tech",
      stock: 980,
      reorderPoint: 300,
      incoming: 800,
      status: "In Stock" as const,
    },
    {
      sku: "WN-2145",
      name: "ZenSleep Weighted Blanket",
      category: "Wellness",
      stock: 215,
      reorderPoint: 180,
      incoming: 0,
      status: "In Stock" as const,
    },
  ];

  const reorderItems = [
    {
      sku: "AC-6012",
      name: "Nova Charge Dock",
      supplier: "Orbital Electronics",
      stock: 0,
      reorderPoint: 140,
      eta: "Aug 14",
    },
    {
      sku: "OT-5516",
      name: "Solstice Solar Lantern",
      supplier: "BrightPath Outdoor",
      stock: 28,
      reorderPoint: 150,
      eta: "Aug 17",
    },
    {
      sku: "OF-1880",
      name: "FlexLift Standing Desk",
      supplier: "Workspace Labs",
      stock: 62,
      reorderPoint: 120,
      eta: "Aug 22",
    },
  ];

  const activityFeed = [
    {
      id: "evt-1",
      title: "Inbound container #HJ204 processed",
      description: "1,200 smart thermostats received into Warehouse B.",
      timestamp: "Today · 09:12 AM",
      status: "completed" as const,
    },
    {
      id: "evt-2",
      title: "Cycle count · Zone A3",
      description: "Variance at -0.3% after reconciliation.",
      timestamp: "Today · 08:05 AM",
      status: "in-progress" as const,
    },
    {
      id: "evt-3",
      title: "Critical stock alert triggered",
      description: "Nova Charge Dock flagged for immediate replenishment.",
      timestamp: "Yesterday · 04:30 PM",
      status: "pending" as const,
    },
    {
      id: "evt-4",
      title: "Backorder batch 219 cleared",
      description: "32 orders fulfilled from emergency allocation.",
      timestamp: "Yesterday · 02:14 PM",
      status: "completed" as const,
    },
  ];

  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-10 px-6 pb-20 pt-10 md:px-10 lg:px-12">
      <header className="flex flex-col gap-6 rounded-3xl border border-slate-800/60 bg-slate-950/60 p-8 shadow-lg shadow-slate-950/40 backdrop-blur">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-2xl space-y-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-900/80 px-4 py-1 text-xs uppercase tracking-[0.2em] text-slate-400">
              <BarChart3 className="h-4 w-4 text-sky-300" />
              Command Center
            </span>
            <h1 className="text-3xl font-semibold text-white md:text-4xl">
              Inventory Operations Dashboard
            </h1>
            <p className="text-sm text-slate-400 md:text-base">
              Monitor stock health, procurement velocity, fulfillment status, and risk alerts from a
              single pane of glass. Updated every 15 minutes across all warehouses.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:items-end">
            <div className="flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-900/80 px-4 py-2 text-sm text-slate-300">
              <Search className="h-4 w-4 text-slate-500" />
              Quick search by SKU, supplier, or ASN
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-medium text-slate-200">Morgan Reed</p>
                <p className="text-xs text-slate-500">Head of Inventory</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-800/70 bg-slate-900/80 text-lg font-semibold text-slate-200">
                MR
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {statCards.map((card) => (
            <StatCard key={card.title} {...card} />
          ))}
        </div>
      </header>

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <InventoryTrendChart data={inventoryTrendData} />
        </div>
        <StockDistributionChart data={stockDistribution} />
      </section>

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-[2fr_1fr]">
        <InventoryTable data={inventoryTable} />
        <div className="flex flex-col gap-6">
          <ReorderPanel data={reorderItems} />
          <div className="rounded-3xl bg-rose-500/10 p-6 text-rose-200 ring-1 ring-rose-500/20">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-rose-500/20 text-rose-200">
                <AlertTriangle className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold">Risk Watch · Perishable Goods</h3>
                <p className="mt-2 text-sm leading-relaxed">
                  Two pallets of FreshBrew Cold Brew nearing expiry in <strong>9 days</strong>.
                  Expedite markdown campaign or divert to retail partners to prevent spoilage.
                </p>
                <div className="mt-4 inline-flex items-center rounded-full border border-rose-500/40 bg-rose-500/10 px-4 py-1 text-xs uppercase tracking-[0.2em]">
                  Immediate action required
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <ActivityTimeline data={activityFeed} />
        </div>
        <div className="rounded-3xl bg-slate-900/60 p-6 backdrop-blur ring-1 ring-slate-700/50 shadow-lg shadow-slate-900/30">
          <h3 className="text-lg font-semibold text-white">Fulfillment Snapshot</h3>
          <p className="mt-1 text-sm text-slate-400">
            Bird’s-eye summary of outbound orders across regions.
          </p>
          <div className="mt-6 space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-200">Same-day orders</p>
                <p className="text-xs uppercase tracking-widest text-slate-500">07:00 - 15:00</p>
              </div>
              <span className="text-xl font-semibold text-emerald-300">94%</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-200">Outbound volume</p>
                <p className="text-xs uppercase tracking-widest text-slate-500">All facilities</p>
              </div>
              <span className="text-xl font-semibold text-sky-300">3,482</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-200">Backorder queue</p>
                <p className="text-xs uppercase tracking-widest text-slate-500">Last sync 5m ago</p>
              </div>
              <span className="text-xl font-semibold text-amber-300">38</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-200">Returns processed</p>
                <p className="text-xs uppercase tracking-widest text-slate-500">Today</p>
              </div>
              <span className="text-xl font-semibold text-rose-300">126</span>
            </div>
          </div>
          <div className="mt-8 rounded-2xl border border-slate-800/60 bg-slate-950/60 p-5">
            <div className="flex items-center gap-3 text-slate-200">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-300">
                <ShoppingCart className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold">Automated replenishment active</p>
                <p className="text-xs text-slate-500">
                  Purchase orders for 6 SKUs will auto-release when safety stock is breached.
                </p>
              </div>
            </div>
            <button className="mt-4 w-full rounded-full bg-sky-500/20 px-4 py-2 text-sm font-medium text-sky-200 transition hover:bg-sky-500/30">
              View procurement queue
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
