"use client";

import { Plus, Briefcase, IndianRupee, MapPin, FileText, Sparkles, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PostJobPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-10 relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-blue-600 p-8 rounded-[2.5rem] border border-blue-700 shadow-2xl relative overflow-hidden group">
                <div className="absolute -left-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700"></div>
                <div className="relative z-10">
                    <h2 className="text-2xl font-black text-white tracking-tight leading-tight">
                        Deploy New Vacancy
                    </h2>
                    <p className="text-blue-100 font-bold text-xs uppercase tracking-widest mt-2 flex items-center gap-2">
                        <Sparkles size={14} className="text-blue-200" />
                        Allocation Protocol initiated
                    </p>
                </div>
            </div>

            <div className="bg-white p-10 md:p-14 rounded-[3rem] border border-slate-200 shadow-xl space-y-12">
                {/* Essential Data */}
                <div className="space-y-8">
                    <h3 className="text-[10px] font-black text-slate-800 uppercase tracking-[0.4em] flex items-center gap-4">
                        Essential Parameters
                        <div className="h-px flex-1 bg-slate-100"></div>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 ml-1">Functional Designation</label>
                            <div className="relative group">
                                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
                                <input type="text" placeholder="e.g. Senior Regional Manager" className="w-full bg-slate-50 border border-slate-200 rounded-2xl h-14 pl-12 pr-4 text-slate-900 font-bold focus:outline-none focus:border-blue-600 transition-all placeholder:text-slate-400" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 ml-1">Geographical Allocation</label>
                            <div className="relative group">
                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
                                <input type="text" placeholder="e.g. Malur Industrial Area" className="w-full bg-slate-50 border border-slate-200 rounded-2xl h-14 pl-12 pr-4 text-slate-900 font-bold focus:outline-none focus:border-blue-600 transition-all placeholder:text-slate-400" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 ml-1">Resource Allocation (Salary)</label>
                            <div className="relative group">
                                <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
                                <input type="text" placeholder="e.g. ₹6L - ₹10L per annum" className="w-full bg-slate-50 border border-slate-200 rounded-2xl h-14 pl-12 pr-4 text-slate-900 font-bold focus:outline-none focus:border-blue-600 transition-all placeholder:text-slate-400" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 ml-1">Employment Protocol</label>
                            <select className="w-full bg-slate-50 border border-slate-200 rounded-2xl h-14 px-4 text-slate-900 font-bold focus:outline-none focus:border-blue-600 transition-all appearance-none shadow-sm">
                                <option className="bg-white">Permanent Selection</option>
                                <option className="bg-white">Contractual Proxy</option>
                                <option className="bg-white">Strategic Internship</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Job Context */}
                <div className="space-y-8">
                    <h3 className="text-[10px] font-black text-slate-800 uppercase tracking-[0.4em] flex items-center gap-4">
                        Context & Requirements
                        <div className="h-px flex-1 bg-slate-100"></div>
                    </h3>

                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 ml-1">Operational Overview</label>
                        <div className="relative group">
                            <FileText className="absolute left-4 top-6 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
                            <textarea placeholder="Outline the strategic responsibilities and technical requirements..." rows={6} className="w-full bg-slate-50 border border-slate-200 rounded-3xl p-12 pt-6 pl-12 text-slate-900 font-bold focus:outline-none focus:border-blue-600 transition-all resize-none placeholder:text-slate-400"></textarea>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 pt-6">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-[0.2em] text-xs h-16 rounded-2xl shadow-xl shadow-blue-500/20 flex items-center justify-center gap-3">
                        <Rocket size={18} />
                        Broadcast Vacancy
                    </Button>
                    <Button variant="ghost" className="flex-1 text-slate-600 hover:text-blue-600 hover:bg-blue-50 font-black uppercase tracking-[0.2em] text-xs h-16 rounded-2xl border border-slate-200">
                        Draft Save
                    </Button>
                </div>
            </div>
        </div>
    );
}
