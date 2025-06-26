

import React from 'react';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main
      style={{
        padding: 0,
        margin: 0,
        background: 'linear-gradient(to bottom, #bfdbfe, #ffffff, #e5e7eb)',
        fontFamily: 'sans-serif',
        color: '#1f2937',
        animation: 'fade-in 2.5s ease-out forwards',
        opacity: 0,
        minHeight: '100vh',
      }}
    >
      {children}
    </main>
  );
}
