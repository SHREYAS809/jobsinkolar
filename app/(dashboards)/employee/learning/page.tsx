"use client";

import { Star, Play, BookOpen, Trophy, Clock, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const COURSES = [
    { id: 1, title: "District Management Protocol", provider: "Kolar Academy", duration: "12h", level: "Expert", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" },
    { id: 2, title: "Infrastructure Logistics", provider: "Industrial Node", duration: "8h", level: "Intermediate", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2340&auto=format&fit=crop" },
    { id: 3, title: "Nexus Protocol Design", provider: "UI Syndicate", duration: "15h", level: "Master", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2340&auto=format&fit=crop" },
];

export default function LearningHubPage() {
    return (
        <div className="space-y-10 relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="relative z-10">
                    <h2 className="text-2xl font-black text-white tracking-tight leading-tight">
                        Learning Hub Protocol
                    </h2>
                    <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mt-2 flex items-center gap-2">
                        <BookOpen size={14} className="text-indigo-400" />
                        Upskilling the district workforce
                    </p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 mb-10">
                <div className="relative flex-1 group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors" size={18} />
                    <input type="text" placeholder="Trace Curriculum..." className="w-full bg-white/5 border border-white/5 rounded-2xl h-14 pl-12 pr-4 text-white font-bold text-xs focus:outline-none focus:border-indigo-500/30 transition-all shadow-inner" />
                </div>
                <Button variant="ghost" className="h-14 px-8 rounded-2xl bg-white/5 border border-white/5 text-slate-400 hover:text-white font-black uppercase tracking-widest text-xs flex items-center gap-3">
                    <Filter size={16} /> Refine Matrix
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {COURSES.map((course) => (
                    <div key={course.id} className="glass-panel rounded-[3rem] border border-white/5 overflow-hidden group hover:-translate-y-2 transition-all duration-500">
                        <div className="h-48 w-full relative">
                            <div className="absolute inset-0 bg-indigo-900/40 mix-blend-overlay z-10"></div>
                            <img src={course.image} alt={course.title} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 active:scale-110" />
                            <div className="absolute top-6 right-6 z-20">
                                <div className="h-12 w-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white shadow-xl">
                                    <Play size={20} fill="currentColor" className="ml-1" />
                                </div>
                            </div>
                        </div>

                        <div className="p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-[9px] font-black uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-lg border border-indigo-500/20">{course.level}</span>
                                <div className="flex items-center gap-2 text-[9px] font-black text-slate-500 uppercase tracking-widest">
                                    <Clock size={12} /> {course.duration}
                                </div>
                            </div>

                            <h3 className="text-lg font-black text-white mb-2 tracking-tight group-hover:text-indigo-400 transition-colors uppercase">{course.title}</h3>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-8">{course.provider}</p>

                            <div className="flex items-center justify-between border-t border-white/5 pt-6">
                                <div className="flex items-center gap-1">
                                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={10} className="fill-indigo-500 text-indigo-500" />)}
                                </div>
                                <Button variant="ghost" className="text-[10px] font-black text-white uppercase tracking-widest hover:text-indigo-400 h-8 px-0">Initialize</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
