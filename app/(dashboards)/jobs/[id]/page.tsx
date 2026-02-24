"use client";

import { Briefcase, MapPin, Building2, Calendar, IndianRupee, Share2, Bookmark, ArrowLeft, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { use } from "react";

export default function JobDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);

    return (
        <div className="max-w-5xl mx-auto space-y-10 relative z-10">
            <Link href="/employee" className="inline-flex items-center gap-2 text-slate-400 hover:text-white font-black uppercase tracking-widest text-[10px] transition-all group">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Terminal
            </Link>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Main Content */}
                <div className="flex-1 space-y-8">
                    <div className="glass-panel p-10 rounded-[3rem] space-y-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8">
                            <div className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-emerald-500/5">
                                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                Actively Hiring
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="h-20 w-20 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 shadow-inner">
                                <Building2 size={40} />
                            </div>
                            <div>
                                <h1 className="text-4xl font-black text-white tracking-tight leading-tight mb-2">Senior Regional Architect</h1>
                                <div className="flex items-center gap-4 text-slate-400 font-bold text-sm">
                                    <span className="flex items-center gap-2"><MapPin size={16} className="text-rose-500" /> Kolar Gold Fields</span>
                                    <span className="h-1 w-1 rounded-full bg-slate-800"></span>
                                    <span className="flex items-center gap-2 text-indigo-400">Published 2 days ago</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                            <div className="bg-white/5 p-5 rounded-[2rem] border border-white/5 text-center group hover:border-blue-500/20 transition-all">
                                <IndianRupee size={20} className="mx-auto mb-3 text-emerald-400 group-hover:scale-110 transition-transform" />
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Resource</p>
                                <p className="text-sm font-black text-white">₹12L - 18L</p>
                            </div>
                            <div className="bg-white/5 p-5 rounded-[2rem] border border-white/5 text-center group hover:border-blue-500/20 transition-all">
                                <Briefcase size={20} className="mx-auto mb-3 text-blue-400 group-hover:scale-110 transition-transform" />
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Protocol</p>
                                <p className="text-sm font-black text-white">Full-time</p>
                            </div>
                            <div className="bg-white/5 p-5 rounded-[2rem] border border-white/5 text-center group hover:border-blue-500/20 transition-all">
                                <Users size={20} className="mx-auto mb-3 text-indigo-400 group-hover:scale-110 transition-transform" />
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Queue</p>
                                <p className="text-sm font-black text-white">42 Applicants</p>
                            </div>
                            <div className="bg-white/5 p-5 rounded-[2rem] border border-white/5 text-center group hover:border-blue-500/20 transition-all">
                                <TrendingUp size={20} className="mx-auto mb-3 text-purple-400 group-hover:scale-110 transition-transform" />
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Priority</p>
                                <p className="text-sm font-black text-white">High</p>
                            </div>
                        </div>
                    </div>

                    <div className="glass-panel p-10 rounded-[3rem] space-y-10">
                        <section className="space-y-6">
                            <h3 className="text-sm font-black text-white uppercase tracking-[0.3em] flex items-center gap-4">
                                Operational Overview
                                <div className="h-px flex-1 bg-white/5"></div>
                            </h3>
                            <p className="text-slate-400 font-bold leading-relaxed">
                                We are seeking a Senior Regional Architect to lead the urban expansion projects in the KGF region. This is a strategic role requiring deep knowledge of local geological conditions and modern structural engineering protocols.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h3 className="text-sm font-black text-white uppercase tracking-[0.3em] flex items-center gap-4">
                                Core Directives
                                <div className="h-px flex-1 bg-white/5"></div>
                            </h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Lead multi-disciplinary design teams",
                                    "Optimize structural resource allocation",
                                    "Oversee site-specific safety protocols",
                                    "Stakeholder synchronization",
                                    "Regulatory compliance audit",
                                    "Strategic material selection"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-xs font-black text-slate-300 uppercase tracking-widest bg-white/5 p-4 rounded-2xl border border-white/5">
                                        <CheckCircle2 size={16} className="text-blue-500" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>
                </div>

                {/* Sidebar Actions */}
                <div className="w-full lg:w-80 space-y-8">
                    <div className="glass-panel p-8 rounded-[3rem] space-y-6 sticky top-28">
                        <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-[0.2em] text-xs h-16 rounded-[1.5rem] shadow-2xl shadow-blue-500/20 flex items-center justify-center gap-3">
                            Initiate Application
                        </Button>
                        <Button variant="ghost" className="w-full text-slate-400 hover:text-white hover:bg-white/5 font-black uppercase tracking-[0.2em] text-xs h-16 rounded-[1.5rem] border border-white/10 flex items-center justify-center gap-3">
                            <Bookmark size={18} /> Save Protocol
                        </Button>

                        <div className="pt-6 border-t border-white/5">
                            <button className="flex items-center gap-3 text-slate-500 hover:text-indigo-400 font-black uppercase tracking-widest text-[9px] mx-auto transition-colors">
                                <Share2 size={14} /> Distribute Vacancy
                            </button>
                        </div>
                    </div>

                    <div className="glass-panel p-8 rounded-[3rem] space-y-6 bg-slate-900/40">
                        <h4 className="text-[10px] font-black text-white uppercase tracking-widest">Employer Security</h4>
                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                            <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                                <ShieldCheck size={20} />
                            </div>
                            <div className="flex-1">
                                <p className="text-[10px] font-black text-white uppercase tracking-widest">Verified Entity</p>
                                <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Kolar District Auth</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import { TrendingUp, Users as UsersIcon } from "lucide-react";
const Users = UsersIcon;
