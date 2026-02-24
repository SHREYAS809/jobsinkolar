"use client";

import { Plus, Eye, Users, Briefcase } from "lucide-react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { StatsCard } from "@/components/dashboards/stats-card";
import { ApplicantsPanel } from "@/components/dashboards/applicants-panel";
import { employerJobs, employerApplicants } from "@/lib/mock-data";

export default function EmployerDashboard() {
  const router = useRouter();

  useEffect(() => {
    const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;
    const role = typeof window !== 'undefined' ? localStorage.getItem("role") : null;

    if (!token || role !== "employer") {
      router.push("/employer");
    }
  }, [router]);

  const totalApplications = employerApplicants.length;
  const totalViews = employerJobs.reduce((sum, job) => sum + job.views, 0);

  const stats = [
    {
      title: "Active Jobs",
      value: employerJobs.filter((j) => j.status === "Active").length,
      icon: <Briefcase size={32} />,
    },
    {
      title: "Total Applicants",
      value: totalApplications,
      icon: <Users size={32} />,
    },
    {
      title: "Total Views",
      value: totalViews,
      icon: <Eye size={32} />,
    },
  ];

  return (
    <div className="space-y-10 relative z-10">
      {/* Header with Post Job Button */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-8 rounded-[2rem] border border-slate-200 shadow-xl relative overflow-hidden group">
        <div className="absolute -left-10 -top-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-all duration-700"></div>

        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight leading-tight">
            Employer Command Center
          </h2>
          <p className="text-slate-500 font-bold text-[10px] uppercase tracking-widest mt-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            System Status: Active
          </p>
        </div>

        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold h-12 px-8 rounded-xl transition-all shadow-lg shadow-blue-600/10 flex items-center gap-2 relative z-10 group/btn">
          <Plus size={18} />
          <span>Post New Vacancy</span>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, idx) => (
          <StatsCard key={idx} {...stat} />
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-xl">
            <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest">
                Active Job Postings
              </h3>
              <div className="h-6 w-6 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 text-[10px] font-bold">
                {employerJobs.length}
              </div>
            </div>
            <div className="divide-y divide-slate-100">
              {employerJobs.map((job) => (
                <div
                  key={job.id}
                  className="p-8 hover:bg-slate-50 transition-all group border-b border-slate-100 last:border-0"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-slate-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors">
                        {job.title}
                      </h4>
                      <div className="inline-flex items-center px-2 py-0.5 rounded bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-bold uppercase tracking-wider">
                        {job.salary}
                      </div>
                    </div>
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest border ${job.status === "Active"
                        ? "bg-emerald-50 text-emerald-600 border-emerald-200"
                        : "bg-slate-50 text-slate-400 border-slate-200"
                        }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full mr-2 ${job.status === "Active" ? "bg-emerald-500" : "bg-slate-300"}`} />
                      {job.status}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6 transition-colors">
                    <div className="flex items-center gap-2">
                      <Users size={14} className="text-blue-600" />
                      <span className="text-slate-900">{job.applicants}</span> Applicants
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye size={14} className="text-blue-600" />
                      <span className="text-slate-900">{job.views}</span> Views
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-slate-200"></span>
                      Posted {job.posted}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-1 py-2 px-4 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-all font-bold uppercase tracking-widest text-[10px] text-slate-500">
                      Edit Listing
                    </button>
                    <button className="flex-1 py-2 px-4 bg-blue-50 border border-blue-100 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-all font-bold uppercase tracking-widest text-[10px] text-blue-600">
                      View Details
                    </button>
                    <button className="py-2 px-4 bg-rose-50 border border-rose-100 rounded-lg hover:bg-rose-100 hover:text-rose-600 transition-all font-bold uppercase tracking-widest text-[10px] text-rose-500">
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Applicants Panel */}
        <div className="lg:col-span-1">
          <ApplicantsPanel applicants={employerApplicants} />
        </div>
      </div>
    </div>
  );
}
