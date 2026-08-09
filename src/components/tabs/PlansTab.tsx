"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export default function PlansTab() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const plans = [
    {
      name: "Free Starter",
      tagline: "Essential tools for side projects and evaluation.",
      monthlyPrice: 0,
      annualPrice: 0,
      popular: false,
      features: [
        "10,000 API Requests/mo",
        "1 GB Storage",
        "1 Team Member",
        "Community Support",
        "Basic Analytics",
      ],
    },
    {
      name: "Growth Starter",
      tagline: "Perfect for growing startups and indie creators.",
      monthlyPrice: 29,
      annualPrice: 23,
      popular: false,
      features: [
        "100,000 API Requests/mo",
        "25 GB Storage",
        "5 Team Members",
        "Email Support",
        "Advanced Analytics",
        "Webhook Integration",
      ],
    },
    {
      name: "Professional",
      tagline: "Built for scaling businesses requiring high throughput.",
      monthlyPrice: 79,
      annualPrice: 63,
      popular: true,
      features: [
        "1,000,000 API Requests/mo",
        "250 GB Storage",
        "15 Team Members",
        "Priority 24/7 Support",
        "Real-time Streaming Analytics",
        "Custom Domain & SSL",
        "Role-based Permissions",
      ],
    },
    {
      name: "Enterprise Ultra",
      tagline: "Uncapped power and dedicated infrastructure for large orgs.",
      monthlyPrice: 299,
      annualPrice: 239,
      popular: false,
      features: [
        "Unlimited API Requests",
        "2 TB Dedicated Storage",
        "Unlimited Team Members",
        "Dedicated Account Manager",
        "SLA 99.99% Uptime",
        "Custom Security Audits",
        "HIPAA & SOC2 Compliance",
      ],
    },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-10">
      {/* Header & Subtitle */}
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          Flexible Plans for Every Stage
        </h2>
        <p className="text-sm text-slate-400 max-w-2xl mx-auto">
          Scale your API infrastructure instantly with automated provisioning and transparent Stripe billing.
        </p>

        {/* Billing Cycle Toggle */}
        <div className="pt-4 flex justify-center">
          <div className="inline-flex items-center p-1.5 rounded-full bg-[#131826] border border-slate-800">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                billingCycle === "monthly"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                billingCycle === "annual"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Annual Billing
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                Save 20%
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
        {plans.map((plan) => {
          const price = billingCycle === "annual" ? plan.annualPrice : plan.monthlyPrice;

          return (
            <div
              key={plan.name}
              className={`relative rounded-2xl bg-[#13192E] p-6 flex flex-col justify-between transition-all duration-200 border ${
                plan.popular
                  ? "border-indigo-500 shadow-2xl shadow-indigo-500/10 ring-1 ring-indigo-500/50"
                  : "border-slate-800/80 hover:border-slate-700"
              }`}
            >
              {/* Most Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-3.5 py-1 rounded-full bg-indigo-600 text-white text-[10px] font-extrabold uppercase tracking-widest shadow-md shadow-indigo-600/40">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                  <p className="text-xs text-slate-400 mt-1 min-h-[32px]">
                    {plan.tagline}
                  </p>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-white">${price}</span>
                  <span className="text-xs text-slate-400 font-medium">/ month</span>
                </div>

                <hr className="border-slate-800/80" />

                {/* Features Checklist */}
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-xs text-slate-300">
                      <div className="p-0.5 rounded bg-indigo-500/10 text-indigo-400 mt-0.5 shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}