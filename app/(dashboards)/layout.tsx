"use client";

import { usePathname } from "next/navigation";
import { SidebarNav } from "@/components/shared/sidebar-nav";
import { AdminSidebar } from "@/components/shared/admin-sidebar";
import { HeaderBar } from "@/components/shared/header-bar";

const DASHBOARD_TITLES = {
  "/employee": "Job Seeker Dashboard",
  "/employee/applications": "My Applications",
  "/employee/saved": "Saved Jobs",
  "/employee/profile": "My Profile",
  "/employer/dashboard": "Employer Dashboard",
  "/employer/post-job": "Post a New Job",
  "/employer/jobs": "My Jobs",
  "/employer/applicants": "Applicants",
  "/employer/analytics": "Analytics",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Extract user type from pathname
  const userType = (pathname.split("/")[1] as "employee" | "employer") || "employee";

  // Get title
  const title =
    DASHBOARD_TITLES[pathname as keyof typeof DASHBOARD_TITLES] ||
    "Dashboard";

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 overflow-hidden relative">
      {/* Professional Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[100px]" />
        <div className="absolute top-[20%] right-[-5%] w-[35%] h-[35%] bg-indigo-500/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] opacity-40"></div>
      </div>

      <div className="relative z-10 flex w-full h-full">
        <SidebarNav userType={userType} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <HeaderBar title={title} userType={userType as any} />
          <main className="flex-1 overflow-auto p-4 md:p-8 custom-scrollbar">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
