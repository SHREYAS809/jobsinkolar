"use client";

import { Bookmark, Briefcase, MapPin, Building2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const SAVED_JOBS = [
    {
        id: 1,
        title: "Project Lead (Infrastructure)",
        company: "Kolar Smart City Project",
        location: "Kolar Central",
        salary: "₹1,20,000 - ₹1,80,000",
        tags: ["Urgent", "Contract"],
        savedAt: "2 hours ago",
    },
    {
        id: 2,
        title: "Senior Horticulturist",
        company: "Green District Initiative",
        location: "Malur",
        salary: "₹65,000 - ₹85,000",
        tags: ["Full-time"],
        savedAt: "Yesterday",
    },
];

export default function SavedJobsPage() {
    return (
        <div className="space-y-10 relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute -left-10 -top-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-all duration-700"></div>
                <div className="relative z-10">
                    <h2 className="text-2xl font-black text-white tracking-tight leading-tight">
                        Saved Opportunities
                    </h2>
                    <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mt-2 flex items-center gap-2">
                        <Bookmark size={14} className="text-blue-400" />
                        {SAVED_JOBS.length} Bookmarked vacanies
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {SAVED_JOBS.map((job) => (
                    <div key={job.id} className="glass-card p-8 rounded-3xl transition-all hover:scale-[1.02] border border-white/5 group">
                        <div className="flex justify-between items-start mb-6">
                            <div className="h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 shadow-inner group-hover:bg-blue-600/20 group-hover:border-blue-500/30 transition-all">
                                <Briefcase size={28} />
                            </div>
                            <button className="h-10 w-10 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                                <Bookmark size={18} fill="currentColor" />
                            </button>
                        </div>

                        <h3 className="text-xl font-black text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors">
                            {job.title}
                        </h3>

                        <div className="flex items-center gap-2 text-slate-400 font-bold text-sm mb-6">
                            <Building2 size={16} className="text-indigo-400" />
                            {job.company}
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="bg-white/5 p-3 rounded-2xl border border-white/5 flex items-center gap-3">
                                <MapPin size={16} className="text-rose-500" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">{job.location}</span>
                            </div>
                            <div className="bg-white/5 p-3 rounded-2xl border border-white/5 flex items-center gap-3">
                                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">{job.salary}</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                                Saved {job.savedAt}
                            </span>
                            <Button className="bg-white/5 hover:bg-white/10 text-white font-black uppercase tracking-widest text-[10px] h-10 px-6 rounded-xl border border-white/10 flex items-center gap-2">
                                Apply Now <ExternalLink size={14} />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
