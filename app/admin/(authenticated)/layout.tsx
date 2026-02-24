"use client";

import { usePathname } from "next/navigation";
import { AdminSidebar } from "@/components/shared/admin-sidebar";
import { HeaderBar } from "@/components/shared/header-bar";

const ADMIN_TITLES = {
    "/admin/dashboard": "Admin Command Center",
    "/admin/users": "User Governance",
    "/admin/employers": "Employer Oversight",
    "/admin/verification": "Verification Protocol",
    "/admin/jobs": "Job Matrix Management",
    "/admin/applications": "Transmission Logs",
    "/admin/reports": "District Analytics",
    "/admin/settings": "System Recalibration",
};

export default function AdminAuthenticatedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const title = ADMIN_TITLES[pathname as keyof typeof ADMIN_TITLES] || "Admin Portal";

    return (
        <div className="flex h-screen bg-slate-50 text-slate-900 overflow-hidden relative">
            {/* Professional Background Elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[35%] h-[35%] bg-indigo-500/5 rounded-full blur-[100px]" />
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] opacity-40"></div>
            </div>

            <div className="relative z-10 flex w-full h-full">
                <AdminSidebar />
                <div className="flex-1 flex flex-col overflow-hidden">
                    <HeaderBar title={title} userType="admin" />
                    <main className="flex-1 overflow-auto p-4 md:p-8 custom-scrollbar">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}
