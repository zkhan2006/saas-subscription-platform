"use client";

import { Zap, HardDrive, Users, RefreshCw, ChevronRight } from "lucide-react";

export default function DashboardTab() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6">
      {/* Banner */}
      <div className="p-6 rounded-2xl bg-[#121829] border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-indigo-400 text-[11px] font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" /> Active Subscription Overview
          </div>
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-white">Professional Plan</h2>
            <span className="px-2.5 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-[10px] font-bold">
              ACTIVE
            </span>
          </div>
          <p className="text-xs text-slate-400">
            Your automated billing renews on <span className="text-white font-bold">Nov 15, 2026</span> for <span className="text-white font-bold">$79.00 / monthly</span> via Visa (...4242).
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-lg shadow-indigo-600/30 transition-all">
            Upgrade Plan <ChevronRight className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1A2138] hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-700/80 transition-all">
            <RefreshCw className="w-3.5 h-3.5" /> Simulate Workload
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* API Requests */}
        <div className="p-5 rounded-2xl bg-[#121829] border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
              <Zap className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-medium text-slate-400 bg-slate-800/80 px-2.5 py-0.5 rounded-full">
              8% used
            </span>
          </div>
          <div>
            <p className="text-xs font-medium text-slate-400">API Requests This Month</p>
            <p className="text-xl font-bold text-white mt-1">
              78,450 <span className="text-xs text-slate-500 font-normal">/ 1,000,000</span>
            </p>
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div className="bg-indigo-500 h-full rounded-full" style={{ width: "8%" }} />
          </div>
        </div>

        {/* Storage */}
        <div className="p-5 rounded-2xl bg-[#121829] border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
              <HardDrive className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-medium text-slate-400 bg-slate-800/80 px-2.5 py-0.5 rounded-full">
              17% used
            </span>
          </div>
          <div>
            <p className="text-xs font-medium text-slate-400">Cloud Storage Used</p>
            <p className="text-xl font-bold text-white mt-1">
              42 GB <span className="text-xs text-slate-500 font-normal">/ 250 GB</span>
            </p>
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div className="bg-indigo-500 h-full rounded-full" style={{ width: "17%" }} />
          </div>
        </div>

        {/* Team Seats */}
        <div className="p-5 rounded-2xl bg-[#121829] border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
              <Users className="w-4 h-4" />
            </div>
            <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
              53% utilized
            </span>
          </div>
          <div>
            <p className="text-xs font-medium text-slate-400">Active Team Seats</p>
            <p className="text-xl font-bold text-white mt-1">
              8 <span className="text-xs text-slate-500 font-normal">/ 15 seats</span>
            </p>
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div className="bg-emerald-400 h-full rounded-full" style={{ width: "53%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}