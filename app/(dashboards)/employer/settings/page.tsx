"use client";

import { useState } from "react";
import {
    Building2,
    Users,
    ShieldCheck,
    BarChart3,
    Settings2,
    CreditCard,
    CheckCircle2,
    Lock,
    Mail,
    Zap,
    Briefcase
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export default function EmployerSettingsPage() {
    const [activeTab, setActiveTab] = useState("company");

    const TABS = [
        { id: "company", label: "Company Profile", icon: <Building2 size={18} /> },
        { id: "recruitment", label: "Recruitment", icon: <Briefcase size={18} /> },
        { id: "team", label: "Team Access", icon: <Users size={18} /> },
        { id: "billing", label: "Billing & Plans", icon: <CreditCard size={18} /> },
    ];

    return (
        <div className="max-w-5xl mx-auto space-y-10 relative z-10">
            {/* Header Banner */}
            <div className="bg-slate-950 border-4 border-emerald-500 p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="relative z-10">
                    <h2 className="text-3xl font-black text-white tracking-tight leading-tight">
                        Employer Control Center
                    </h2>
                    <div className="flex items-center gap-3 mt-2">
                        <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/30 flex items-center gap-1">
                            <ShieldCheck size={12} /> Verified Enterprise
                        </span>
                    </div>
                </div>
                <Button className="bg-emerald-600 hover:bg-emerald-500 text-white font-black uppercase tracking-widest text-xs h-14 px-10 rounded-2xl transition-all shadow-xl shadow-emerald-500/40 flex items-center gap-3 relative z-10">
                    <Zap size={18} /> Update Deployment
                </Button>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Navigation */}
                <aside className="lg:w-72 space-y-3">
                    {TABS.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl transition-all font-black text-sm uppercase tracking-wider border-4 ${activeTab === tab.id
                                    ? "bg-emerald-600 text-white border-emerald-500 shadow-lg shadow-emerald-500/20"
                                    : "bg-white text-slate-800 border-slate-100 hover:bg-slate-50 hover:border-slate-200 shadow-sm"
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                {tab.icon}
                                {tab.label}
                            </div>
                            {activeTab === tab.id && <div className="h-2 w-2 rounded-full bg-white animate-pulse"></div>}
                        </button>
                    ))}
                </aside>

                {/* Workspace */}
                <div className="flex-1 bg-white rounded-[3rem] border-4 border-slate-100 shadow-2xl p-10">
                    {activeTab === "company" && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
                            <div className="flex items-center justify-between border-b-4 border-slate-50 pb-6">
                                <div>
                                    <h3 className="text-xl font-black text-slate-950 uppercase tracking-tight">Organization Identity</h3>
                                    <p className="text-slate-600 font-bold text-sm mt-1">Official data as displayed to job seekers.</p>
                                </div>
                                <div className="h-16 w-16 bg-slate-100 rounded-2xl border-2 border-slate-200 flex items-center justify-center text-slate-400">
                                    <Building2 size={32} />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-slate-950 uppercase tracking-widest flex items-center gap-2">
                                        Official Company Name
                                    </label>
                                    <input type="text" className="w-full bg-slate-50 border-4 border-slate-100 rounded-2xl px-5 py-4 font-black text-slate-950 focus:border-emerald-500 outline-none transition-all" defaultValue="Kolar Digital Systems" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-slate-950 uppercase tracking-widest">Industry Classification</label>
                                    <select className="w-full bg-slate-50 border-4 border-slate-100 rounded-2xl px-5 py-4 font-black text-slate-950 focus:border-emerald-500 outline-none transition-all">
                                        <option>Technology & Innovation</option>
                                        <option>Agriculture & Agrotech</option>
                                        <option>Manufacturing</option>
                                        <option>Education</option>
                                    </select>
                                </div>
                                <div className="md:col-span-2 space-y-3">
                                    <label className="text-xs font-black text-slate-950 uppercase tracking-widest">Company Mission</label>
                                    <textarea className="w-full bg-slate-50 border-4 border-slate-100 rounded-2xl px-5 py-4 font-black text-slate-950 focus:border-emerald-500 outline-none h-32 resize-none transition-all" defaultValue="Empowering Kolar through digital transformation and sustainable talent development." />
                                </div>
                            </div>

                            <div className="bg-emerald-50 border-4 border-emerald-100 rounded-[2rem] p-6 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-xl bg-emerald-500 flex items-center justify-center text-white shadow-lg">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-slate-950 uppercase tracking-tight">Verification Status</h4>
                                        <p className="text-emerald-700 font-bold text-[10px] uppercase tracking-widest">Your enterprise is fully verified</p>
                                    </div>
                                </div>
                                <CheckCircle2 className="text-emerald-600" size={32} />
                            </div>
                        </div>
                    )}

                    {activeTab === "recruitment" && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
                            <div className="border-b-4 border-slate-50 pb-6">
                                <h3 className="text-xl font-black text-slate-950 uppercase tracking-tight">Recruitment Protocol</h3>
                                <p className="text-slate-600 font-bold text-sm mt-1">Manage how you interact with candidates.</p>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { label: "Auto-Acknowledgement", desc: "Send receipt trigger to all applicants", active: true },
                                    { label: "Talent Radar", desc: "Allow system to suggest matching candidates", active: true },
                                    { label: "Video Interview Sync", desc: "Enable integrated video conferencing", active: false },
                                    { label: "Social Reach", desc: "Cross-post listings to community hubs", active: true },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between p-6 bg-white border-4 border-slate-50 rounded-3xl hover:border-emerald-200 transition-all shadow-sm group">
                                        <div className="flex items-center gap-6">
                                            <div className={`h-3 w-3 rounded-full ${item.active ? 'bg-emerald-500' : 'bg-slate-300'}`}></div>
                                            <div>
                                                <h4 className="font-black text-slate-950 uppercase tracking-tight text-sm">{item.label}</h4>
                                                <p className="text-slate-500 font-bold text-[10px] uppercase tracking-wider">{item.desc}</p>
                                            </div>
                                        </div>
                                        <Switch defaultChecked={item.active} className="data-[state=checked]:bg-emerald-600" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
