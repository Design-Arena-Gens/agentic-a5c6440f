"use client";

import { CheckCircle2, CircleDashed, PackageCheck } from "lucide-react";
import type { ReactNode } from "react";

type Activity = {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  status: "completed" | "pending" | "in-progress";
};

type ActivityTimelineProps = {
  data: Activity[];
};

const statusStyles: Record<Activity["status"], string> = {
  completed: "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
  "in-progress": "bg-sky-500/10 text-sky-300 border border-sky-500/20",
  pending: "bg-amber-500/10 text-amber-300 border border-amber-500/20",
};

const statusIcon: Record<Activity["status"], ReactNode> = {
  completed: <PackageCheck className="h-5 w-5" />,
  "in-progress": <CircleDashed className="h-5 w-5 animate-spin" />,
  pending: <CheckCircle2 className="h-5 w-5" />,
};

export function ActivityTimeline({ data }: ActivityTimelineProps) {
  return (
    <div className="rounded-3xl bg-slate-900/60 p-6 backdrop-blur ring-1 ring-slate-700/50 shadow-lg shadow-slate-900/30">
      <div>
        <h3 className="text-lg font-semibold text-white">Operations Activity</h3>
        <p className="mt-1 text-sm text-slate-400">
          Latest movements across procurement, receiving, and fulfillment.
        </p>
      </div>
      <div className="mt-6 space-y-6">
        {data.map((event, index) => (
          <div key={event.id} className="relative pl-8">
            {index !== data.length - 1 ? (
              <span className="absolute left-3 top-8 h-full w-px bg-slate-800/80" />
            ) : null}
            <span
              className={`absolute left-0 flex h-6 w-6 items-center justify-center rounded-full ${statusStyles[event.status]}`}
            >
              {statusIcon[event.status]}
            </span>
            <div className="rounded-2xl border border-slate-800/60 bg-slate-950/50 p-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-200">{event.title}</p>
                  <p className="text-sm text-slate-400">{event.description}</p>
                </div>
                <span className="rounded-full bg-slate-800/60 px-3 py-1 text-xs text-slate-400">
                  {event.timestamp}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
