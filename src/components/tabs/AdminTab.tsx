"use client";

import { useState } from "react";
import { Search, ShieldCheck, Users, DollarSign, Webhook, Activity } from "lucide-react";

interface Subscriber {
  id: string;
  name: string;
  code: string;
  joined: string;
  email: string;
  plan: string;
  mrr: string;
  status: "Active" | "Suspended";
}

export default function AdminTab() {
  const [searchTerm, setSearchTerm] = useState("");
  const [subscribers, setSubscribers] = useState<Subscriber[]>([
    { id: "1", name: "Alex Rivera", code: "USR-8912", joined: "Jan 2025", email: "alex@acmedigital.io", plan: "Professional", mrr: "$79", status: "Active" },
    { id: "2", name: "Sarah Jenkins", code: "USR-8913", joined: "Mar 2025", email: "sarah@fintechlabs.com", plan: "Enterprise Ultra", mrr: "$299", status: "Active" },
    { id: "3", name: "Marcus Vance", code: "USR-8914", joined: "May 2025", email: "marcus@cloudscale.ai", plan: "Growth Starter", mrr: "$29", status: "Active" },
    { id: "4", name: "Elena Rostova", code: "USR-8915", joined: "Jun 2025", email: "elena@biogenics.org", plan: "Free Starter", mrr: "$0", status: "Suspended" },
    { id: "5", name: "David Kim", code: "USR-8916", joined: "Aug 2025", email: "david@pixelcraft.co", plan: "Professional", mrr: "$79", status: "Active" },
  ]);

  const toggleStatus = (id: string) => {
    setSubscribers((prev) =>
      prev.map((sub) =>
        sub.id === id
          ? { ...sub, status: sub.status === "Active" ? "Suspended" : "Active" }
          : sub
      )
    );
  };

  const filteredSubscribers = subscribers.filter(
    (sub) =>
      sub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.plan.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header & Search */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" /> Role-Based Admin Control Center
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight mt-1">
            Subscriber Management
          </h2>
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search subscribers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#13192E] border border-slate-800/80 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-all"
          />
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-5 rounded-2xl bg-[#13192E] border border-slate-800/80 space-y-2">
          <p className="text-xs text-slate-400 font-medium">Total Subscribers</p>
          <p className="text-2xl font-extrabold text-white">{subscribers.length}</p>
        </div>

        <div className="p-5 rounded-2xl bg-[#13192E] border border-slate-800/80 space-y-2">
          <p className="text-xs text-slate-400 font-medium">Monthly Recurring Revenue</p>
          <p className="text-2xl font-extrabold text-emerald-400">$486.00</p>
        </div>

        <div className="p-5 rounded-2xl bg-[#13192E] border border-slate-800/80 space-y-2">
          <p className="text-xs text-slate-400 font-medium">Active Webhooks</p>
          <p className="text-2xl font-extrabold text-indigo-400">14 <span className="text-xs text-slate-400 font-normal">endpoints</span></p>
        </div>

        <div className="p-5 rounded-2xl bg-[#13192E] border border-slate-800/80 space-y-2">
          <p className="text-xs text-slate-400 font-medium">System Health</p>
          <p className="text-2xl font-extrabold text-emerald-400">99.99% <span className="text-xs text-slate-400 font-normal">SLA</span></p>
        </div>
      </div>

      {/* Subscriber Management Table */}
      <div className="p-6 rounded-2xl bg-[#13192E] border border-slate-800/80 space-y-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase font-semibold text-[10px] tracking-wider">
                <th className="pb-3 px-2">User ID & Name</th>
                <th className="pb-3 px-2">Email</th>
                <th className="pb-3 px-2">Subscription Plan</th>
                <th className="pb-3 px-2">MRR Contribution</th>
                <th className="pb-3 px-2">Status</th>
                <th className="pb-3 px-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredSubscribers.map((sub) => (
                <tr key={sub.id} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-2">
                    <p className="font-bold text-white text-xs">{sub.name}</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">{sub.code} • Joined {sub.joined}</p>
                  </td>
                  <td className="py-4 px-2 text-slate-300 font-mono">{sub.email}</td>
                  <td className="py-4 px-2">
                    <span className="px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-[10px] font-semibold">
                      {sub.plan}
                    </span>
                  </td>
                  <td className="py-4 px-2 font-bold text-white">{sub.mrr}</td>
                  <td className="py-4 px-2">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${
                      sub.status === "Active"
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                        : "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                    }`}>
                      {sub.status}
                    </span>
                  </td>
                  <td className="py-4 px-2 text-right">
                    <button
                      onClick={() => toggleStatus(sub.id)}
                      className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all ${
                        sub.status === "Active"
                          ? "bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30"
                          : "bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                      }`}
                    >
                      {sub.status === "Active" ? "Suspend" : "Activate"}
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