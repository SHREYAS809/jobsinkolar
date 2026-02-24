"use client";

import { Users, Search, Filter, Download, Mail, ExternalLink, CheckCircle2, XCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const APPLICANTS = [
    { id: 1, name: "Rahul Sharma", role: "UI Designer", status: "Under Review", date: "Oct 24, 2023", match: "94%" },
    { id: 2, name: "Priya V", role: "Junior Developer", status: "Shortlisted", date: "Oct 23, 2023", match: "88%" },
    { id: 3, name: "Arjun Gowda", role: "Senior Architect", status: "Rejected", date: "Oct 22, 2023", match: "72%" },
    { id: 4, name: "Sneha Reddy", role: "Data Analyst", status: "Shortlisted", date: "Oct 21, 2023", match: "91%" },
];

export default function ApplicantsPage() {
    return (
        <div className="space-y-10 relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-blue-600 p-8 rounded-[2.5rem] border border-blue-700 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="relative z-10">
                    <h2 className="text-2xl font-black text-white tracking-tight leading-tight">
                        Human Resource Archive
                    </h2>
                    <p className="text-blue-100 font-bold text-xs uppercase tracking-widest mt-2 flex items-center gap-2">
                        <Users size={14} className="text-blue-200" />
                        Active candidate evaluation in progress
                    </p>
                </div>

                <div className="relative z-10 flex gap-4">
                    <Button className="bg-white/10 hover:bg-white/20 text-white font-black uppercase tracking-widest text-[10px] h-12 px-6 rounded-xl border border-white/20 flex items-center gap-2">
                        <Download size={14} /> Export Protocol
                    </Button>
                </div>
            </div>

            <div className="bg-white p-2 rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-xl">
                <div className="p-8 border-b border-slate-100 flex flex-col md:flex-row gap-6 justify-between items-center bg-slate-50/50">
                    <div className="relative w-full md:w-96 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
                        <input type="text" placeholder="Search Identity..." className="w-full bg-white border border-slate-200 rounded-2xl h-12 pl-12 pr-4 text-slate-900 font-bold text-xs focus:outline-none focus:border-blue-600 transition-all shadow-sm" />
                    </div>

                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <Button variant="ghost" className="flex-1 md:flex-none text-slate-600 hover:text-blue-600 hover:bg-blue-50 font-black uppercase tracking-widest text-[10px] h-12 px-6 rounded-xl border border-slate-200 flex items-center gap-2">
                            <Filter size={14} /> Refine
                        </Button>
                        <select className="flex-1 md:flex-none bg-white border border-slate-200 rounded-xl h-12 px-4 text-slate-900 font-black uppercase tracking-widest text-[10px] focus:outline-none focus:border-blue-600 shadow-sm">
                            <option>All Status</option>
                            <option>Shortlisted</option>
                            <option>Under Review</option>
                        </select>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-200">
                                <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-widest text-slate-800">Candidate Identity</th>
                                <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-widest text-slate-800">Proposed Role</th>
                                <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-widest text-slate-800">Evaluation Phase</th>
                                <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-widest text-slate-800">Sync Date</th>
                                <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-widest text-slate-800">Match Protocol</th>
                                <th className="px-8 py-5 text-right text-[10px] font-black uppercase tracking-widest text-slate-800">Action Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {APPLICANTS.map((applicant) => (
                                <tr key={applicant.id} className="hover:bg-slate-50 transition-colors group">
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4">
                                            <div className="h-10 w-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 font-black text-xs border border-blue-200">
                                                {(applicant.name?.split(' ') || []).filter(Boolean).map(n => n[0]).join('')}
                                            </div>
                                            <div>
                                                <p className="font-black text-slate-900 text-sm group-hover:text-blue-600 transition-colors">{applicant.name}</p>
                                                <div className="flex items-center gap-2 text-slate-500 font-bold text-[10px] uppercase tracking-widest">
                                                    <Mail size={12} className="text-blue-600/60" /> Direct Channel
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-slate-700 font-bold text-xs">{applicant.role}</td>
                                    <td className="px-8 py-6">
                                        <span className={`inline-flex items-center px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border ${applicant.status === "Shortlisted" ? "bg-emerald-50 text-emerald-700 border-emerald-200" :
                                            applicant.status === "Rejected" ? "bg-rose-50 text-rose-700 border-rose-200" :
                                                "bg-amber-50 text-amber-700 border-amber-200"
                                            }`}>
                                            {applicant.status === "Shortlisted" && <CheckCircle2 size={12} className="mr-1.5" />}
                                            {applicant.status === "Rejected" && <XCircle size={12} className="mr-1.5" />}
                                            {applicant.status === "Under Review" && <Clock size={12} className="mr-1.5" />}
                                            {applicant.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6 text-slate-600 font-bold text-xs">{applicant.date}</td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-3">
                                            <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden w-20 border border-slate-200">
                                                <div className="h-full bg-blue-600" style={{ width: applicant.match }}></div>
                                            </div>
                                            <span className="text-slate-900 font-black text-[10px]">{applicant.match}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <button className="h-10 w-10 rounded-xl bg-slate-50 text-slate-400 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200 border border-slate-200 transition-all">
                                            <ExternalLink size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="p-8 bg-slate-50/50 border-t border-slate-100 flex justify-between items-center">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-600">Phase 1 Data • Page 1 of 5</p>
                    <div className="flex gap-2">
                        <button className="h-10 px-4 bg-white border border-slate-200 rounded-xl text-[10px] font-black text-slate-400 cursor-not-allowed">Previous Page</button>
                        <button className="h-10 px-4 bg-white border border-slate-200 rounded-xl text-[10px] font-black text-blue-600 hover:bg-blue-50 hover:border-blue-300 transition-all">Next Allocation</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
