"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, Users, Briefcase, FileText, BarChart3, LogOut, Settings, Shield } from "lucide-react";

const ADMIN_NAV_ITEMS = [
  { label: "Dashboard", href: "/admin/dashboard", icon: "LayoutDashboard" },
  { label: "Users", href: "/admin/users", icon: "Users" },
  { label: "Employers", href: "/admin/employers", icon: "Briefcase" },
  { label: "Verification Queue", href: "/admin/verification", icon: "Shield" },
  { label: "Jobs", href: "/admin/jobs", icon: "FileText" },
  { label: "Applications", href: "/admin/applications", icon: "FileText" },
  { label: "Reports", href: "/admin/reports", icon: "BarChart3" },
  { label: "Settings", href: "/admin/settings", icon: "Settings" },
];

const iconMap = {
  LayoutDashboard,
  Users,
  Briefcase,
  FileText,
  BarChart3,
  LogOut,
  Settings,
  Shield,
};

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r-2 border-slate-200 flex flex-col relative z-20">
      {/* Logo */}
      <div className="p-6 border-b border-slate-100">
        <div className="flex items-center gap-2 mb-1">
          <div className="h-7 w-7 rounded bg-blue-600 flex items-center justify-center text-white border-2 border-blue-400">
            <Briefcase size={14} />
          </div>
          <span className="text-xl font-black tracking-tighter text-slate-950">
            JobsIn<span className="text-blue-700">Kolar</span>
          </span>
        </div>
        <p className="text-[10px] text-white font-black uppercase tracking-widest mt-2 bg-slate-950 px-2 py-1 rounded inline-block">
          Admin Control Center
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1.5 mt-4">
        {ADMIN_NAV_ITEMS.map((item) => {
          const IconComponent = iconMap[item.icon as keyof typeof iconMap];
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 font-black text-sm group relative ${isActive
                ? "bg-blue-100 text-blue-800 shadow-md border-2 border-blue-200"
                : "text-slate-950 hover:text-black hover:bg-slate-50 border-2 border-transparent"
                }`}
            >
              <IconComponent size={18} className={`${isActive ? "text-blue-800" : "text-slate-950 group-hover:text-blue-900 transition-colors"}`} />
              <span className="relative z-10">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t-2 border-slate-200">
        <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-slate-950 hover:text-rose-700 hover:bg-rose-50 transition-all font-black text-sm group border-2 border-transparent hover:border-rose-200">
          <LogOut size={18} className="group-hover:translate-x-1 transition-transform" />
          Logout Session
        </button>
      </div>
    </aside>
  );
}
