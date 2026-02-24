import { ReactNode } from "react";

interface StatsCardProps {
  title: string;
  value: number | string;
  icon: ReactNode;
  trend?: {
    direction: "up" | "down";
    percentage: number;
  };
}

export function StatsCard({ title, value, icon, trend }: StatsCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 relative overflow-hidden group border border-slate-200 shadow-sm hover:shadow-md transition-all">
      {/* Subtle background glow */}
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-50 rounded-full blur-2xl group-hover:bg-blue-100 transition-colors"></div>

      <div className="flex items-start justify-between relative z-10">
        <div>
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{title}</p>
          <p className="text-3xl font-black text-slate-950 tracking-tight">{value}</p>
          {trend && (
            <p
              className={`text-xs font-bold mt-2 flex items-center gap-1 ${trend.direction === "up" ? "text-emerald-600" : "text-rose-600"
                }`}
            >
              <span className="bg-slate-100 p-0.5 rounded shadow-sm border border-slate-200">
                {trend.direction === "up" ? "↑" : "↓"}
              </span>
              <span>{trend.percentage}% <span className="text-slate-500 font-medium">from last mo</span></span>
            </p>
          )}
        </div>
        <div className="p-3 bg-blue-50 rounded-xl border border-blue-100 text-blue-600 shadow-sm group-hover:scale-110 transition-transform">
          {icon}
        </div>
      </div>
    </div>
  );
}
