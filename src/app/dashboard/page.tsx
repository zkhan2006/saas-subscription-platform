import React from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#090A0F', color: '#E2E8F0', padding: '0 24px 40px 24px' }}>
      
      {/* Top Navigation */}
      <header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '18px 0',
        borderBottom: '1px solid #1E2235'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '36px', height: '36px', borderRadius: '10px',
            background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'
          }}>✦</div>
          <div>
            <div style={{ fontWeight: '700', fontSize: '16px', color: '#FFF' }}>SubSphere SaaS</div>
            <div style={{ fontSize: '12px', color: '#64748B' }}>Subscription & Billing Engine</div>
          </div>
        </div>

        <nav style={{ display: 'flex', gap: '6px', background: '#121520', padding: '4px', borderRadius: '30px', border: '1px solid #1E2235' }}>
          <Link href="/dashboard" style={{ background: '#4F46E5', color: '#FFF', padding: '8px 16px', borderRadius: '20px', textDecoration: 'none', fontSize: '13px', fontWeight: '600' }}>Dashboard</Link>
          <Link href="/pricing" style={{ color: '#94A3B8', padding: '8px 16px', textDecoration: 'none', fontSize: '13px' }}>Plans & Upgrades</Link>
          <span style={{ color: '#94A3B8', padding: '8px 16px', fontSize: '13px' }}>Billing & Invoices</span>
          <span style={{ color: '#94A3B8', padding: '8px 16px', fontSize: '13px' }}>Usage Analytics</span>
          <span style={{ color: '#94A3B8', padding: '8px 16px', fontSize: '13px' }}>Admin Panel</span>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ background: '#064E3B', color: '#34D399', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', border: '1px solid #059669', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#34D399' }}></span>
            Stripe Live Gateway
          </div>
          <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: '#312E81', color: '#C7D2FE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold' }}>
            AR
          </div>
        </div>
      </header>

      <main style={{ maxWidth: '1200px', margin: '32px auto 0 auto' }}>
        
        {/* Active Subscription Overview */}
        <section style={{
          background: 'linear-gradient(180deg, #131628 0%, #0D0F1D 100%)',
          borderRadius: '16px',
          border: '1px solid #1E233D',
          padding: '28px',
          marginBottom: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ fontSize: '12px', fontWeight: '700', color: '#818CF8', letterSpacing: '0.5px', marginBottom: '8px' }}>
              ⚡ ACTIVE SUBSCRIPTION OVERVIEW
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <h1 style={{ margin: 0, fontSize: '30px', color: '#FFF' }}>Professional Plan</h1>
              <span style={{ background: '#1E1B4B', color: '#818CF8', padding: '4px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: '700', border: '1px solid #312E81' }}>ACTIVE</span>
            </div>
            <p style={{ margin: '8px 0 0 0', color: '#94A3B8', fontSize: '14px' }}>
              Your automated billing renews on <strong>Nov 15, 2026</strong> for <strong>$79.00 / monthly</strong> via Visa (...4242).
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <Link href="/pricing" style={{
              background: 'linear-gradient(135deg, #6366F1, #4F46E5)',
              color: '#FFF',
              padding: '12px 20px',
              borderRadius: '10px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '14px'
            }}>
              Upgrade Plan ›
            </Link>
            <button style={{
              background: '#121522',
              color: '#E2E8F0',
              border: '1px solid #2A2F4C',
              padding: '12px 20px',
              borderRadius: '10px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '14px'
            }}>
              🔄 Simulate Workload
            </button>
          </div>
        </section>

        {/* 3 Metric Grid Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '24px' }}>
          
          {/* API Requests Card */}
          <div style={{ background: '#0E111D', border: '1px solid #1C2035', borderRadius: '14px', padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ color: '#94A3B8', fontSize: '13px' }}>API Requests This Month</span>
              <span style={{ background: '#1E1B4B', color: '#818CF8', padding: '2px 8px', borderRadius: '10px', fontSize: '11px' }}>8% used</span>
            </div>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#FFF', marginBottom: '16px' }}>
              78,450 <span style={{ fontSize: '14px', color: '#64748B', fontWeight: 'normal' }}>/ 1,000,000</span>
            </div>
            <div style={{ height: '6px', backgroundColor: '#1E2338', borderRadius: '3px', overflow: 'hidden' }}>
              <div style={{ width: '8%', height: '100%', backgroundColor: '#6366F1' }}></div>
            </div>
          </div>

          {/* Cloud Storage Card */}
          <div style={{ background: '#0E111D', border: '1px solid #1C2035', borderRadius: '14px', padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ color: '#94A3B8', fontSize: '13px' }}>Cloud Storage Used</span>
              <span style={{ background: '#1E1B4B', color: '#818CF8', padding: '2px 8px', borderRadius: '10px', fontSize: '11px' }}>17% used</span>
            </div>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#FFF', marginBottom: '16px' }}>
              42 GB <span style={{ fontSize: '14px', color: '#64748B', fontWeight: 'normal' }}>/ 250 GB</span>
            </div>
            <div style={{ height: '6px', backgroundColor: '#1E2338', borderRadius: '3px', overflow: 'hidden' }}>
              <div style={{ width: '17%', height: '100%', backgroundColor: '#8B5CF6' }}></div>
            </div>
          </div>

          {/* Active Team Seats Card */}
          <div style={{ background: '#0E111D', border: '1px solid #1C2035', borderRadius: '14px', padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ color: '#94A3B8', fontSize: '13px' }}>Active Team Seats</span>
              <span style={{ background: '#064E3B', color: '#34D399', padding: '2px 8px', borderRadius: '10px', fontSize: '11px' }}>53% utilized</span>
            </div>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#FFF', marginBottom: '16px' }}>
              8 <span style={{ fontSize: '14px', color: '#64748B', fontWeight: 'normal' }}>/ 15 seats</span>
            </div>
            <div style={{ height: '6px', backgroundColor: '#1E2338', borderRadius: '3px', overflow: 'hidden' }}>
              <div style={{ width: '53%', height: '100%', backgroundColor: '#10B981' }}></div>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}