"use client";

import { Users, Search, Filter, Shield, MoreVertical, Mail, MapPin, Trash2, Edit3, CheckCircle2, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

const USERS = [
    { id: 1, name: "Rahul Sharma", type: "Employee", location: "Kolar Central", status: "Active", syncDate: "Oct 24, 2023" },
    { id: 2, name: "Nexus Corp", type: "Employer", location: "Malur Node", status: "Pending", syncDate: "Oct 23, 2023" },
    { id: 3, name: "Priya V", type: "Employee", location: "Bangarapet", status: "Active", syncDate: "Oct 22, 2023" },
];

export default function adminUserManagementPage() {
    return (
        <div className="space-y-10 relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="relative z-10">
                    <h2 className="text-2xl font-black text-white tracking-tight leading-tight">
                        User Governance Matrix
                    </h2>
                    <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mt-2 flex items-center gap-2">
                        <Users size={14} className="text-blue-400" />
                        Centralized district population control
                    </p>
                </div>
            </div>

            <div className="glass-panel p-2 rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl">
                <div className="p-8 border-b border-white/5 flex flex-col md:flex-row gap-6 justify-between items-center bg-white/5">
                    <div className="relative w-full md:w-96 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors" size={18} />
                        <input type="text" placeholder="Trace User Signature..." className="w-full bg-slate-950/50 border border-white/5 rounded-2xl h-12 pl-12 pr-4 text-white font-bold text-xs focus:outline-none focus:border-blue-500/30 transition-all" />
                    </div>
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" className="text-slate-400 hover:text-white hover:bg-white/5 font-black uppercase tracking-widest text-[10px] h-12 px-6 rounded-xl border border-white/5 flex items-center gap-2">
                            <Filter size={14} /> Refine Matrix
                        </Button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-white/5 border-b border-white/5">
                                <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-widest text-slate-500">Identity</th>
                                <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-widest text-slate-500">Class</th>
                                <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-widest text-slate-500">Node</th>
                                <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-widest text-slate-500">Phase</th>
                                <th className="px-8 py-5 text-right text-[10px] font-black uppercase tracking-widest text-slate-500">Ops</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {USERS.map((user) => (
                                <tr key={user.id} className="hover:bg-white/5 transition-colors group">
                                    <td className="px-8 py-6">
                                        <p className="font-black text-white text-sm group-hover:text-blue-400 transition-colors">{user.name}</p>
                                        <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Since {user.syncDate}</p>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="text-slate-300 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                                            {user.type === "Employer" ? <Shield size={12} className="text-indigo-500" /> : <Users size={12} className="text-blue-500" />}
                                            {user.type}
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="text-slate-400 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                                            <MapPin size={12} className="text-rose-500" /> {user.location}
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className={`inline-flex items-center px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border ${user.status === "Active" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                                            }`}>
                                            {user.status === "Active" ? <CheckCircle2 size={10} className="mr-1.5" /> : <Activity size={10} className="mr-1.5" />}
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <div className="flex gap-2 justify-end">
                                            <button className="h-9 w-9 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center text-slate-500 hover:text-blue-400">
                                                <Edit3 size={16} />
                                            </button>
                                            <button className="h-9 w-9 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center text-slate-500 hover:text-rose-400">
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
