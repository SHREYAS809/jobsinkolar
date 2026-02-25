"use client";

import { Calendar, Clock, Video, MapPin, CheckCircle2, XCircle, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

const INTERVIEWS = [
    { id: 1, position: "Senior UI Designer", company: "Kolar Tech Hub", time: "2:00 PM", date: "Oct 28, 2023", type: "Video Call", status: "Upcoming" },
    { id: 2, position: "Cloud Engineer", company: "District Data Center", time: "11:00 AM", date: "Oct 30, 2023", type: "In-Person", status: "Upcoming" },
];

export default function InterviewsPage() {
    return (
        <div className="space-y-10 relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="relative z-10">
                    <h2 className="text-3xl font-black text-white tracking-tight leading-tight">
                        Interview Protocol
                    </h2>
                    <p className="text-white font-black text-xs uppercase tracking-widest mt-2 flex items-center gap-2">
                        <Calendar size={14} className="text-emerald-400" />
                        Scheduled career synchronization events
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {INTERVIEWS.map((interview) => (
                    <div key={interview.id} className="glass-panel p-8 rounded-[3rem] border border-white/5 relative overflow-hidden group">
                        <div className="flex justify-between items-start mb-8">
                            <div className="h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center text-emerald-400 border border-white/10 shadow-inner">
                                {interview.type === "Video Call" ? <Video size={24} /> : <MapPin size={24} />}
                            </div>
                            <span className="px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[9px] font-black uppercase tracking-widest">
                                {interview.status}
                            </span>
                        </div>

                        <h3 className="text-xl font-black text-white mb-2 group-hover:text-emerald-400 transition-colors uppercase tracking-tight">{interview.position}</h3>
                        <p className="text-white font-black text-sm mb-8">{interview.company}</p>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="flex items-center gap-3 text-xs font-black text-white bg-white/10 px-3 py-2 rounded-xl border border-white/10">
                                <Calendar size={14} className="text-emerald-400" /> {interview.date}
                            </div>
                            <div className="flex items-center gap-3 text-xs font-black text-white bg-white/10 px-3 py-2 rounded-xl border border-white/10">
                                <Clock size={14} className="text-emerald-400" /> {interview.time}
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Button className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-black uppercase tracking-widest text-[10px] h-12 rounded-xl border-2 border-emerald-400 shadow-xl shadow-emerald-500/20">
                                Join Protocol
                            </Button>
                            <Button variant="ghost" className="h-12 w-12 rounded-xl bg-white/10 border-2 border-white/20 text-white hover:text-rose-500 hover:bg-white/20">
                                <XCircle size={18} />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
