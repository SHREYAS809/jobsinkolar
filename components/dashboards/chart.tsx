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
    <div className="bg-slate-950 rounded-2xl border-2 border-white/10 p-8 shadow-2xl relative overflow-hidden group transition-all">
      {/* Ambient accent glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>

      <h3 className="text-sm font-black text-white uppercase tracking-[0.2em] mb-8 relative z-10 flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,1)]"></span>
        {title}
      </h3>
      <div className="relative z-10">
        <ResponsiveContainer width="100%" height={300}>
          {type === "line" ? (
            <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis
                dataKey={xDataKey}
                stroke="#fff"
                fontSize={11}
                fontWeight="900"
                tick={{ fill: '#fff' }}
                axisLine={{ stroke: 'rgba(255,255,255,0.4)', strokeWidth: 2 }}
                tickLine={{ stroke: 'rgba(255,255,255,0.4)', strokeWidth: 2 }}
              />
              <YAxis
                stroke="#fff"
                fontSize={11}
                fontWeight="900"
                tick={{ fill: '#fff' }}
                axisLine={{ stroke: 'rgba(255,255,255,0.4)', strokeWidth: 2 }}
                tickLine={{ stroke: 'rgba(255,255,255,0.4)', strokeWidth: 2 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#000",
                  border: "2px solid rgba(255, 255, 255, 0.4)",
                  borderRadius: "16px",
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.7)",
                }}
                itemStyle={{ fontSize: '13px', fontWeight: '900', color: '#fff' }}
                labelStyle={{ color: "#fff", fontWeight: '900', marginBottom: '6px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em' }}
              />
              {lines && <Legend wrapperStyle={{ paddingTop: '30px', fontSize: '11px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#fff' }} />}
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
                stroke="#fff"
                fontSize={11}
                fontWeight="900"
                tick={{ fill: '#fff' }}
                axisLine={{ stroke: 'rgba(255,255,255,0.4)', strokeWidth: 2 }}
                tickLine={{ stroke: 'rgba(255,255,255,0.4)', strokeWidth: 2 }}
              />
              <YAxis
                stroke="#fff"
                fontSize={11}
                fontWeight="900"
                tick={{ fill: '#fff' }}
                axisLine={{ stroke: 'rgba(255,255,255,0.4)', strokeWidth: 2 }}
                tickLine={{ stroke: 'rgba(255,255,255,0.4)', strokeWidth: 2 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#000",
                  border: "2px solid rgba(255, 255, 255, 0.4)",
                  borderRadius: "16px",
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.7)",
                }}
                itemStyle={{ fontSize: '13px', fontWeight: '900', color: '#fff' }}
                labelStyle={{ color: "#fff", fontWeight: '900', marginBottom: '6px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em' }}
              />
              {bars && <Legend wrapperStyle={{ paddingTop: '30px', fontSize: '11px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#fff' }} />}
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
