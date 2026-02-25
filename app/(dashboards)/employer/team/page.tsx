"use client";

import { Users, UserPlus, Shield, MoreVertical, Mail, Activity, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const TEAM = [
    { id: 1, name: "Anita Kumar", role: "Talent Acquisition", email: "anita@nexus.co", status: "Active", access: "Admin" },
    { id: 2, name: "Vikram Singh", role: "HR Manager", email: "vikram@nexus.co", status: "Active", access: "Editor" },
    { id: 3, name: "Sneha Rao", role: "Recruiter", email: "sneha@nexus.co", status: "Inactive", access: "Viewer" },
];

export default function TeamManagementPage() {
    return (
        <div className="space-y-10 relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="relative z-10">
                    <h2 className="text-3xl font-black text-white tracking-tight leading-tight">
                        Team Command Center
                    </h2>
                    <p className="text-white font-black text-xs uppercase tracking-widest mt-2 flex items-center gap-2">
                        <Users size={14} className="text-indigo-400" />
                        Managing district recruitment operators
                    </p>
                </div>
                <Button className="bg-indigo-600 hover:bg-indigo-500 text-white font-black uppercase tracking-widest text-[10px] h-14 px-8 rounded-2xl transition-all shadow-xl shadow-indigo-500/20 flex items-center gap-3 relative z-10">
                    <UserPlus size={18} /> Invite Operator
                </Button>
            </div>

            <div className="glass-panel p-2 rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-slate-900 border-b-2 border-white/10">
                                <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-widest text-white">Operator Identity</th>
                                <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-widest text-white">Sync Level</th>
                                <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-widest text-white">Phase</th>
                                <th className="px-8 py-5 text-right text-[10px] font-black uppercase tracking-widest text-white">Control</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {TEAM.map((member) => (
                                <tr key={member.id} className="hover:bg-white/5 transition-colors group">
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4">
                                            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-black text-xs shadow-lg">
                                                {member.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-black text-white text-sm group-hover:text-indigo-400 transition-colors uppercase tracking-tight">{member.name}</p>
                                                <p className="text-[10px] text-white font-black uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded border border-white/10 mt-1">{member.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-2 text-white font-black text-xs uppercase bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 w-fit">
                                            <Shield size={14} className="text-indigo-400" /> {member.access}
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className={`inline-flex items-center px-4 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest border-2 shadow-lg ${member.status === "Active" ? "bg-emerald-600 text-white border-emerald-400" : "bg-slate-800 text-slate-400 border-slate-700"
                                            }`}>
                                            {member.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <div className="flex gap-3 justify-end">
                                            <button className="h-10 w-10 rounded-xl bg-blue-600 text-white hover:bg-blue-500 border-2 border-blue-400 shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center">
                                                <Activity size={18} />
                                            </button>
                                            <button className="h-10 w-10 rounded-xl bg-rose-600 text-white hover:bg-rose-500 border-2 border-rose-400 shadow-lg shadow-rose-500/30 transition-all flex items-center justify-center">
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
