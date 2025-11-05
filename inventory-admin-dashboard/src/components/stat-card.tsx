import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

type BadgeVariant = "default" | "warning" | "danger" | "success";

const badgeClasses: Record<BadgeVariant, string> = {
  default: "bg-cyan-500/10 text-cyan-300 border border-cyan-400/20",
  warning: "bg-amber-500/10 text-amber-300 border border-amber-400/20",
  danger: "bg-rose-500/10 text-rose-300 border border-rose-400/20",
  success: "bg-emerald-500/10 text-emerald-300 border border-emerald-400/20",
};

type StatCardProps = {
  title: string;
  value: string;
  delta: string;
  deltaLabel: string;
  deltaVariant?: BadgeVariant;
  icon: LucideIcon;
  footer?: ReactNode;
};

export function StatCard({
  title,
  value,
  delta,
  deltaLabel,
  icon: Icon,
  footer,
  deltaVariant = "default",
}: StatCardProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-slate-900/60 p-6 backdrop-blur ring-1 ring-slate-700/50 shadow-lg shadow-slate-900/30">
      <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-slate-400">
            {title}
          </p>
          <p className="mt-3 text-4xl font-semibold tracking-tight text-white">
            {value}
          </p>
        </div>
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800/80 text-cyan-300">
          <Icon className="h-6 w-6" />
        </span>
      </div>
      <div className="mt-5 flex items-center gap-3">
        <span
          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium uppercase tracking-widest ${badgeClasses[deltaVariant]}`}
        >
          {delta}
        </span>
        <span className="text-sm text-slate-400">{deltaLabel}</span>
      </div>
      {footer ? <div className="mt-6 text-sm text-slate-300">{footer}</div> : null}
    </div>
  );
}
