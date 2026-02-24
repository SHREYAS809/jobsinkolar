"use client";

import { FileText, Clock, CheckCircle2, XCircle, Search, Filter, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const APPLICATIONS = [
  { id: 1, role: "Senior Regional Manager", company: "Kolar Smart City", date: "Oct 24, 2023", status: "Under Review" },
  { id: 2, role: "Horticulture Specialist", company: "Green District", date: "Oct 20, 2023", status: "Interview" },
  { id: 3, role: "Logistics Coordinator", company: "Amazon Kolar", date: "Oct 15, 2023", status: "Rejected" },
];

export default function ApplicationsPage() {
  return (
    <div className="space-y-10 relative z-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden group">
        <div className="absolute -left-10 -top-10 w-40 h-40 bg-indigo-600/10 rounded-full blur-3xl group-hover:bg-indigo-600/20 transition-all duration-700"></div>
        <div className="relative z-10">
          <h2 className="text-2xl font-black text-white tracking-tight leading-tight">
            Application Registry
          </h2>
          <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mt-2 flex items-center gap-2">
            <FileText size={14} className="text-indigo-400" />
            Tracking active career transmissions
          </p>
        </div>
      </div>

      <div className="glass-panel p-2 rounded-[2.5rem] overflow-hidden">
        <div className="p-8 border-b border-white/5 flex flex-col md:flex-row gap-6 justify-between items-center">
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors" size={18} />
            <input type="text" placeholder="Trace Transmission..." className="w-full bg-slate-950/50 border border-white/5 rounded-2xl h-12 pl-12 pr-4 text-white font-bold text-xs focus:outline-none focus:border-blue-500/30 transition-all" />
          </div>
          <Button variant="ghost" className="w-full md:w-auto text-slate-400 hover:text-white hover:bg-white/5 font-black uppercase tracking-widest text-[10px] h-12 px-6 rounded-xl border border-white/5 flex items-center gap-2">
            <Filter size={14} /> Refine Trace
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-white/5 border-b border-white/5">
                <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-widest text-slate-500">Target Role</th>
                <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-widest text-slate-500">Entity</th>
                <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-widest text-slate-500">Transmission Date</th>
                <th className="px-8 py-5 text-left text-[10px] font-black uppercase tracking-widest text-slate-500">Current Phase</th>
                <th className="px-8 py-5 text-right text-[10px] font-black uppercase tracking-widest text-slate-500">Management</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {APPLICATIONS.map((app) => (
                <tr key={app.id} className="hover:bg-white/5 transition-colors group">
                  <td className="px-8 py-6">
                    <p className="font-black text-white text-sm group-hover:text-blue-400 transition-colors">{app.role}</p>
                  </td>
                  <td className="px-8 py-6 text-slate-300 font-bold text-xs">{app.company}</td>
                  <td className="px-8 py-6 text-slate-400 font-bold text-xs">{app.date}</td>
                  <td className="px-8 py-6">
                    <span className={`inline-flex items-center px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border ${app.status === "Interview" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" :
                        app.status === "Rejected" ? "bg-rose-500/10 text-rose-400 border-rose-500/20" :
                          "bg-amber-500/10 text-amber-400 border-amber-500/20"
                      }`}>
                      {app.status === "Interview" && <CheckCircle2 size={12} className="mr-1.5" />}
                      {app.status === "Rejected" && <XCircle size={12} className="mr-1.5" />}
                      {app.status === "Under Review" && <Clock size={12} className="mr-1.5" />}
                      {app.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="h-10 px-4 rounded-xl bg-white/5 text-slate-400 hover:text-blue-400 border border-white/10 transition-all text-[10px] font-black uppercase tracking-widest flex items-center gap-2 ml-auto">
                      Details <ExternalLink size={14} />
                    </button>
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
