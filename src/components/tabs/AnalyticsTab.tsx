"use client";

import { Download, TrendingUp, BarChart3 } from "lucide-react";

export default function AnalyticsTab() {
  const handleExportCSV = () => {
    const csvData = [
      ["Date", "API Requests", "Bandwidth (GB)"],
      ["2026-10-01", "25000", "8"],
      ["2026-10-05", "38000", "12"],
      ["2026-10-10", "52000", "18"],
      ["2026-10-15", "49000", "15"],
      ["2026-10-20", "68000", "22"],
      ["2026-10-25", "75000", "27"],
      ["2026-10-30", "88000", "34"],
    ];

    const csvContent =
      "data:text/csv;charset=utf-8," +
      csvData.map((row) => row.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "usage_analytics_report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const bandwidthBars = [
    { label: "01 Oct", height: "25%", value: "8 GB" },
    { label: "05 Oct", height: "40%", value: "12 GB" },
    { label: "10 Oct", height: "55%", value: "18 GB" },
    { label: "15 Oct", height: "48%", value: "15 GB" },
    { label: "20 Oct", height: "70%", value: "22 GB" },
    { label: "25 Oct", height: "82%", value: "27 GB" },
    { label: "30 Oct", height: "100%", value: "34 GB" },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header & Export Action */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Usage Analytics & Metrics
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Granular tracking of API requests, bandwidth consumption, and telemetry.
          </p>
        </div>
        <button
          onClick={handleExportCSV}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/30 transition-all"
        >
          <Download className="w-4 h-4" /> Export CSV Report
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Container: Line Chart (API Requests) */}
        <div className="p-6 rounded-2xl bg-[#13192E] border border-slate-800/80 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-indigo-400" /> API Request Volume (Last 30 Days)
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Total requests processed across all active production keys
              </p>
            </div>
          </div>

          <div className="relative h-64 w-full bg-[#0D121F] rounded-xl p-4 border border-slate-800/50 flex flex-col justify-between">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 500 200">
              <defs>
                <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M 0 160 Q 80 120, 160 100 T 320 80 T 500 20 L 500 200 L 0 200 Z"
                fill="url(#purpleGradient)"
              />
              <path
                d="M 0 160 Q 80 120, 160 100 T 320 80 T 500 20"
                fill="none"
                stroke="#6366f1"
                strokeWidth="3"
              />
            </svg>
            <div className="flex justify-between text-[10px] text-slate-500 pt-2 border-t border-slate-800/60">
              <span>01 Oct</span>
              <span>05 Oct</span>
              <span>10 Oct</span>
              <span>15 Oct</span>
              <span>20 Oct</span>
              <span>25 Oct</span>
              <span>30 Oct</span>
            </div>
          </div>
        </div>

        {/* Right Container: Bar Chart (Bandwidth Usage) */}
        <div className="p-6 rounded-2xl bg-[#13192E] border border-slate-800/80 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-indigo-400" /> Bandwidth Consumption (GB)
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Data transfer throughput across CDN and edge nodes
              </p>
            </div>
          </div>

          <div className="h-64 w-full bg-[#0D121F] rounded-xl p-4 border border-slate-800/50 flex flex-col justify-end">
            <div className="flex items-end justify-between h-48 px-2 gap-3">
              {bandwidthBars.map((bar, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                  <span className="text-[10px] text-indigo-300 opacity-0 group-hover:opacity-100 transition-opacity font-mono">
                    {bar.value}
                  </span>
                  <div
                    className="w-full bg-indigo-600/80 hover:bg-indigo-500 rounded-t-md transition-all duration-300"
                    style={{ height: bar.height }}
                  />
                  <span className="text-[10px] text-slate-500">{bar.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}