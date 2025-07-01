'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function ThankYouClient() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || 'amigo';

  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '2rem',
        background: 'linear-gradient(to bottom, #bfdbfe, #ffffff, #e0f2fe)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontFamily: 'sans-serif',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937' }}>
        ¡Gracias por tu mensaje, {name}!
      </h1>
      <p style={{ marginTop: '1rem', fontSize: '1.2rem', color: '#374151' }}>
        Me pondré en contacto contigo muy pronto para ayudarte con tus clases de inglés.
      </p>

      <div style={{ marginTop: '2rem' }}>
        <Link
          href="/"
          style={{
            backgroundColor: '#2563eb',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.75rem',
            textDecoration: 'none',
            fontWeight: 600,
          }}
        >
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}
