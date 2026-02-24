"use client";

import { BarChart3, Briefcase, Users, FileText } from "lucide-react";
import { StatsCard } from "@/components/dashboards/stats-card";
import { Chart } from "@/components/dashboards/chart";
import { ManagementTable } from "@/components/dashboards/management-table";
import { adminStats, adminManagementData, chartData } from "@/lib/mock-data";

export default function AdminDashboard() {
    return (
        <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatsCard
                    title="Total Jobs"
                    value={adminStats.totalJobs}
                    icon={<Briefcase size={32} />}
                    trend={{ direction: "up", percentage: 12 }}
                />
                <StatsCard
                    title="Total Employers"
                    value={adminStats.totalEmployers}
                    icon={<Users size={32} />}
                    trend={{ direction: "up", percentage: 8 }}
                />
                <StatsCard
                    title="Total Job Seekers"
                    value={adminStats.totalJobSeekers}
                    icon={<Users size={32} />}
                    trend={{ direction: "up", percentage: 24 }}
                />
                <StatsCard
                    title="Applications Today"
                    value={adminStats.applicationsToday}
                    icon={<FileText size={32} />}
                    trend={{ direction: "up", percentage: 15 }}
                />
            </div>

            {/* Chart */}
            <Chart
                data={chartData}
                type="line"
                xDataKey="month"
                lines={[
                    { dataKey: "jobs", stroke: "#3b82f6", name: "Jobs Posted" },
                    { dataKey: "applications", stroke: "#10b981", name: "Applications" },
                ]}
                title="Platform Activity (Last 6 Months)"
            />

            {/* Management Tables */}
            <div className="grid grid-cols-1 gap-6">
                <ManagementTable
                    title="Pending Employer Approvals"
                    columns={[
                        { key: "name", label: "Company Name" },
                        { key: "email", label: "Email" },
                        { key: "joinedDate", label: "Applied On" },
                        { key: "status", label: "Status" },
                    ]}
                    data={adminManagementData.pendingEmployers}
                />

                <ManagementTable
                    title="Featured Jobs"
                    columns={[
                        { key: "title", label: "Job Title" },
                        { key: "company", label: "Company" },
                        { key: "expiresIn", label: "Expires In" },
                    ]}
                    data={adminManagementData.featuredJobs}
                />
            </div>
        </div>
    );
}
