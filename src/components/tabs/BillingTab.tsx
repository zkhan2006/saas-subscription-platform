"use client";

import { CreditCard, Download, Plus, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function BillingTab() {
  const invoices = [
    { id: "INV-2026-101", date: "Oct 15, 2026", plan: "Professional (Monthly)", amount: "$79.00", status: "Paid" },
    { id: "INV-2026-092", date: "Sep 15, 2026", plan: "Professional (Monthly)", amount: "$79.00", status: "Paid" },
    { id: "INV-2026-083", date: "Aug 15, 2026", plan: "Professional (Monthly)", amount: "$79.00", status: "Paid" },
    { id: "INV-2026-074", date: "Jul 15, 2026", plan: "Growth Starter (Monthly)", amount: "$29.00", status: "Paid" },
    { id: "INV-2026-065", date: "Jun 15, 2026", plan: "Growth Starter (Monthly)", amount: "$29.00", status: "Paid" },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Tab Header & Action Button */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Billing & Automated Invoices
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Manage payment methods, billing emails, and download tax-compliant receipts.
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/30 transition-all">
          <Plus className="w-4 h-4" /> Add Payment Method
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Container: Payment Method & Details */}
        <div className="p-6 rounded-2xl bg-[#13192E] border border-slate-800/80 space-y-6">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider">
            <CreditCard className="w-4 h-4 text-indigo-400" /> Default Payment Method
          </div>

          {/* Virtual Credit Card Display */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-[#182038] to-[#0E1324] border border-slate-700/80 space-y-6 shadow-inner">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                Stripe Secure
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-white text-xs font-bold border border-slate-700">
                Visa
              </span>
            </div>

            <div className="text-lg font-mono tracking-widest text-white font-semibold">
              •••• •••• •••• <span className="text-indigo-300">4242</span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400 font-medium">Exp: 12/28</span>
              <span className="flex items-center gap-1 text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 text-[10px]">
                <ShieldCheck className="w-3 h-3" /> Verified
              </span>
            </div>
          </div>

          {/* Billing Metadata */}
          <div className="space-y-3 pt-2 text-xs">
            <div className="flex items-center justify-between py-2 border-b border-slate-800/80">
              <span className="text-slate-400">Billing Email:</span>
              <span className="font-medium text-slate-200">billing@acmedigital.io</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-slate-800/80">
              <span className="text-slate-400">Auto-Renew:</span>
              <span className="font-semibold text-emerald-400">Enabled</span>
            </div>
          </div>

          <button className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all">
            Edit Billing Info
          </button>
        </div>

        {/* Right Container: Invoice History Table */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-[#13192E] border border-slate-800/80 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white">Invoice History</h3>
            <span className="text-xs text-slate-400 font-medium">5 invoices generated</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 uppercase font-semibold text-[10px] tracking-wider">
                  <th className="pb-3 px-2">Invoice ID</th>
                  <th className="pb-3 px-2">Date</th>
                  <th className="pb-3 px-2">Plan</th>
                  <th className="pb-3 px-2">Amount</th>
                  <th className="pb-3 px-2">Status</th>
                  <th className="pb-3 px-2 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {invoices.map((inv) => (
                  <tr key={inv.id} className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-4 px-2 font-bold text-white">{inv.id}</td>
                    <td className="py-4 px-2 text-slate-300">{inv.date}</td>
                    <td className="py-4 px-2 text-slate-400">{inv.plan}</td>
                    <td className="py-4 px-2 font-bold text-white">{inv.amount}</td>
                    <td className="py-4 px-2">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-semibold">
                        <CheckCircle2 className="w-3 h-3" /> {inv.status}
                      </span>
                    </td>
                    <td className="py-4 px-2 text-right">
                      <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-semibold border border-slate-700 transition-all">
                        <Download className="w-3 h-3" /> PDF
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}