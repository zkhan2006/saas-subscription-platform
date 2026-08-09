import React from 'react';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>Subscription Plans</h1>
      <p>Choose a plan that fits your SaaS needs.</p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', width: '220px' }}>
          <h3>Pro Plan</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>$19 / mo</p>
          <button style={{ padding: '10px 15px', cursor: 'pointer', backgroundColor: '#0070f3', color: '#fff', border: 'none', borderRadius: '4px' }}>
            Subscribe
          </button>
        </div>

        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', width: '220px' }}>
          <h3>Enterprise Plan</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>$99 / mo</p>
          <button style={{ padding: '10px 15px', cursor: 'pointer', backgroundColor: '#0070f3', color: '#fff', border: 'none', borderRadius: '4px' }}>
            Subscribe
          </button>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <Link href="/">← Back to Home</Link>
      </div>
    </div>
  );
}