"use client";

import { Sparkles, LayoutDashboard, Layers, CreditCard, TrendingUp, ShieldCheck } from "lucide-react";

export default function Navigation({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) {
  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "plans", label: "Plans & Upgrades", icon: Layers },
    { id: "billing", label: "Billing & Invoices", icon: CreditCard },
    { id: "analytics", label: "Usage Analytics", icon: TrendingUp },
    { id: "admin", label: "Admin Panel", icon: ShieldCheck },
  ];

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-[#080C14] border-b border-slate-800/60">
      {/* Brand */}
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/30">
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <h1 className="text-sm font-bold text-white tracking-wide">SubSphere SaaS</h1>
          <p className="text-[11px] text-slate-400">Subscription & Billing Engine</p>
        </div>
      </div>

      {/* Navigation Pills */}
      <nav className="flex items-center gap-1 p-1 rounded-full bg-[#101524] border border-slate-800">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                isActive
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/40"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {tab.label}
            </button>
          );
        })}
      </nav>

      {/* Right Controls */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Stripe Live Gateway
        </div>
        <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-bold text-indigo-300">
          AR
        </div>
      </div>
    </header>
  );
}