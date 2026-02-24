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
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xl">
      <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
        <h3 className="text-sm font-black text-slate-950 uppercase tracking-widest">{title}</h3>
        <div className="flex gap-2">
          <div className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></div>
          <div className="h-2 w-2 rounded-full bg-indigo-600 animate-pulse animation-delay-2000"></div>
        </div>
      </div>
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="px-6 py-4 text-left font-black text-slate-700 uppercase tracking-wider text-[10px]"
                >
                  {col.label}
                </th>
              ))}
              <th className="px-6 py-4 text-left font-black text-slate-700 uppercase tracking-wider text-[10px]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.map((row, idx) => (
              <tr
                key={idx}
                className="hover:bg-slate-50 transition-colors group"
              >
                {columns.map((col) => (
                  <td
                    key={`${idx}-${col.key}`}
                    className="px-6 py-4 text-slate-800 font-medium"
                  >
                    {col.key === "status" ? (
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold border border-blue-100 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        {row[col.key]}
                      </span>
                    ) : (
                      row[col.key]
                    )}
                  </td>
                ))}
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button
                      className="p-1.5 hover:bg-emerald-50 rounded-lg transition-all text-emerald-600 border border-slate-100 hover:border-emerald-200 shadow-sm"
                      title="Approve"
                    >
                      <CheckCircle2 size={16} />
                    </button>
                    <button
                      className="p-1.5 hover:bg-rose-50 rounded-lg transition-all text-rose-600 border border-slate-100 hover:border-rose-200 shadow-sm"
                      title="Reject"
                    >
                      <XCircle size={16} />
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
