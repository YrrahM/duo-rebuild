'use client';

import React from 'react';
import Footer from '@/components/Footer';

export default function TestFooterIsolatedPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // center vertically
        alignItems: 'center',     // center horizontally
        padding: '2rem',
        backgroundColor: '#f9fafb',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ maxWidth: '600px', width: '100%' }}>
        <Footer />
      </div>
    </div>
  );
}
