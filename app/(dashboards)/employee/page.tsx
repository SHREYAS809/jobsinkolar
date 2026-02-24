"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { JobCard } from "@/components/dashboards/job-card";
import {
  employeeJobs,
  recommendedJobs,
  nearbyJobs,
  urgentHiringJobs,
} from "@/lib/mock-data";

export default function EmployeeDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const filters = [
    { id: "fresher", label: "🎓 Fresher" },
    { id: "part-time", label: "⏰ Part-time" },
    { id: "wfh", label: "🏠 Work from Home" },
    { id: "women-friendly", label: "👩‍💼 Women Friendly" },
  ];

  const toggleFilter = (filterId: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filterId)
        ? prev.filter((id) => id !== filterId)
        : [...prev, filterId]
    );
  };

  const filteredJobs = employeeJobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase());

    if (selectedFilters.length === 0) return matchesSearch;

    return (
      matchesSearch &&
      selectedFilters.some((filter) => {
        const tagMap: Record<string, string[]> = {
          fresher: ["Fresher"],
          "part-time": ["Part-time"],
          wfh: ["Remote", "Work from Home"],
          "women-friendly": ["Women Friendly"],
        };
        return tagMap[filter]?.some((tag) => job.tags.includes(tag));
      })
    );
  });

  return (
    <div className="space-y-10 relative z-10">
      {/* Search Bar */}
      <div className="relative group max-w-2xl mx-auto">
        <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-blue-400 transition-colors">
          <Search size={22} />
        </div>
        <input
          type="text"
          placeholder="Explore career opportunities..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-14 pr-6 py-4 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 text-white placeholder-slate-500 shadow-2xl transition-all font-medium"
        />
      </div>

      {/* Quick Filters */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => toggleFilter(filter.id)}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 border ${selectedFilters.includes(filter.id)
                ? "bg-blue-600/20 text-blue-400 border-blue-500/40 shadow-[0_0_20px_rgba(37,99,235,0.2)]"
                : "bg-white/5 text-slate-400 border-white/10 hover:bg-white/10 hover:text-white"
              }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Urgent Hiring Section */}
      {urgentHiringJobs.length > 0 && (
        <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="h-8 w-1 bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.8)] rounded-full"></div>
              <h2 className="text-xl font-black text-white tracking-tight uppercase tracking-widest text-sm">
                Urgent Hiring
              </h2>
            </div>
            <span className="bg-rose-500/10 text-rose-400 border border-rose-500/20 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-lg">
              {urgentHiringJobs.length} Priority
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {urgentHiringJobs.map((job) => (
              <JobCard key={job.id} {...job} />
            ))}
          </div>
        </section>
      )}

      {/* Recommended Jobs Section */}
      <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-8 w-1 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] rounded-full"></div>
          <h2 className="text-xl font-black text-white tracking-tight uppercase tracking-widest text-sm">
            Recommended For You
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendedJobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
      </section>

      {/* Nearby Jobs Section */}
      <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-8 w-1 bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)] rounded-full"></div>
          <h2 className="text-xl font-black text-white tracking-tight uppercase tracking-widest text-sm">
            Jobs Near You
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nearbyJobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
      </section>

      {/* All Jobs Section */}
      <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-8 w-1 bg-slate-500 shadow-[0_0_10px_rgba(148,163,184,0.4)] rounded-full"></div>
          <h2 className="text-xl font-black text-white tracking-tight uppercase tracking-widest text-sm">All Opportunities</h2>
        </div>
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} {...job} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 glass-card rounded-3xl border border-dashed border-white/10">
            <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">
              No matching records found in system
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
