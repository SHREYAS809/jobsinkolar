"use client";

import { FileText, Download, Sparkles, Plus, Trash2, Edit3, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResumeBuilderPage() {
    return (
        <div className="space-y-10 relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="relative z-10">
                    <h2 className="text-2xl font-black text-white tracking-tight leading-tight">
                        Resume Optimization Protocol
                    </h2>
                    <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mt-2 flex items-center gap-2">
                        <Sparkles size={14} className="text-blue-400" />
                        AI-enhanced profile synthesis
                    </p>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-widest text-[10px] h-14 px-8 rounded-2xl transition-all shadow-xl shadow-blue-500/20 flex items-center gap-3 relative z-10">
                    <Download size={18} /> Export Protocol
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 space-y-8">
                    <div className="glass-panel p-10 rounded-[3rem] border border-white/5 space-y-8">
                        <div className="flex justify-between items-center border-b border-white/5 pb-6">
                            <h3 className="text-sm font-black text-white uppercase tracking-[0.3em]">Identity Segment</h3>
                            <Button variant="ghost" className="h-10 w-10 p-0 hover:bg-white/5 text-blue-400"><Edit3 size={18} /></Button>
                        </div>
                        <div className="space-y-4">
                            <div className="h-12 w-full bg-white/5 rounded-xl border border-white/5 flex items-center px-4 font-bold text-sm text-white">Rahul Sharma</div>
                            <div className="h-12 w-full bg-white/5 rounded-xl border border-white/5 flex items-center px-4 font-bold text-sm text-slate-400 italic">Senior UI Designer & Protocol Specialist</div>
                        </div>
                    </div>

                    <div className="glass-panel p-10 rounded-[3rem] border border-white/5 space-y-8">
                        <div className="flex justify-between items-center border-b border-white/5 pb-6">
                            <h3 className="text-sm font-black text-white uppercase tracking-[0.3em]">Experience Log</h3>
                            <Button variant="ghost" className="h-10 px-4 gap-2 hover:bg-white/5 text-blue-400 text-[10px] font-black uppercase tracking-widest border border-white/5 rounded-xl"><Plus size={14} /> Add Segment</Button>
                        </div>
                        <div className="space-y-6">
                            {[1, 2].map((i) => (
                                <div key={i} className="p-6 bg-white/5 rounded-[2rem] border border-white/5 group hover:border-blue-500/30 transition-all flex justify-between items-start">
                                    <div>
                                        <p className="font-black text-white text-sm mb-1 uppercase tracking-tight">Kolar Digital Systems</p>
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Lead UX Architect • 2021 - Present</p>
                                        <p className="text-[11px] text-slate-400 font-medium leading-relaxed max-w-lg">Implementing district-wide interface protocols and streamlining talent acquisition workflows...</p>
                                    </div>
                                    <Button variant="ghost" className="h-10 w-10 p-0 text-slate-600 hover:text-rose-400 opacity-0 group-hover:opacity-100 transition-all"><Trash2 size={16} /></Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="glass-panel p-8 rounded-[3rem] border border-white/5 bg-blue-600/5">
                        <h3 className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] mb-6">Optimization Status</h3>
                        <div className="h-48 w-48 rounded-full border-[10px] border-white/5 mx-auto flex items-center justify-center relative">
                            <div className="absolute inset-0 rounded-full border-t-[10px] border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)]" style={{ transform: 'rotate(240deg)' }}></div>
                            <div className="text-center">
                                <p className="text-3xl font-black text-white">85%</p>
                                <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Protocol Sync</p>
                            </div>
                        </div>
                        <div className="mt-8 space-y-3">
                            <div className="flex items-center gap-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                <ChevronRight size={14} className="text-blue-500" /> Professional Summary Sync
                            </div>
                            <div className="flex items-center gap-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                <ChevronRight size={14} className="text-blue-500" /> Skill Matrix Verification
                            </div>
                            <div className="flex items-center gap-3 text-[10px] font-bold text-rose-400 uppercase tracking-widest opacity-80">
                                <ChevronRight size={14} className="text-rose-500" /> Pending Experience Log
                            </div>
                        </div>
                    </div>

                    <div className="glass-panel p-8 rounded-[3.5rem] border border-white/5 flex flex-col items-center text-center">
                        <div className="h-16 w-16 rounded-2xl bg-indigo-600/10 flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/20">
                            <Sparkles size={28} />
                        </div>
                        <h4 className="text-sm font-black text-white uppercase tracking-widest mb-2">AI Recalibration</h4>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-loose mb-6">Let our intelligence engine refine your transmission for maximum impact in Kolar.</p>
                        <Button className="w-full bg-white/5 hover:bg-white/10 text-white font-black uppercase tracking-widest text-[9px] h-12 rounded-xl border border-white/10">Execute AI Protocol</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
