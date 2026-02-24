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
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col relative z-20">
      {/* Logo */}
      <div className="p-6 border-b border-slate-100">
        <div className="flex items-center gap-2 mb-1">
          <div className="h-6 w-6 rounded bg-blue-600 flex items-center justify-center text-white">
            <Briefcase size={12} />
          </div>
          <span className="text-lg font-bold tracking-tight text-slate-900">
            JobsIn<span className="text-blue-600">Kolar</span>
          </span>
        </div>
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest opacity-70">
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
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 font-semibold text-sm group relative ${isActive
                ? "bg-blue-50 text-blue-600 shadow-sm"
                : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                }`}
            >
              <IconComponent size={18} className={`${isActive ? "text-blue-600" : "text-slate-400 group-hover:text-blue-600 transition-colors"}`} />
              <span className="relative z-10">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-slate-100">
        <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-all font-semibold text-sm group">
          <LogOut size={18} className="group-hover:translate-x-1 transition-transform" />
          Logout Session
        </button>
      </div>
    </aside>
  );
}
