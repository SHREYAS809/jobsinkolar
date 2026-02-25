"use client";

import { Briefcase, Search, Filter, Plus, Eye, Users, Edit3, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const MY_JOBS = [
  { id: 1, title: "Operations Manager", status: "Active", applicants: 24, posted: "Oct 20, 2023" },
  { id: 2, title: "Delivery Lead", status: "Closed", applicants: 85, posted: "Oct 15, 2023" },
  { id: 3, title: "Warehouse Specialist", status: "Active", applicants: 12, posted: "Oct 22, 2023" },
];

export default function MyJobsPage() {
  return (
    <div className="space-y-10 relative z-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden group">
        <div className="absolute -left-10 -top-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-all duration-700"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-black text-white tracking-tight leading-tight">
            Vacancy Inventory
          </h2>
          <p className="text-white font-black text-xs uppercase tracking-widest mt-2 flex items-center gap-2">
            <Briefcase size={14} className="text-blue-400" />
            Managing active employment protocols
          </p>
        </div>

        <Link href="/employer/post-job">
          <Button className="bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-widest text-[10px] h-14 px-8 rounded-2xl transition-all shadow-xl shadow-blue-500/20 flex items-center gap-3">
            <Plus size={18} /> Deploy New Vacancy
          </Button>
        </Link>
      </div>

      <div className="glass-panel p-2 rounded-[2.5rem] overflow-hidden">
        <div className="p-8 border-b-2 border-white/20 flex flex-col md:flex-row gap-6 justify-between items-center bg-white/5">
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white group-focus-within:text-blue-400 transition-colors" size={18} />
            <input type="text" placeholder="Search Inventory..." className="w-full bg-slate-900 border-2 border-white/20 rounded-2xl h-12 pl-12 pr-4 text-white font-black text-xs focus:outline-none focus:border-blue-500 transition-all shadow-inner placeholder-slate-400" />
          </div>
          <Button variant="ghost" className="w-full md:w-auto text-white hover:text-white hover:bg-white/20 font-black uppercase tracking-widest text-[10px] h-12 px-6 rounded-xl border-2 border-white/20 flex items-center gap-2 transition-all">
            <Filter size={14} /> Refine Inventory
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-900 border-b-2 border-white/10">
                <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-widest text-white">Vacancy Protocol</th>
                <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-widest text-white">Phase</th>
                <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-widest text-white">Talent Pool</th>
                <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-widest text-white">Sync Date</th>
                <th className="px-8 py-5 text-right text-[10px] font-black uppercase tracking-widest text-white">Control</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {MY_JOBS.map((job) => (
                <tr key={job.id} className="hover:bg-white/5 transition-colors group">
                  <td className="px-8 py-6">
                    <p className="font-black text-white text-sm group-hover:text-blue-400 transition-colors">{job.title}</p>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`inline-flex items-center px-4 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest border-2 shadow-lg ${job.status === "Active" ? "bg-emerald-600 text-white border-emerald-400" : "bg-slate-800 text-slate-400 border-slate-700"
                      }`}>
                      {job.status}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2 text-white font-black text-xs bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                      <Users size={14} className="text-indigo-400" /> {job.applicants} Candidates
                    </div>
                  </td>
                  <td className="px-8 py-6 text-white font-black text-xs">{job.posted}</td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex gap-3 justify-end">
                      <button className="h-10 w-10 rounded-xl bg-blue-600 text-white hover:bg-blue-500 border-2 border-blue-400 shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center">
                        <Eye size={18} />
                      </button>
                      <button className="h-10 w-10 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 border-2 border-emerald-400 shadow-lg shadow-emerald-500/30 transition-all flex items-center justify-center">
                        <Edit3 size={18} />
                      </button>
                      <button className="h-10 w-10 rounded-xl bg-rose-600 text-white hover:bg-rose-500 border-2 border-rose-400 shadow-lg shadow-rose-500/30 transition-all flex items-center justify-center">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
