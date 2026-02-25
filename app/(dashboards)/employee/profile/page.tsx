"use client";

import { User, Mail, Phone, MapPin, Camera, Save, Shield, ShieldCheck, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
    return (
        <div className="max-w-4xl mx-auto space-y-10 relative z-10">
            <div className="flex flex-col md:flex-row md:items-center gap-8 bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="relative">
                    <div className="h-32 w-32 rounded-[2.5rem] bg-gradient-to-tr from-blue-600 to-indigo-600 p-1 shadow-2xl shadow-blue-500/20">
                        <div className="h-full w-full rounded-[2.3rem] bg-slate-950 flex items-center justify-center text-4xl font-black text-white relative overflow-hidden group/avatar">
                            JD
                            <button className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover/avatar:opacity-100 transition-opacity flex items-center justify-center">
                                <Camera size={24} className="text-blue-400" />
                            </button>
                        </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 h-10 w-10 rounded-2xl bg-emerald-500 border-4 border-slate-950 flex items-center justify-center text-white shadow-lg">
                        <ShieldCheck size={20} />
                    </div>
                </div>

                <div className="relative z-10 flex-1">
                    <h2 className="text-3xl font-black text-white tracking-tight mb-2">John Doe</h2>
                    <p className="text-white font-black text-xs uppercase tracking-widest flex items-center gap-2">
                        Verified Member • Kolar District Talent Pool
                    </p>
                    <div className="flex flex-wrap gap-3 mt-6">
                        <span className="px-4 py-1.5 rounded-full bg-blue-600 text-white border-2 border-blue-400 text-[10px] font-black uppercase tracking-widest shadow-lg">UI/UX Engineer</span>
                        <span className="px-4 py-1.5 rounded-full bg-indigo-600 text-white border-2 border-indigo-400 text-[10px] font-black uppercase tracking-widest shadow-lg">Full-Stack Dev</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass-panel p-10 rounded-[2.5rem] space-y-8">
                    <h3 className="text-sm font-black text-white uppercase tracking-[0.3em] mb-4">Identity Protocol</h3>

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white ml-1 bg-white/10 px-2 py-0.5 rounded">Full Designation</label>
                            <div className="relative group">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white group-focus-within:text-blue-400 transition-colors" size={18} />
                                <input type="text" defaultValue="John Doe" className="w-full bg-slate-900 border-2 border-white/20 rounded-2xl h-14 pl-12 pr-4 text-white font-black placeholder:text-slate-400 focus:outline-none focus:border-blue-500 transition-all shadow-inner" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white ml-1 bg-white/10 px-2 py-0.5 rounded">Communication Channel</label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white group-focus-within:text-blue-400 transition-colors" size={18} />
                                <input type="email" defaultValue="john.doe@kolarnetwork.com" className="w-full bg-slate-900 border-2 border-white/20 rounded-2xl h-14 pl-12 pr-4 text-white font-black focus:outline-none focus:border-blue-500 transition-all shadow-inner" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white ml-1 bg-white/10 px-2 py-0.5 rounded">Direct Line</label>
                            <div className="relative group">
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white group-focus-within:text-blue-400 transition-colors" size={18} />
                                <input type="text" defaultValue="+91 98765 43210" className="w-full bg-slate-900 border-2 border-white/20 rounded-2xl h-14 pl-12 pr-4 text-white font-black focus:outline-none focus:border-blue-500 transition-all shadow-inner" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="glass-panel p-10 rounded-[2.5rem] space-y-8">
                        <h3 className="text-sm font-black text-white uppercase tracking-[0.3em] mb-4">Strategic Location</h3>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white ml-1 bg-white/10 px-2 py-0.5 rounded">Kolar Jurisdiction</label>
                            <div className="relative group">
                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-white group-focus-within:text-blue-400 transition-colors" size={18} />
                                <input type="text" defaultValue="Bangarapet, Kolar District" className="w-full bg-slate-900 border-2 border-white/20 rounded-2xl h-14 pl-12 pr-4 text-white font-black focus:outline-none focus:border-blue-500 transition-all shadow-inner" />
                            </div>
                        </div>
                    </div>

                    <div className="glass-panel p-10 rounded-[2.5rem] border-blue-500/10 bg-blue-500/5">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-12 w-12 rounded-2xl bg-blue-600/20 flex items-center justify-center text-blue-400 border border-blue-500/30">
                                <Award size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-black uppercase tracking-widest text-[10px]">Resume Strength</h4>
                                <p className="text-2xl font-black text-white">85%</p>
                            </div>
                        </div>
                        <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden border border-white/20">
                            <div className="h-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.9)] w-[85%]"></div>
                        </div>
                        <p className="mt-4 text-[10px] font-black text-white uppercase tracking-widest bg-blue-600/20 px-3 py-1 rounded-lg border border-blue-500/30">Optimization Complete • 15% pending</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-end pt-6">
                <Button className="bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-[0.2em] text-xs h-16 px-12 rounded-2xl shadow-2xl shadow-blue-500/20 flex items-center gap-3">
                    <Save size={18} />
                    Update Protocol Data
                </Button>
            </div>
        </div>
    );
}
