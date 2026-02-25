"use client";

import { BarChart3, TrendingUp, TrendingDown, Clock, Users, Briefcase, FileText, Download } from "lucide-react";
import { Chart } from "@/components/dashboards/chart";
import { Button } from "@/components/ui/button";

const REPORT_STATS = [
    { label: "New Node Registry", value: "1,240", trend: "+12%", icon: Users, color: "text-blue-400", bg: "bg-blue-500/10" },
    { label: "Transmission Volume", value: "8,450", trend: "+24%", icon: FileText, color: "text-emerald-400", bg: "bg-emerald-500/10" },
    { label: "Authority Density", value: "482", trend: "+8%", icon: Briefcase, color: "text-indigo-400", bg: "bg-indigo-500/10" },
    { label: "Sync Latency", value: "12ms", trend: "-5%", icon: Clock, color: "text-rose-400", bg: "bg-rose-500/10" },
];

const ANALYTICS_DATA = [
    { month: "May", jobs: 40, applications: 240 },
    { month: "Jun", jobs: 30, applications: 139 },
    { month: "Jul", jobs: 20, applications: 980 },
    { month: "Aug", jobs: 27, applications: 390 },
    { month: "Sep", jobs: 18, applications: 480 },
    { month: "Oct", jobs: 23, applications: 380 },
];

export default function adminReportsPage() {
    return (
        <div className="space-y-10 relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="relative z-10">
                    <h2 className="text-3xl font-black text-white tracking-tight leading-tight">
                        District Analytics
                    </h2>
                    <p className="text-white font-black text-xs uppercase tracking-widest mt-2 flex items-center gap-2">
                        <BarChart3 size={14} className="text-blue-400" />
                        Strategic intelligence and district-wide audits
                    </p>
                </div>
                <Button className="bg-white text-slate-950 font-black uppercase tracking-widest text-[11px] h-14 px-8 rounded-2xl transition-all shadow-2xl shadow-blue-500/20 flex items-center gap-3 relative z-10 border-2 border-white/20 hover:scale-105 active:scale-95">
                    <Download size={18} /> Export Protocol
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {REPORT_STATS.map((stat, i) => (
                    <div key={i} className="glass-panel p-8 rounded-[3rem] border-2 border-white/10 group hover:border-blue-400/50 transition-all shadow-2xl">
                        <div className={`h-14 w-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6 border-2 border-blue-400 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform`}>
                            <stat.icon size={24} />
                        </div>
                        <p className="text-[10px] font-black text-white uppercase tracking-widest mb-2 bg-white/10 w-fit px-2 py-0.5 rounded border border-white/20">{stat.label}</p>
                        <div className="flex items-end justify-between">
                            <h3 className="text-3xl font-black text-white tracking-tighter">{stat.value}</h3>
                            <span className={`text-[10px] font-black px-3 py-1 rounded-xl border-2 ${stat.trend.startsWith('+') ? 'text-white bg-emerald-600 border-emerald-400 shadow-lg shadow-emerald-500/20' : 'text-white bg-rose-600 border-rose-400 shadow-lg shadow-rose-500/20'}`}>
                                {stat.trend}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="glass-panel p-10 rounded-[4rem] border-2 border-white/10 shadow-2xl bg-slate-900/50">
                <Chart
                    data={ANALYTICS_DATA}
                    type="bar"
                    xDataKey="month"
                    lines={[
                        { dataKey: "jobs", stroke: "#3b82f6", name: "Job Capacity" },
                        { dataKey: "applications", stroke: "#10b981", name: "User Flow" },
                    ]}
                    title="District Resource Transmissions (Annual Pulse)"
                />
            </div>
        </div>
    );
}
