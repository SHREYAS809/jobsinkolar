"use client";

import { BarChart3, TrendingUp, TrendingDown, Users, Eye, Target, Sparkles, Activity } from "lucide-react";
import { StatsCard } from "@/components/dashboards/stats-card";
import { Chart } from "@/components/dashboards/chart";

const ANALYTICS_STATS = [
    { title: "Engagement Intelligence", value: "2.4k", unit: "Views", trend: 12.5, icon: <Eye size={20} /> },
    { title: "Conversion Velocity", value: "148", unit: "Candidates", trend: 3.2, icon: <Target size={20} /> },
    { title: "Reach Expansion", value: "85%", unit: "Kolar Reach", trend: -1.4, icon: <Sparkles size={20} /> },
];

export default function AnalyticsPage() {
    return (
        <div className="space-y-10 relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute -left-10 -top-10 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl group-hover:bg-purple-600/20 transition-all duration-700"></div>
                <div className="relative z-10">
                    <h2 className="text-2xl font-black text-white tracking-tight leading-tight">
                        Strategic Analytics Center
                    </h2>
                    <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mt-2 flex items-center gap-2">
                        <BarChart3 size={14} className="text-purple-400" />
                        Real-time metric synchronization active
                    </p>
                </div>

                <div className="relative z-10 h-12 px-6 flex items-center rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-black uppercase tracking-[0.2em]">
                    <Activity size={14} className="mr-3 animate-pulse" /> Live Monitoring
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {ANALYTICS_STATS.map((stat, idx) => (
                    <StatsCard key={idx} {...stat} />
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="glass-panel p-8 rounded-[2.5rem] min-h-[450px] flex flex-col">
                    <div className="flex justify-between items-center mb-10 px-2">
                        <div>
                            <h3 className="text-sm font-black text-white uppercase tracking-widest">Candidate Acquisition</h3>
                            <p className="text-[10px] font-bold text-slate-500 uppercase mt-1">Daily interaction tracking</p>
                        </div>
                        <TrendingUp size={24} className="text-emerald-500" />
                    </div>
                    <div className="flex-1">
                        <Chart />
                    </div>
                </div>

                <div className="glass-panel p-8 rounded-[2.5rem] space-y-8">
                    <h3 className="text-sm font-black text-white uppercase tracking-widest mb-6 px-2">Geographical Reach</h3>

                    <div className="space-y-6">
                        {[
                            { region: "Kolar Central", value: "45%", color: "bg-blue-500" },
                            { region: "Malur Industrial", value: "28%", color: "bg-indigo-500" },
                            { region: "Bangarapet Hub", value: "18%", color: "bg-purple-500" },
                            { region: "District Rural", value: "9%", color: "bg-slate-700" },
                        ].map((item, i) => (
                            <div key={i} className="group cursor-default">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-xs font-black text-slate-300 uppercase tracking-widest group-hover:text-white transition-colors">{item.region}</span>
                                    <span className="text-xs font-black text-white">{item.value}</span>
                                </div>
                                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 group-hover:border-white/10 transition-colors">
                                    <div className={`h-full ${item.color} shadow-[0_0_10px_rgba(255,255,255,0.1)]`} style={{ width: item.value }}></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pt-8 border-t border-white/5 mt-auto">
                        <div className="flex items-center gap-4 p-6 rounded-3xl bg-blue-500/5 border border-blue-500/10 group hover:border-blue-500/20 transition-all">
                            <div className="h-12 w-12 rounded-2xl bg-blue-600/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                                <TrendingUp size={24} />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Growth Factor</p>
                                <p className="text-xl font-black text-white">+14.2%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
