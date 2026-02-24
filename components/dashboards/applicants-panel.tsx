import { ChevronRight, Mail, FileText } from "lucide-react";

interface Applicant {
  id: number;
  name: string;
  appliedFor: string;
  status: string;
}

interface ApplicantsPanelProps {
  applicants: Applicant[];
}

export function ApplicantsPanel({ applicants }: ApplicantsPanelProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "New":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "Reviewed":
        return "bg-amber-50 text-amber-700 border-amber-200";
      case "Interviewed":
        return "bg-indigo-50 text-indigo-700 border-indigo-200";
      default:
        return "bg-slate-50 text-slate-700 border-slate-200";
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xl">
      <div className="p-6 border-b border-slate-100 bg-slate-50/50">
        <h3 className="text-sm font-black text-slate-950 uppercase tracking-widest">Recent Applicants</h3>
      </div>
      <div className="divide-y divide-slate-100">
        {applicants.slice(0, 5).map((applicant) => (
          <div
            key={applicant.id}
            className="p-4 hover:bg-slate-50 transition-all flex items-center justify-between group"
          >
            <div className="flex-1">
              <p className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{applicant.name}</p>
              <p className="text-xs text-slate-600 font-medium">{applicant.appliedFor}</p>
            </div>
            <div className="flex items-center gap-3">
              <span
                className={`inline-flex items-center px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider border shadow-sm ${getStatusColor(applicant.status)}`}
              >
                {applicant.status}
              </span>
              <button className="p-1.5 hover:bg-blue-50 rounded-lg transition-all border border-transparent hover:border-blue-100 text-slate-400 hover:text-blue-600">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 bg-slate-50/50 text-center border-t border-slate-100">
        <a
          href="#"
          className="text-xs font-black uppercase tracking-widest text-blue-600 hover:text-blue-700 transition-colors"
        >
          View All Applicants →
        </a>
      </div>
    </div>
  );
}
