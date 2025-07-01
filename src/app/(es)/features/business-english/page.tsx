'use client';

import MainLayout from '@/components/MainLayout';
import Link from 'next/link';

export default function BusinessEnglishPage() {
  return (
    <MainLayout>
      <div
        className="animate-fade-in"
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(to bottom, #bfdbfe, #ffffff, #e5e7eb)',
          padding: '2rem 1rem',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '1.5rem',
          }}
        >
          Inglés de Negocios
        </h1>

        <p
          style={{
            maxWidth: '640px',
            margin: '0 auto 2rem auto',
            fontSize: '1.125rem',
            color: '#374151',
            lineHeight: '1.75rem',
          }}
        >
          Aprende a comunicarte con seguridad en entornos empresariales internacionales. Estas clases están
          diseñadas para ayudarte a expresarte con claridad en reuniones, presentaciones, entrevistas y más.
          Desde correos formales hasta estrategias de negociación, trabajamos con situaciones reales de tu
          campo profesional.
        </p>

        {/* ✅ CTA Container */}
        <div
          style={{
            marginTop: '2rem',
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
          }}
        >
          <Link
            href="/contacto"
            style={{
              display: 'inline-block',
              backgroundColor: '#2563eb',
              color: 'white',
              fontWeight: 'bold',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
            }}
          >
            Agendar una Clase Gratis
          </Link>

          <Link
            href="/features"
            style={{
              display: 'inline-block',
              color: '#2563eb',
              fontWeight: 'bold',
              border: '2px solid #2563eb',
              borderRadius: '0.5rem',
              padding: '0.75rem 1.5rem',
              textDecoration: 'none',
            }}
          >
            ← Volver
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
