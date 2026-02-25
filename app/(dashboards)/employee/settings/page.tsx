"use client";

import { useState } from "react";
import {
    User,
    Bell,
    Shield,
    Eye,
    Moon,
    Smartphone,
    Save,
    ChevronRight,
    Sparkles,
    Lock,
    Globe,
    Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export default function EmployeeSettingsPage() {
    const [activeTab, setActiveTab] = useState("account");

    const TABS = [
        { id: "account", label: "Account", icon: <User size={18} /> },
        { id: "notifications", label: "Notifications", icon: <Bell size={18} /> },
        { id: "privacy", label: "Privacy & Security", icon: <Shield size={18} /> },
        { id: "appearance", label: "Appearance", icon: <Moon size={18} /> },
    ];

    return (
        <div className="max-w-5xl mx-auto space-y-10 relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-slate-900 border-4 border-blue-600 p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="relative z-10">
                    <h2 className="text-3xl font-black text-white tracking-tight leading-tight">
                        System Configuration
                    </h2>
                    <p className="text-blue-400 font-black text-xs uppercase tracking-[0.2em] mt-2 flex items-center gap-2">
                        <Sparkles size={14} />
                        User Protocol Preferences
                    </p>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-widest text-xs h-14 px-10 rounded-2xl transition-all shadow-xl shadow-blue-500/40 flex items-center gap-3">
                    <Save size={18} /> Save Protocol
                </Button>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar Tabs */}
                <aside className="lg:w-72 space-y-2">
                    {TABS.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all font-black text-sm uppercase tracking-wider border-2 ${activeTab === tab.id
                                ? "bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/20"
                                : "bg-white text-slate-800 border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                                }`}
                        >
                            {tab.icon}
                            {tab.label}
                        </button>
                    ))}
                </aside>

                {/* Main Content */}
                <div className="flex-1 bg-white rounded-[2.5rem] border-4 border-slate-100 shadow-2xl p-10">
                    {activeTab === "account" && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
                            <div className="border-b-4 border-slate-50 pb-6">
                                <h3 className="text-xl font-black text-slate-950 uppercase tracking-tight">Identity Profile</h3>
                                <p className="text-slate-600 font-bold text-sm mt-1">Manage your public presence in the Kolar network.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-slate-950 uppercase tracking-widest">Display Name</label>
                                    <input type="text" className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 font-black text-slate-950 focus:border-blue-500 outline-none" defaultValue="Rahul Sharma" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-slate-950 uppercase tracking-widest">Email Endpoint</label>
                                    <input type="email" className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 font-black text-slate-950 focus:border-blue-500 outline-none" defaultValue="rahul@example.com" />
                                </div>
                                <div className="md:col-span-2 space-y-3">
                                    <label className="text-xs font-black text-slate-950 uppercase tracking-widest">Professional Bio</label>
                                    <textarea className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 font-black text-slate-950 focus:border-blue-500 outline-none h-32" defaultValue="Senior UI Designer & Protocol Specialist optimizing district-wide interface workflows." />
                                </div>
                            </div>

                            <div className="pt-6 border-t-4 border-slate-50 flex items-center justify-between p-6 bg-slate-50 rounded-2xl">
                                <div>
                                    <h4 className="font-black text-slate-950 uppercase tracking-tight">Account Visibility</h4>
                                    <p className="text-slate-600 font-bold text-xs mt-1">Allow verified employers to find your profile in talent search.</p>
                                </div>
                                <Switch defaultChecked className="data-[state=checked]:bg-blue-600" />
                            </div>
                        </div>
                    )}

                    {activeTab === "notifications" && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
                            <div className="border-b-4 border-slate-50 pb-6">
                                <h3 className="text-xl font-black text-slate-950 uppercase tracking-tight">Transmission Logs</h3>
                                <p className="text-slate-600 font-bold text-sm mt-1">Configure how system alerts are delivered to you.</p>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { label: "Job Match Alerts", desc: "Get notified when a job matches your protocol", icon: <Sparkles className="text-amber-600" /> },
                                    { label: "Direct Messages", desc: "Broadcasts from verified HR leads", icon: <Globe className="text-blue-600" /> },
                                    { label: "Application Status", desc: "Real-time sync on your recruitment progress", icon: <ChevronRight className="text-emerald-600" /> },
                                    { label: "System Announcements", desc: "Important updates to the Kolar network", icon: <Lock className="text-rose-600" /> },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between p-6 bg-slate-50 border-2 border-slate-100 rounded-3xl hover:border-blue-200 hover:bg-white transition-all group">
                                        <div className="flex items-center gap-4">
                                            <div className="h-10 w-10 rounded-xl bg-white border-2 border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-black text-slate-950 uppercase tracking-tight text-sm">{item.label}</h4>
                                                <p className="text-slate-600 font-bold text-[10px] uppercase tracking-wider">{item.desc}</p>
                                            </div>
                                        </div>
                                        <Switch defaultChecked className="data-[state=checked]:bg-blue-600" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === "appearance" && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
                            <div className="border-b-4 border-slate-50 pb-6">
                                <h3 className="text-xl font-black text-slate-950 uppercase tracking-tight">Visual Interface</h3>
                                <p className="text-slate-600 font-bold text-sm mt-1">Customize your viewing experience for maximum clarity.</p>
                            </div>

                            <div className="bg-slate-950 p-8 rounded-[2.5rem] border-4 border-blue-600 text-white relative overflow-hidden group">
                                <div className="absolute inset-0 bg-blue-600/5 pointer-events-none"></div>
                                <div className="flex items-center justify-between relative z-10">
                                    <div className="flex items-center gap-6">
                                        <div className="h-16 w-16 rounded-3xl bg-blue-600/20 flex items-center justify-center text-blue-400 border border-blue-500/30">
                                            <Eye size={32} />
                                        </div>
                                        <div>
                                            <h4 className="text-2xl font-black italic tracking-tight">High Contrast Mode</h4>
                                            <p className="text-blue-400 font-black text-[10px] uppercase tracking-[0.2em]">Aggressive visibility enabled</p>
                                        </div>
                                    </div>
                                    <Switch defaultChecked className="data-[state=checked]:bg-blue-500 scale-150 mr-4" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <button className="flex flex-col items-center gap-4 p-8 rounded-3xl border-4 border-blue-600 bg-blue-50 shadow-2xl transition-all hover:scale-105 group relative overflow-hidden">
                                    <div className="h-20 w-32 bg-white rounded-xl border-4 border-blue-600 shadow-md transform -rotate-1 group-hover:rotate-0 transition-transform"></div>
                                    <span className="font-black text-slate-950 uppercase tracking-widest text-xs">Standard UI</span>
                                    <div className="absolute top-4 right-4 h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg">
                                        <Check size={14} />
                                    </div>
                                </button>
                                <button className="flex flex-col items-center gap-4 p-8 rounded-3xl border-4 border-slate-200 bg-white hover:border-blue-600/40 transition-all hover:scale-105 group">
                                    <div className="h-20 w-32 bg-slate-900 rounded-xl border-2 border-slate-700 shadow-md transform rotate-1 group-hover:rotate-0 transition-transform"></div>
                                    <span className="font-black text-slate-800 uppercase tracking-widest text-xs">Dark Protocol</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
