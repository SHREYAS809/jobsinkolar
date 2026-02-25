"use client";

import { Bell, Settings, User, X, Check, Circle } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface HeaderBarProps {
  title: string;
  userType: "admin" | "employee" | "employer";
}

const NOTIFICATIONS = [
  { id: 1, title: "New Application", desc: "Rahul Sharma applied for UI Designer", time: "2m ago", unread: true },
  { id: 2, title: "System Update", desc: "Nexus Protocol v2.1 is now live", time: "1h ago", unread: true },
  { id: 3, title: "Meeting Reminder", desc: "Stakeholder sync at 4:00 PM", time: "3h ago", unread: false },
];

export function HeaderBar({ title, userType }: HeaderBarProps) {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="bg-white border-b-2 border-slate-300 h-20 flex items-center justify-between px-10 sticky top-0 z-40 shadow-xl">
      <h1 className="text-2xl font-black text-black tracking-tighter">{title}</h1>

      <div className="flex items-center gap-6">
        {/* Language Toggle */}
        <div className="flex gap-2 bg-slate-200 p-2 rounded-xl border border-slate-300 shadow-inner">
          <button className="px-4 py-1.5 text-[11px] font-black text-white bg-blue-700 rounded-lg shadow-md transition-all active:scale-95">
            EN
          </button>
          <button className="px-4 py-1.5 text-[11px] font-black text-black hover:text-blue-700 transition-colors">
            KN
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-2 relative">
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className={`p-3 rounded-xl transition-all shadow-lg ${showNotifications ? 'bg-blue-100 text-blue-700 border-2 border-blue-400' : 'text-black hover:bg-slate-100 hover:text-blue-700 border-2 border-transparent'}`}
            >
              <Bell size={20} />
              <span className="absolute top-2 right-2 h-3 w-3 rounded-full bg-blue-700 border-2 border-white shadow-md"></span>
            </button>

            {showNotifications && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setShowNotifications(false)}
                />
                <div className="absolute right-0 mt-6 w-[400px] bg-white rounded-3xl p-3 border-2 border-slate-300 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] z-50 animate-in fade-in slide-in-from-top-4 duration-300">
                  <div className="p-5 flex items-center justify-between border-b-2 border-slate-100 mb-2">
                    <h3 className="text-sm font-black text-black uppercase tracking-widest">Notifications</h3>
                    <button onClick={() => setShowNotifications(false)} className="text-slate-500 hover:text-black transition-colors"><X size={18} /></button>
                  </div>
                  <div className="max-h-[500px] overflow-y-auto custom-scrollbar space-y-2">
                    {NOTIFICATIONS.map((n) => (
                      <div key={n.id} className="p-5 hover:bg-slate-100 transition-all cursor-pointer group rounded-2xl relative border-2 border-transparent hover:border-slate-200 shadow-sm hover:shadow-md">
                        <div className="flex gap-5 items-start">
                          <div className={`h-12 w-12 rounded-xl flex items-center justify-center border-2 transition-all ${n.unread ? 'bg-blue-100 text-blue-700 border-blue-300' : 'bg-slate-200 text-black border-slate-300'}`}>
                            {n.unread ? <Circle size={14} fill="currentColor" /> : <Check size={18} strokeWidth={3} />}
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-1">
                              <p className="text-sm font-black text-black group-hover:text-blue-700 transition-colors uppercase tracking-tight">{n.title}</p>
                              <p className="text-[10px] text-blue-700 font-black uppercase tracking-widest bg-blue-50 px-2 py-0.5 rounded border border-blue-100">{n.time}</p>
                            </div>
                            <p className="text-xs text-black font-black leading-snug group-hover:text-black transition-colors">{n.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 border-t-2 border-slate-100 text-center bg-slate-50 rounded-b-3xl mt-2">
                    <button className="text-[11px] font-black text-blue-700 uppercase tracking-widest hover:underline hover:text-blue-800 transition-all">Mark all transmissions as verified</button>
                  </div>
                </div>
              </>
            )}
          </div>

          <Link href={userType === "admin" ? "/admin/settings" : `/${userType}/settings`}>
            <button className="p-3 bg-slate-100 hover:bg-slate-200 rounded-xl border-2 border-slate-300 transition-all text-black hover:text-blue-700 shadow-md group" title="Settings">
              <Settings size={20} className="group-hover:rotate-45 transition-transform duration-500" />
            </button>
          </Link>
          <div className="h-6 w-0.5 bg-slate-400 mx-2"></div>
          <Link href={userType === "admin" ? "#" : `/${userType}/profile`} className="flex items-center gap-4 p-2 pr-4 bg-slate-100 hover:bg-slate-200 rounded-2xl border-2 border-slate-300 transition-all text-black shadow-lg hover:shadow-2xl group active:scale-95">
            <div className="h-10 w-10 rounded-xl bg-blue-700 flex items-center justify-center text-white border-2 border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:scale-110 transition-transform">
              <User size={20} />
            </div>
            <span className="text-sm font-black tracking-tighter uppercase">Operator Profile</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
