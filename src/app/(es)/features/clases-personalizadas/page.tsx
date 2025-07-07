'use client';

import MainLayout from '@/components/MainLayout';
import Link from 'next/link';
import JsonLdBreadcrumbCustomClasses from '@/components/JsonLdBreadcrumbCustomClasses';

export default function ClasesPersonalizadasPage() {
  return (
    <MainLayout>
      {/* ✅ Inject breadcrumb structured data */}
      <JsonLdBreadcrumbCustomClasses />

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
          Clases Personalizadas
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
          Cada estudiante tiene necesidades diferentes. Ofrezco clases adaptadas a tu profesión, intereses,
          nivel actual y objetivos específicos. Ya sea que trabajes en medicina, ingeniería, derecho, o estés
          comenzando desde cero, planificamos juntos un programa eficaz para ti.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <Link
            href="https://calendar.app.google/M3DnLoa1754P9qdHA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Reserva tu clase gratis con Harry Michael Ernest"
            title="Agendar una clase personalizada de inglés con Harry Michael Ernest"
            style={{
              display: 'inline-block',
              backgroundColor: '#2563eb',
              color: 'white',
              fontWeight: 'bold',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontSize: '1rem',
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
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#2563eb';
              e.currentTarget.style.color = 'white';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#2563eb';
            }}
          >
            ← Volver
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
