"use client";

import { Settings, Shield, Bell, Database, Globe, Save, RefreshCcw, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function adminSettingsPage() {
    return (
        <div className="space-y-10 relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-slate-600/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="relative z-10">
                    <h2 className="text-2xl font-black text-white tracking-tight leading-tight">
                        System Recalibration
                    </h2>
                    <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mt-2 flex items-center gap-2">
                        <Settings size={14} className="text-slate-400" />
                        Configuring district platform protocols
                    </p>
                </div>
                <Button className="bg-white text-slate-950 font-black uppercase tracking-widest text-[10px] h-14 px-8 rounded-2xl transition-all shadow-xl shadow-white/5 flex items-center gap-3 relative z-10">
                    <Save size={18} /> Commit Changes
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 space-y-8">
                    <div className="glass-panel p-10 rounded-[3rem] border border-white/5 space-y-8">
                        <h3 className="text-sm font-black text-white uppercase tracking-[0.3em] border-b border-white/5 pb-6">General Protocols</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">District Name</label>
                                <input type="text" defaultValue="Kolar Central Node" className="w-full bg-slate-950/50 border border-white/5 rounded-2xl h-12 px-4 text-white font-bold text-xs focus:outline-none focus:border-blue-500/30 transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Sync Frequency</label>
                                <select className="w-full bg-slate-950/50 border border-white/5 rounded-2xl h-12 px-4 text-white font-bold text-xs focus:outline-none focus:border-blue-500/30 transition-all appearance-none">
                                    <option>Real-time Synchronization</option>
                                    <option>Hourly Recalibration</option>
                                    <option>Daily Batch Processing</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="glass-panel p-10 rounded-[3rem] border border-white/5 space-y-8">
                        <h3 className="text-sm font-black text-white uppercase tracking-[0.3em] border-b border-white/5 pb-6">Security Clearance</h3>
                        <div className="space-y-6">
                            {[
                                { label: "Two-Factor Verification", desc: "Mandatory for administrative access", icon: Shield },
                                { label: "API Key Rotation", desc: "Automatic reset every 30 operational cycles", icon: RefreshCcw },
                                { label: "Encryption Depth", desc: "AES-256 District Standard", icon: Lock },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between p-6 bg-white/5 rounded-2xl border border-white/5 group hover:border-blue-500/30 transition-all">
                                    <div className="flex items-center gap-5">
                                        <div className="h-10 w-10 rounded-xl bg-slate-900 flex items-center justify-center text-slate-400 group-hover:text-blue-400 transition-colors">
                                            <item.icon size={20} />
                                        </div>
                                        <div>
                                            <p className="font-black text-white text-xs uppercase tracking-tight">{item.label}</p>
                                            <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mt-1">{item.desc}</p>
                                        </div>
                                    </div>
                                    <div className="h-6 w-12 bg-blue-600 rounded-full relative cursor-pointer shadow-lg shadow-blue-600/20">
                                        <div className="absolute right-1 top-1 h-4 w-4 bg-white rounded-full"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="glass-panel p-8 rounded-[3.5rem] border border-white/5 bg-indigo-600/5">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-12 w-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20 shadow-inner">
                                <Database size={24} />
                            </div>
                            <h4 className="text-[10px] font-black text-white uppercase tracking-widest">Database Node</h4>
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-slate-500">
                                <span>Occupancy</span>
                                <span className="text-white">64.2 GB</span>
                            </div>
                            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full w-[64%] bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                            </div>
                            <p className="text-[9px] text-slate-400 font-medium italic">Auto-scaling protocol active</p>
                        </div>
                    </div>

                    <div className="glass-panel p-8 rounded-[3.5rem] border border-white/5">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                                <Globe size={24} />
                            </div>
                            <h4 className="text-[10px] font-black text-white uppercase tracking-widest">Global Relay</h4>
                        </div>
                        <div className="space-y-4">
                            {[
                                { node: "Kolar Prime", ping: "12ms" },
                                { node: "Bangalore Edge", ping: "24ms" },
                                { node: "Mumbai Core", ping: "45ms" },
                            ].map((node, i) => (
                                <div key={i} className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest border-b border-white/5 pb-3 last:border-0 last:pb-0">
                                    <span className="text-slate-500">{node.node}</span>
                                    <span className="text-emerald-400">{node.ping}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
