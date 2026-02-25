import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";

interface ManagementTableProps {
  title: string;
  columns: Array<{
    key: string;
    label: string;
  }>;
  data: Array<Record<string, any>>;
  actions?: {
    approve?: () => void;
    reject?: () => void;
    edit?: () => void;
  };
}

export function ManagementTable({
  title,
  columns,
  data,
}: ManagementTableProps) {
  return (
    <div className="bg-white rounded-[2rem] border-2 border-slate-200 overflow-hidden shadow-2xl">
      <div className="p-8 border-b-2 border-slate-200 bg-slate-950 flex items-center justify-between">
        <h3 className="text-sm font-black text-white uppercase tracking-widest">{title}</h3>
        <div className="flex gap-2">
          <div className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></div>
          <div className="h-2 w-2 rounded-full bg-indigo-600 animate-pulse animation-delay-2000"></div>
        </div>
      </div>
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-slate-200 bg-slate-100">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="px-6 py-5 text-left font-black text-slate-950 uppercase tracking-wider text-[11px]"
                >
                  {col.label}
                </th>
              ))}
              <th className="px-6 py-5 text-left font-black text-slate-950 uppercase tracking-wider text-[11px]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y-2 divide-slate-100">
            {data.map((row, idx) => (
              <tr
                key={idx}
                className="hover:bg-blue-50/30 transition-colors group"
              >
                {columns.map((col) => (
                  <td
                    key={`${idx}-${col.key}`}
                    className="px-6 py-6 text-slate-950 font-black text-sm"
                  >
                    {col.key === "status" ? (
                      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest border-2 border-blue-400 shadow-lg shadow-blue-500/20">
                        {row[col.key]}
                      </span>
                    ) : (
                      row[col.key]
                    )}
                  </td>
                ))}
                <td className="px-6 py-6">
                  <div className="flex gap-3">
                    <button
                      className="h-10 w-10 bg-emerald-600 text-white rounded-xl transition-all border-2 border-emerald-400 shadow-lg shadow-emerald-500/20 flex items-center justify-center hover:bg-emerald-500"
                      title="Approve"
                    >
                      <CheckCircle2 size={18} />
                    </button>
                    <button
                      className="h-10 w-10 bg-rose-600 text-white rounded-xl transition-all border-2 border-rose-400 shadow-lg shadow-rose-500/20 flex items-center justify-center hover:bg-rose-500"
                      title="Reject"
                    >
                      <XCircle size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
