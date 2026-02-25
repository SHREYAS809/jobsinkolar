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
                    <h2 className="text-3xl font-black text-white tracking-tight leading-tight">
                        User Governance Matrix
                    </h2>
                    <p className="text-white font-black text-xs uppercase tracking-widest mt-2 flex items-center gap-2">
                        <Users size={14} className="text-blue-400" />
                        Centralized district population control
                    </p>
                </div>
            </div>

            <div className="glass-panel p-2 rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl">
                <div className="p-8 border-b-2 border-white/20 flex flex-col md:flex-row gap-6 justify-between items-center bg-white/5">
                    <div className="relative w-full md:w-96 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white group-focus-within:text-blue-400 transition-colors" size={18} />
                        <input type="text" placeholder="Trace User Signature..." className="w-full bg-slate-900 border-2 border-white/20 rounded-2xl h-12 pl-12 pr-4 text-white font-black text-xs focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-500 shadow-inner" />
                    </div>
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" className="text-white hover:text-white hover:bg-white/20 font-black uppercase tracking-widest text-[10px] h-12 px-6 rounded-xl border-2 border-white/20 flex items-center gap-2 transition-all">
                            <Filter size={14} /> Refine Matrix
                        </Button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-slate-900 border-b-2 border-white/10">
                                <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-widest text-white">Identity</th>
                                <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-widest text-white">Class</th>
                                <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-widest text-white">Node</th>
                                <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-widest text-white">Phase</th>
                                <th className="px-8 py-5 text-right text-[10px] font-black uppercase tracking-widest text-white">Ops</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {USERS.map((user) => (
                                <tr key={user.id} className="hover:bg-white/5 transition-colors group">
                                    <td className="px-8 py-6">
                                        <p className="font-black text-white text-sm group-hover:text-blue-400 transition-colors uppercase tracking-tight">{user.name}</p>
                                        <p className="text-[9px] text-blue-300 font-black uppercase tracking-widest bg-blue-500/10 p-1 rounded inline-block mt-1">Since {user.syncDate}</p>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="text-white font-black text-xs uppercase tracking-widest flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 w-fit">
                                            {user.type === "Employer" ? <Shield size={12} className="text-indigo-400" /> : <Users size={12} className="text-blue-400" />}
                                            {user.type}
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="text-white font-black text-xs uppercase tracking-widest flex items-center gap-2">
                                            <MapPin size={12} className="text-rose-400" /> {user.location}
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className={`inline-flex items-center px-4 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest border-2 shadow-lg ${user.status === "Active" ? "bg-emerald-600 text-white border-emerald-400" : "bg-amber-600 text-white border-amber-400"
                                            }`}>
                                            {user.status === "Active" ? <CheckCircle2 size={12} className="mr-1.5" /> : <Activity size={12} className="mr-1.5" />}
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <div className="flex gap-3 justify-end">
                                            <button className="h-10 w-10 bg-blue-600 text-white rounded-xl border-2 border-blue-400 flex items-center justify-center hover:bg-blue-500 shadow-lg shadow-blue-500/30 transition-all">
                                                <Edit3 size={18} />
                                            </button>
                                            <button className="h-10 w-10 bg-rose-600 text-white rounded-xl border-2 border-rose-400 flex items-center justify-center hover:bg-rose-500 shadow-lg shadow-rose-500/30 transition-all">
                                                <Trash2 size={18} />
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
