"use client";

import { Shield, CheckCircle2, XCircle, Eye, Building2, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const QUEUE = [
    { id: 1, target: "Kolar Logistics Hub", type: "Employer", date: "2h ago", priority: "High" },
    { id: 2, target: "Senior Agri-Officer", type: "Job Posting", date: "5h ago", priority: "Medium" },
    { id: 3, target: "District Water Board", type: "Employer", date: "1d ago", priority: "Low" },
];

export default function adminVerificationQueuePage() {
    return (
        <div className="space-y-10 relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="relative z-10">
                    <h2 className="text-3xl font-black text-white tracking-tight leading-tight">
                        Verification Protocol Queue
                    </h2>
                    <p className="text-white font-black text-xs uppercase tracking-widest mt-2 flex items-center gap-2">
                        <Shield size={14} className="text-amber-400" />
                        Vetting platform integrity and trust
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {QUEUE.map((item) => (
                    <div key={item.id} className="glass-panel p-6 md:p-10 rounded-[3rem] border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-8 group hover:bg-white/5 transition-all">
                        <div className="flex gap-6 items-center">
                            <div className={`h-16 w-16 rounded-[1.5rem] flex items-center justify-center border-2 shadow-lg ${item.type === "Employer" ? "bg-indigo-600 text-white border-indigo-400" : "bg-blue-600 text-white border-blue-400"
                                }`}>
                                {item.type === "Employer" ? <Building2 size={24} /> : <FileText size={24} />}
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-1">
                                    <h3 className="text-xl font-black text-white tracking-tight group-hover:text-amber-400 transition-colors uppercase">{item.target}</h3>
                                    <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-xl border-2 ${item.priority === "High" ? "bg-rose-600 text-white border-rose-400 shadow-lg shadow-rose-500/20" : "bg-white/10 text-white border-white/20"
                                        }`}>{item.priority}</span>
                                </div>
                                <p className="text-[10px] text-white font-black uppercase tracking-widest">
                                    {item.type} Submission Protocol • <span className="text-blue-400 italic">Syncing {item.date}</span>
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <button className="h-14 w-14 bg-slate-900 rounded-2xl border-2 border-white/20 flex items-center justify-center text-white hover:text-blue-400 shadow-lg transition-all">
                                <Eye size={20} />
                            </button>
                            <button className="h-14 px-8 bg-emerald-600 hover:bg-emerald-500 text-white font-black uppercase tracking-widest text-[10px] rounded-2xl flex items-center gap-3 border-2 border-emerald-400 shadow-xl shadow-emerald-500/30 active:scale-95 transition-all">
                                <CheckCircle2 size={18} /> Approve
                            </button>
                            <button className="h-14 px-8 bg-rose-600 hover:bg-rose-500 text-white font-black uppercase tracking-widest text-[10px] border-2 border-rose-400 rounded-2xl flex items-center gap-3 shadow-xl shadow-rose-500/30 active:scale-95 transition-all">
                                <XCircle size={18} /> Deny
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
