"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import DashboardTab from "@/components/tabs/DashboardTab";
import PlansTab from "@/components/tabs/PlansTab";
import BillingTab from "@/components/tabs/BillingTab";
import AnalyticsTab from "@/components/tabs/AnalyticsTab";
import AdminTab from "@/components/tabs/AdminTab";

export default function Home() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <main className="min-h-screen bg-[#090D16] text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      {/* Top Header Navigation */}
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Dynamic Tab Body Rendering */}
      <div className="pb-16">
        {activeTab === "dashboard" && <DashboardTab />}
        {activeTab === "plans" && <PlansTab />}
        {activeTab === "billing" && <BillingTab />}
        {activeTab === "analytics" && <AnalyticsTab />}
        {activeTab === "admin" && <AdminTab />}
      </div>
    </main>
  );
}