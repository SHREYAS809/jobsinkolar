"use client";

import { Building2, Search, Filter, Shield, MoreVertical, Mail, MapPin, Trash2, Edit3, CheckCircle2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const EMPLOYERS = [
    { id: 1, name: "Kolar Tech Hub", industry: "Technology", location: "Kolar Central", status: "Active", joinedDate: "Oct 15, 2023" },
    { id: 2, name: "District Data Center", industry: "Infrastructure", location: "Malur Node", status: "Active", joinedDate: "Oct 12, 2023" },
    { id: 3, name: "Industrial Solutions", industry: "Manufacturing", location: "Bangarapet", status: "Pending", joinedDate: "Oct 20, 2023" },
];

export default function adminEmployersPage() {
    return (
        <div className="space-y-10 relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-blue-600 p-8 rounded-[2.5rem] border border-blue-700 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="relative z-10">
                    <h2 className="text-2xl font-black text-white tracking-tight leading-tight">
                        Employer Oversight
                    </h2>
                    <p className="text-blue-100 font-bold text-xs uppercase tracking-widest mt-2 flex items-center gap-2">
                        <Building2 size={14} className="text-blue-200" />
                        Managing district industrial entities
                    </p>
                </div>
            </div>

            <div className="bg-white p-2 rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-xl">
                <div className="p-8 border-b border-slate-100 flex flex-col md:flex-row gap-6 justify-between items-center bg-slate-50/50">
                    <div className="relative w-full md:w-96 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
                        <input type="text" placeholder="Trace Entity..." className="w-full bg-white border border-slate-200 rounded-2xl h-12 pl-12 pr-4 text-slate-900 font-bold text-xs focus:outline-none focus:border-blue-600 transition-all shadow-sm" />
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-200">
                                <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-widest text-slate-800">Entity</th>
                                <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-widest text-slate-800">Sector</th>
                                <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-widest text-slate-800">Phase</th>
                                <th className="px-8 py-5 text-right text-[10px] font-black uppercase tracking-widest text-slate-800">Control</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {EMPLOYERS.map((employer) => (
                                <tr key={employer.id} className="hover:bg-slate-50 transition-colors group">
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4">
                                            <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100 shadow-sm">
                                                <Building2 size={18} />
                                            </div>
                                            <div>
                                                <p className="font-black text-slate-900 text-sm group-hover:text-blue-600 transition-colors">{employer.name}</p>
                                                <p className="text-[9px] text-slate-600 font-bold uppercase tracking-widest">{employer.location}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-slate-700 font-bold text-xs uppercase tracking-widest">{employer.industry}</td>
                                    <td className="px-8 py-6">
                                        <span className={`inline-flex items-center px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border ${employer.status === "Active" ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-amber-50 text-amber-700 border-amber-200"
                                            }`}>
                                            {employer.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <div className="flex gap-2 justify-end">
                                            <button className="h-9 w-9 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-200 shadow-sm"><Edit3 size={16} /></button>
                                            <button className="h-9 w-9 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center text-slate-500 hover:text-rose-600 hover:border-rose-200 shadow-sm"><Trash2 size={16} /></button>
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
