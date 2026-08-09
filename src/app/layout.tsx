import React from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        padding: 0,
        backgroundColor: '#090A0F',
        color: '#FFFFFF',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        {children}
      </body>
    </html>
  );
}