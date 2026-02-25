"use client";

import { useState } from "react";
import { Bookmark, Share2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface JobCardProps {
  id: number;
  title: string;
  company: string;
  salary: string;
  location: string;
  tags: string[];
  description: string;
  posted: string;
}

export function JobCard({
  id,
  title,
  company,
  salary,
  location,
  tags,
  description,
  posted,
}: JobCardProps) {
  const [isSaved, setIsSaved] = useState(false);
  const [isApplied, setIsApplied] = useState(false);

  const handleApply = () => {
    setIsApplied(true);
    setTimeout(() => setIsApplied(false), 3000);
  };

  return (
    <div className="glass-card rounded-2xl p-6 relative overflow-hidden group">
      {/* Glow Effect */}
      <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500"></div>

      {/* Header */}
      <div className="flex items-start justify-between mb-4 relative z-10">
        <div className="flex-1">
          <h3 className="text-xl font-black text-white mb-1 tracking-tight group-hover:text-blue-400 transition-colors">{title}</h3>
          <p className="text-slate-100 font-black text-xs uppercase tracking-widest">{company}</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setIsSaved(!isSaved)}
            className={`p-2 rounded-xl transition-all border ${isSaved
              ? "bg-blue-600/30 text-blue-300 border-blue-500/50 shadow-[0_0_15px_rgba(37,99,235,0.25)]"
              : "bg-white/10 border-white/20 text-slate-100 hover:text-white hover:bg-white/20"
              }`}
          >
            <Bookmark size={18} fill={isSaved ? "currentColor" : "none"} />
          </button>
          <button className="p-2 bg-white/10 border border-white/20 rounded-xl transition-all text-slate-100 hover:text-white hover:bg-white/20">
            <Share2 size={18} />
          </button>
        </div>
      </div>

      {/* Job Info */}
      <div className="flex flex-wrap items-center gap-4 mb-4 text-xs font-black relative z-10">
        <div className="text-emerald-400 bg-emerald-400/20 px-2 py-1 rounded border border-emerald-500/30 shadow-[0_0_10px_rgba(52,211,153,0.1)]">{salary}</div>
        <div className="text-white flex items-center gap-1 bg-white/5 px-2 py-1 rounded border border-white/10">
          <MapPin size={14} className="text-rose-400" />
          {location}
        </div>
        <div className="text-slate-100 flex items-center gap-1 bg-white/5 px-2 py-1 rounded border border-white/10">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
          {posted}
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-100 text-sm mb-5 line-clamp-3 leading-relaxed font-bold relative z-10 opacity-100">{description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6 relative z-10">
        {tags.map((tag) => (
          <span
            key={tag}
            className={`inline-flex items-center px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider border ${tag === "Urgent Hiring"
              ? "bg-rose-500/10 text-rose-400 border-rose-500/20 shadow-[0_0_15px_rgba(244,63,94,0.1)]"
              : tag === "Women Friendly"
                ? "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20 shadow-[0_0_15px_rgba(217,70,239,0.1)]"
                : "bg-blue-500/10 text-blue-400 border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]"
              }`}
          >
            {tag === "Urgent Hiring" && "🚀 "}
            {tag === "Women Friendly" && "👩‍💼 "}
            {tag}
          </span>
        ))}
      </div>

      {/* Action Button */}
      <Button
        onClick={handleApply}
        disabled={isApplied}
        className={`w-full py-2.5 px-4 rounded-xl font-black uppercase tracking-widest text-xs transition-all duration-300 relative z-10 overflow-hidden group/btn ${isApplied
          ? "bg-emerald-600/90 hover:bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)]"
          : "bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]"
          }`}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {isApplied ? "✓ Applied Successfully" : "Apply For Session"}
        </span>
      </Button>
    </div>
  );
}
