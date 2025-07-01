'use client';

import React from 'react';
import Footer from './Footer';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Main content area */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer block */}
      <div
        style={{
          backgroundColor: '#1f2937', // Tailwind's gray-800
          paddingTop: '2rem',
          paddingBottom: '2rem',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <Footer />
      </div>
    </div>
  );
}
