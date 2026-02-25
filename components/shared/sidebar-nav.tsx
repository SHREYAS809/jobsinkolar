"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Briefcase,
  FileText,
  BarChart3,
  Home,
  Bookmark,
  User,
  Plus,
  LogOut,
  Building2,
} from "lucide-react";

interface SidebarNavProps {
  userType: "employee" | "employer";
}

const ICON_MAP: Record<string, React.ReactNode> = {
  LayoutDashboard: <LayoutDashboard size={18} />,
  Users: <Users size={18} />,
  Briefcase: <Briefcase size={18} />,
  FileText: <FileText size={18} />,
  BarChart3: <BarChart3 size={18} />,
  Home: <Home size={18} />,
  Bookmark: <Bookmark size={18} />,
  User: <User size={18} />,
  Plus: <Plus size={18} />,
  Building2: <Building2 size={18} />,
};

const NAVIGATION_ITEMS = {
  employee: [
    { label: "Dashboard", href: "/employee", icon: "Home" },
    { label: "My Applications", href: "/employee/applications", icon: "FileText" },
    { label: "Interviews", href: "/employee/interviews", icon: "LayoutDashboard" },
    { label: "Resume Builder", href: "/employee/resume", icon: "FileText" },
    { label: "Saved Jobs", href: "/employee/saved", icon: "Bookmark" },
    { label: "Profile", href: "/employee/profile", icon: "User" },
  ],
  employer: [
    { label: "Dashboard", href: "/employer/dashboard", icon: "LayoutDashboard" },
    { label: "Post Job", href: "/employer/post-job", icon: "Plus" },
    { label: "My Jobs", href: "/employer/jobs", icon: "Briefcase" },
    { label: "Applicants", href: "/employer/applicants", icon: "Users" },
    { label: "Team", href: "/employer/team", icon: "Users" },
    { label: "Company Profile", href: "/employer/profile", icon: "Building2" },
    { label: "Analytics", href: "/employer/analytics", icon: "BarChart3" },
    { label: "Billing", href: "/employer/billing", icon: "FileText" },
  ],
};

export function SidebarNav({ userType }: SidebarNavProps) {
  const pathname = usePathname();
  const items = NAVIGATION_ITEMS[userType];

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <aside className="w-64 bg-white border-r border-slate-200 h-screen flex flex-col sticky top-0 z-20">
      {/* Logo */}
      <div className="p-6 border-b border-slate-100">
        <Link href={`/${userType}`} className="flex items-center gap-2 mb-1">
          <div className="h-6 w-6 rounded bg-blue-600 flex items-center justify-center text-white">
            <Briefcase size={12} />
          </div>
          <span className="text-lg font-bold tracking-tight text-slate-900">
            JobsIn<span className="text-blue-600">Kolar</span>
          </span>
        </Link>
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1 opacity-70">
          {userType === "employee" ? "Job Seeker Portal" : "Employer Console"}
        </p>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 p-4 overflow-y-auto space-y-1.5 mt-4 custom-scrollbar">
        {items.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 font-semibold text-sm group relative ${active
                ? "bg-blue-50 text-blue-600 shadow-sm"
                : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                }`}
            >
              <span className={`${active ? "text-blue-600" : "text-slate-400 group-hover:text-blue-600 transition-colors"}`}>
                {ICON_MAP[item.icon]}
              </span>
              <span className="relative z-10">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-100">
        <Link
          href="/login"
          className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-all font-semibold text-sm group"
        >
          <LogOut size={18} className="group-hover:translate-x-1 transition-transform" />
          Logout Session
        </Link>
      </div>
    </aside>
  );
}
