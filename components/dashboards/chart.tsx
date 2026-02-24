"use client";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface ChartProps {
  data: Array<{
    [key: string]: string | number;
  }>;
  type?: "line" | "bar";
  xDataKey: string;
  lines?: Array<{
    dataKey: string;
    stroke: string;
    name: string;
  }>;
  bars?: Array<{
    dataKey: string;
    fill: string;
    name: string;
  }>;
  title: string;
}

export function Chart({
  data,
  type = "line",
  xDataKey,
  lines,
  bars,
  title,
}: ChartProps) {
  return (
    <div className="bg-slate-900/40 backdrop-blur-xl rounded-2xl border border-white/5 p-6 shadow-2xl overflow-hidden group">
      {/* Ambient accent glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>

      <h3 className="text-sm font-black text-white uppercase tracking-widest mb-6 relative z-10 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
        {title}
      </h3>
      <div className="relative z-10">
        <ResponsiveContainer width="100%" height={300}>
          {type === "line" ? (
            <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis
                dataKey={xDataKey}
                stroke="#64748b"
                fontSize={10}
                fontWeight="700"
                tick={{ fill: '#94a3b8' }}
                axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
              />
              <YAxis
                stroke="#64748b"
                fontSize={10}
                fontWeight="700"
                tick={{ fill: '#94a3b8' }}
                axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(15, 23, 42, 0.9)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.5)",
                }}
                itemStyle={{ fontSize: '12px', fontWeight: '700' }}
                labelStyle={{ color: "#f1f5f9", fontWeight: '900', marginBottom: '4px', fontSize: '12px' }}
              />
              {lines && <Legend wrapperStyle={{ paddingTop: '20px', fontSize: '10px', fontWeight: '700', textTransform: 'uppercase' }} />}
              {lines?.map((line) => (
                <Line
                  key={line.dataKey}
                  type="monotone"
                  dataKey={line.dataKey}
                  stroke={line.stroke}
                  name={line.name}
                  strokeWidth={3}
                  dot={{ fill: line.stroke, strokeWidth: 2, r: 4, stroke: '#0f172a' }}
                  activeDot={{ r: 6, strokeWidth: 2, stroke: '#fff' }}
                />
              ))}
            </LineChart>
          ) : (
            <BarChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis
                dataKey={xDataKey}
                stroke="#64748b"
                fontSize={10}
                fontWeight="700"
                tick={{ fill: '#94a3b8' }}
                axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
              />
              <YAxis
                stroke="#64748b"
                fontSize={10}
                fontWeight="700"
                tick={{ fill: '#94a3b8' }}
                axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(15, 23, 42, 0.9)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                }}
                itemStyle={{ fontSize: '12px', fontWeight: '700' }}
                labelStyle={{ color: "#f1f5f9", fontWeight: '900', marginBottom: '4px', fontSize: '12px' }}
              />
              {bars && <Legend wrapperStyle={{ paddingTop: '20px', fontSize: '10px', fontWeight: '700', textTransform: 'uppercase' }} />}
              {bars?.map((bar) => (
                <Bar
                  key={bar.dataKey}
                  dataKey={bar.dataKey}
                  fill={bar.fill}
                  name={bar.name}
                  radius={[4, 4, 0, 0]}
                  barSize={32}
                />
              ))}
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
}
