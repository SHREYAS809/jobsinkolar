"use client";

import { MessageSquare, Search, Send, User, MoreVertical, Paperclip, Smile, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const CONTACTS = [
    { id: 1, name: "HR - Kolar Smart City", lastMsg: "Please provide your portfolio links.", time: "10:24 AM", active: true, online: true },
    { id: 2, name: "Narayana Health RR", lastMsg: "Interview scheduled for Monday.", time: "Yesterday", active: false, online: true },
    { id: 3, name: "Amazon Fulfillment Kolar", lastMsg: "Your application is under review.", time: "Oct 22", active: false, online: false },
];

export default function MessagesPage() {
    return (
        <div className="h-[calc(100vh-160px)] flex flex-col md:flex-row glass-panel rounded-[3rem] overflow-hidden relative z-10">

            {/* Sidebar - Contacts */}
            <div className="w-full md:w-80 border-r border-white/5 flex flex-col bg-slate-950/20">
                <div className="p-8 border-b border-white/5">
                    <h2 className="text-xl font-black text-white tracking-tight mb-6 flex items-center gap-3">
                        <MessageSquare className="text-blue-400" />
                        Nexus Chat
                    </h2>
                    <div className="relative group">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors" size={16} />
                        <input type="text" placeholder="Search Channels..." className="w-full bg-white/5 border border-white/10 rounded-xl h-10 pl-10 pr-4 text-xs font-bold text-white focus:outline-none focus:border-blue-500/30 transition-all" />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    {CONTACTS.map((contact) => (
                        <div key={contact.id} className={`p-6 flex items-center gap-4 cursor-pointer transition-all border-l-4 ${contact.active ? "bg-blue-600/10 border-blue-500" : "border-transparent hover:bg-white/5"}`}>
                            <div className="relative">
                                <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 font-black text-xs">
                                    {(contact.name?.split(' ') || []).filter(Boolean).map(n => n[0]).join('')}
                                </div>
                                {contact.online && <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-emerald-500 border-2 border-slate-900 shadow-lg"></div>}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-center mb-1">
                                    <h4 className="text-xs font-black text-white truncate uppercase tracking-widest">{contact.name}</h4>
                                    <span className="text-[9px] font-bold text-slate-500">{contact.time}</span>
                                </div>
                                <p className="text-[10px] text-slate-400 truncate opacity-70">{contact.lastMsg}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col bg-slate-950/40">
                {/* Chat Header */}
                <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/5">
                    <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-black">
                            HK
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h3 className="text-sm font-black text-white uppercase tracking-widest">HR - Kolar Smart City</h3>
                                <ShieldCheck size={14} className="text-blue-400" />
                            </div>
                            <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest">Protocol Verified • Active Session</p>
                        </div>
                    </div>
                    <button className="h-10 w-10 flex items-center justify-center text-slate-400 hover:text-white rounded-xl hover:bg-white/5 transition-all">
                        <MoreVertical size={20} />
                    </button>
                </div>

                {/* Messages Area */}
                <div className="flex-1 p-8 overflow-y-auto space-y-8 custom-scrollbar">
                    <div className="flex justify-center">
                        <span className="px-4 py-1 rounded-lg bg-white/5 border border-white/5 text-[9px] font-black uppercase tracking-widest text-slate-500">
                            Secure Protocol Established • Oct 25, 2023
                        </span>
                    </div>

                    {/* Received Message */}
                    <div className="flex items-start gap-4 max-w-[80%]">
                        <div className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-black text-slate-400">HK</div>
                        <div className="p-5 rounded-[1.5rem] rounded-tl-none bg-white/5 border border-white/10 text-slate-300 text-xs font-bold leading-relaxed">
                            Greetings, we've reviewed your credentials for the Infrastructure Lead position. The team is impressed with your local project experience in Bangarapet.
                        </div>
                    </div>

                    <div className="flex items-start gap-4 max-w-[80%]">
                        <div className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-black text-slate-400">HK</div>
                        <div className="p-5 rounded-[1.5rem] rounded-tl-none bg-white/5 border border-white/10 text-slate-300 text-xs font-bold leading-relaxed">
                            Please provide your portfolio links and recent project certifications for final verification.
                        </div>
                    </div>

                    {/* Sent Message */}
                    <div className="flex items-start gap-4 max-w-[80%] ml-auto flex-row-reverse">
                        <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center text-[10px] font-black text-white shadow-lg shadow-blue-500/20">JD</div>
                        <div className="p-5 rounded-[1.5rem] rounded-tr-none bg-blue-600 text-white text-xs font-bold leading-relaxed shadow-xl shadow-blue-500/10">
                            Thank you for the update! I've attached my structural engineering certifications and the Bangarapet bypass bridge project overview.
                        </div>
                    </div>
                </div>

                {/* Message Input */}
                <div className="p-8 border-t border-white/5 bg-white/5">
                    <div className="flex items-center gap-4 bg-slate-950/50 border border-white/5 rounded-[1.5rem] p-2 focus-within:border-blue-500/30 transition-all">
                        <button className="h-10 w-10 flex items-center justify-center text-slate-500 hover:text-blue-400 transition-colors">
                            <Paperclip size={20} />
                        </button>
                        <input type="text" placeholder="Enter transmission..." className="flex-1 bg-transparent border-none text-xs font-bold text-white focus:outline-none placeholder:text-slate-600" />
                        <button className="h-10 w-10 flex items-center justify-center text-slate-500 hover:text-blue-400 transition-colors">
                            <Smile size={20} />
                        </button>
                        <Button className="h-10 w-10 p-0 bg-blue-600 hover:bg-blue-500 text-white rounded-xl shadow-lg shadow-blue-500/20">
                            <Send size={18} />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
