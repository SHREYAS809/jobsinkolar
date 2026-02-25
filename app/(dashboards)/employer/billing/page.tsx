"use client";

import { CreditCard, Download, Zap, Shield, ArrowUpRight, History, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const TRANSACTIONS = [
    { id: 1, type: "Protocol Upgrade", amount: "₹4,999", date: "Oct 24, 2023", status: "Success" },
    { id: 2, type: "Credit Acquisition", amount: "₹2,500", date: "Oct 20, 2023", status: "Success" },
    { id: 3, type: "Monthly Allocation", amount: "₹1,200", date: "Oct 15, 2023", status: "Success" },
];

export default function EmployerBillingPage() {
    return (
        <div className="space-y-10 relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="relative z-10">
                    <h2 className="text-3xl font-black text-white tracking-tight leading-tight">
                        Financial Synchronization
                    </h2>
                    <p className="text-white font-black text-xs uppercase tracking-widest mt-2 flex items-center gap-2">
                        <CreditCard size={14} className="text-emerald-400" />
                        Managing district recruitment credits
                    </p>
                </div>
                <Button className="bg-emerald-600 hover:bg-emerald-500 text-white font-black uppercase tracking-widest text-[10px] h-14 px-8 rounded-2xl transition-all shadow-xl shadow-emerald-500/20 flex items-center gap-3 relative z-10">
                    <Plus size={18} /> Add Credits
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 space-y-8">
                    <div className="glass-panel p-10 rounded-[3rem] border border-white/5 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 relative overflow-hidden group">
                        <div className="relative z-10">
                            <h3 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-10 bg-white/10 px-2 py-1 rounded inline-block">Credit Allocation</h3>
                            <p className="text-5xl font-black text-white mb-2 underline decoration-indigo-500 decoration-4 underline-offset-8">1,240 <span className="text-xs text-indigo-200 tracking-normal no-underline">Credits</span></p>
                            <p className="text-[10px] text-white font-black uppercase tracking-widest mt-10 mb-10">Sufficient for 24 elite syncs</p>
                            <Button className="w-full bg-white text-slate-950 font-black uppercase tracking-widest text-[9px] h-12 rounded-xl shadow-2xl">Recalibrate Balance</Button>
                        </div>
                        <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
                            <Zap size={200} fill="currentColor" className="text-white" />
                        </div>
                    </div>

                    <div className="glass-panel p-8 rounded-[3rem] border-2 border-white/20 space-y-6 bg-slate-900 shadow-xl">
                        <h4 className="text-[10px] font-black text-white uppercase tracking-widest border-b-2 border-white/20 pb-4">Protocol Plan</h4>
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-black text-white uppercase tracking-tight">Enterprise Elite</span>
                            <span className="text-[10px] font-black text-white bg-emerald-600 px-3 py-1 rounded-lg border-2 border-emerald-400 shadow-lg shadow-emerald-500/20">Active</span>
                        </div>
                        <p className="text-[10px] text-blue-300 font-black uppercase tracking-widest leading-loose bg-blue-500/10 p-2 rounded-lg">Next auto-sync on Nov 15, 2023</p>
                        <Button variant="ghost" className="w-full text-[9px] font-black text-white hover:bg-white/20 border-2 border-white/20 rounded-xl h-12 transition-all shadow-md">Modify Protocol</Button>
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <div className="glass-panel p-2 rounded-[3rem] border border-white/5 overflow-hidden">
                        <div className="p-8 border-b-2 border-white/20 flex justify-between items-center bg-white/5">
                            <h3 className="text-sm font-black text-white uppercase tracking-[0.3em]">Transaction History</h3>
                            <History size={18} className="text-white" />
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <tbody className="divide-y divide-white/5">
                                    {TRANSACTIONS.map((t) => (
                                        <tr key={t.id} className="hover:bg-white/5 transition-colors group">
                                            <td className="px-8 py-6">
                                                <p className="font-black text-white text-sm mb-1 uppercase tracking-tight">{t.type}</p>
                                                <p className="text-[9px] text-blue-300 font-black uppercase tracking-widest">{t.date}</p>
                                            </td>
                                            <td className="px-8 py-6 text-sm font-black text-white">{t.amount}</td>
                                            <td className="px-8 py-6">
                                                <span className="text-[9px] font-black text-white bg-emerald-600 px-3 py-1 rounded-lg border border-emerald-400 shadow-md uppercase tracking-widest">Confirmed</span>
                                            </td>
                                            <td className="px-8 py-6 text-right">
                                                <button className="h-10 w-10 bg-blue-600 rounded-xl border-2 border-blue-400 flex items-center justify-center text-white hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20">
                                                    <Download size={16} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
