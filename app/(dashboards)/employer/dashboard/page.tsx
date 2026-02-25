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
          <h2 className="text-3xl font-black text-slate-950 tracking-tight leading-tight">
            Employer Command Center
          </h2>
          <p className="text-slate-950 font-black text-xs uppercase tracking-widest mt-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600 shadow-[0_0_10px_rgba(5,150,105,0.5)]"></span>
            System Status: <span className="text-emerald-700">Active</span>
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
            <div className="p-6 border-b-2 border-slate-200 bg-slate-100 flex items-center justify-between">
              <h3 className="text-xs font-black text-slate-950 uppercase tracking-widest">
                Active Job Postings
              </h3>
              <div className="h-8 w-8 rounded-lg bg-blue-600 border-2 border-blue-400 flex items-center justify-center text-white text-xs font-black shadow-lg">
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
                      <h4 className="text-lg font-black text-slate-950 mb-2 tracking-tight group-hover:text-blue-600 transition-colors">
                        {job.title}
                      </h4>
                      <div className="inline-flex items-center px-3 py-1 rounded bg-blue-600 border-2 border-blue-400 text-white text-[10px] font-black uppercase tracking-wider shadow-md">
                        {job.salary}
                      </div>
                    </div>
                    <span
                      className={`inline-flex items-center px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border-2 shadow-sm ${job.status === "Active"
                        ? "bg-emerald-600 text-white border-emerald-400"
                        : "bg-slate-200 text-slate-900 border-slate-400"
                        }`}
                    >
                      <span className={`w-2 h-2 rounded-full mr-2 ${job.status === "Active" ? "bg-white animate-pulse" : "bg-slate-500"}`} />
                      {job.status}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-6 text-[10px] font-black uppercase tracking-widest text-slate-950 mb-6 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-blue-600" />
                      <span className="text-slate-950 underline decoration-blue-500 decoration-2">{job.applicants}</span> Applicants
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye size={16} className="text-blue-600" />
                      <span className="text-slate-950 underline decoration-blue-500 decoration-2">{job.views}</span> Views
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                      Posted <span className="text-blue-700">{job.posted}</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button className="flex-1 py-3 px-4 bg-white border-2 border-slate-950 rounded-xl hover:bg-slate-950 hover:text-white transition-all font-black uppercase tracking-widest text-[10px] text-slate-950 shadow-md">
                      Edit Listing
                    </button>
                    <button className="flex-1 py-3 px-4 bg-blue-600 border-2 border-blue-800 rounded-xl hover:bg-blue-700 text-white transition-all font-black uppercase tracking-widest text-[10px] shadow-lg shadow-blue-500/20">
                      View Details
                    </button>
                    <button className="py-3 px-6 bg-rose-600 border-2 border-rose-800 rounded-xl hover:bg-rose-700 text-white transition-all font-black uppercase tracking-widest text-[10px] shadow-lg shadow-rose-500/20">
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
