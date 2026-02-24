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
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 h-16 flex items-center justify-between px-8 sticky top-0 z-40">
      <h1 className="text-xl font-bold text-slate-900 tracking-tight">{title}</h1>

      <div className="flex items-center gap-6">
        {/* Language Toggle */}
        <div className="flex gap-1 bg-slate-100 p-1 rounded-lg">
          <button className="px-3 py-1 text-[10px] font-bold text-white bg-blue-600 rounded-md shadow-sm">
            EN
          </button>
          <button className="px-3 py-1 text-[10px] font-bold text-slate-400 hover:text-slate-600 transition-colors">
            KN
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-2 relative">
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className={`p-2 rounded-lg transition-all ${showNotifications ? 'bg-blue-50 text-blue-600' : 'text-slate-400 hover:bg-slate-50 hover:text-blue-600'}`}
            >
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-blue-600 border-2 border-white"></span>
            </button>

            {showNotifications && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setShowNotifications(false)}
                />
                <div className="absolute right-0 mt-4 w-80 bg-white rounded-2xl p-2 border border-slate-200 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="p-4 flex items-center justify-between border-b border-slate-100">
                    <h3 className="text-xs font-bold text-slate-900">Notifications</h3>
                    <button onClick={() => setShowNotifications(false)} className="text-slate-400 hover:text-slate-600"><X size={14} /></button>
                  </div>
                  <div className="max-h-80 overflow-y-auto custom-scrollbar">
                    {NOTIFICATIONS.map((n) => (
                      <div key={n.id} className="p-4 hover:bg-slate-50 transition-colors cursor-pointer group rounded-xl relative">
                        <div className="flex gap-4">
                          <div className={`h-8 w-8 rounded-lg flex items-center justify-center ${n.unread ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-400'}`}>
                            {n.unread ? <Circle size={10} fill="currentColor" /> : <Check size={12} />}
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-900 mb-0.5 group-hover:text-blue-600 transition-colors">{n.title}</p>
                            <p className="text-[11px] text-slate-500 font-medium mb-1 leading-tight">{n.desc}</p>
                            <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">{n.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 border-t border-slate-100 text-center">
                    <button className="text-[10px] font-bold text-blue-600 uppercase tracking-widest hover:underline">Mark all as read</button>
                  </div>
                </div>
              </>
            )}
          </div>

          <button className="p-2 hover:bg-slate-50 rounded-lg transition-all text-slate-400 hover:text-blue-600">
            <Settings size={18} />
          </button>
          <div className="h-4 w-px bg-slate-200 mx-1"></div>
          <Link href={userType === "admin" ? "#" : `/${userType}/profile`} className="flex items-center gap-2 p-1 pr-3 hover:bg-slate-50 rounded-lg transition-all text-slate-500 hover:text-slate-900 group">
            <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-sm group-hover:shadow-md transition-all">
              <User size={16} />
            </div>
            <span className="text-xs font-bold tracking-tight">Profile</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
