"use client";

import { Building2, Globe, MapPin, Mail, Edit3, Camera, LayoutDashboard, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CompanyProfilePage() {
    return (
        <div className="space-y-10 relative z-10">
            <div className="relative h-64 w-full rounded-[4rem] overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2340&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-40 active:scale-110 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <Button className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/10 rounded-2xl h-12 px-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
                    <Camera size={16} /> Update Protocol View
                </Button>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 -mt-32 relative z-20 px-8">
                <div className="w-full lg:w-80 space-y-8">
                    <div className="glass-panel p-2 rounded-[3.5rem] border border-white/10 shadow-2xl overflow-hidden">
                        <div className="bg-slate-950/80 backdrop-blur-3xl p-8 flex flex-col items-center text-center">
                            <div className="h-32 w-32 rounded-[2.5rem] bg-gradient-to-tr from-indigo-600 to-purple-500 p-1 mb-8 shadow-2xl">
                                <div className="h-full w-full rounded-[2.2rem] bg-slate-950 flex items-center justify-center text-white">
                                    <Building2 size={48} />
                                </div>
                            </div>
                            <h3 className="text-xl font-black text-white tracking-tight mb-2 uppercase">Nexus Corp Kolar</h3>
                            <p className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-8 bg-white/10 px-3 py-1 rounded-lg border border-white/20">Strategic Entity</p>
                            <Button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-black uppercase tracking-widest text-[9px] h-12 rounded-xl shadow-lg shadow-indigo-500/10">Synchronize Data</Button>
                        </div>
                    </div>

                    <div className="glass-panel p-8 rounded-[3rem] border border-white/10 space-y-6 bg-slate-900 shadow-xl">
                        <div className="flex items-center gap-4 text-white font-black text-xs uppercase tracking-widest">
                            <Globe size={16} className="text-indigo-400" /> nexus-kolar.io
                        </div>
                        <div className="flex items-center gap-4 text-white font-black text-xs uppercase tracking-widest">
                            <MapPin size={16} className="text-indigo-400" /> Industrial Hub A1
                        </div>
                        <div className="flex items-center gap-4 text-white font-black text-xs uppercase tracking-widest">
                            <Mail size={16} className="text-indigo-400" /> entity@nexus.co
                        </div>
                    </div>
                </div>

                <div className="flex-1 space-y-10">
                    <div className="glass-panel p-12 rounded-[4rem] border border-white/5 space-y-8">
                        <div className="flex justify-between items-center border-b-2 border-white/20 pb-8">
                            <h3 className="text-sm font-black text-white uppercase tracking-[0.3em]">Entity Narrative</h3>
                            <Button variant="ghost" className="text-indigo-400 hover:text-white hover:bg-indigo-600/30 h-10 px-4 rounded-xl border-2 border-indigo-500/40 text-[10px] font-black uppercase tracking-widest gap-2 shadow-lg">
                                <Edit3 size={14} /> Recalibrate
                            </Button>
                        </div>
                        <p className="text-white font-black text-sm leading-loose">
                            Nexus Corp Kolar is a primary strategic entity within the district, focusing on the delivery of high-end infrastructure protocols and logistics synchronization. We are committed to building a world-class workforce to power the region's future industrial corridors.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="glass-panel p-10 rounded-[3rem] border border-white/5 bg-indigo-600/5 group">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-10 w-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
                                    <LayoutDashboard size={20} />
                                </div>
                                <h4 className="text-[10px] font-black text-white uppercase tracking-widest">Protocol Capacity</h4>
                            </div>
                            <p className="text-3xl font-black text-white mb-2">42 Active</p>
                            <p className="text-[9px] text-blue-300 font-black uppercase tracking-widest bg-blue-500/20 px-2 py-0.5 rounded border border-blue-500/30">Open Vacancy Allocations</p>
                        </div>
                        <div className="glass-panel p-10 rounded-[3rem] border border-white/5 group">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-10 w-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20">
                                    <Sparkles size={20} />
                                </div>
                                <h4 className="text-[10px] font-black text-white uppercase tracking-widest">Entity Integrity</h4>
                            </div>
                            <p className="text-3xl font-black text-white mb-2">Elite Tier</p>
                            <p className="text-[9px] text-purple-300 font-black uppercase tracking-widest bg-purple-500/20 px-2 py-0.5 rounded border border-purple-500/30">Verified District Status</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
