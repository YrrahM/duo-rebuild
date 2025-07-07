'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import JsonLdBreadcrumbTestimonias from '@/components/JsonLdBreadcrumbTestimonias';

export default function TestimoniasPage() {
  return (
    <>
      {/* ✅ Inject structured breadcrumb for SEO */}
      <JsonLdBreadcrumbTestimonias />

      <div
        className="animate-fade-in"
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(to bottom, #bfdbfe, #ffffff, #e5e7eb)',
          padding: '2rem 1rem 400px',
          fontFamily: 'sans-serif',
        }}
      >
        <h2
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#1f2937',
            textAlign: 'center',
            marginBottom: '2rem',
          }}
        >
          Testimonias
        </h2>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem',
            alignItems: 'center',
            maxWidth: '700px',
            margin: '0 auto',
          }}
        >
          {/* Testimonial 1 */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              backgroundColor: '#fff',
              borderRadius: '1rem',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
              padding: '1.5rem',
              width: '100%',
            }}
          >
            <Image
              src="/logos/quezada.jpg"
              alt="Logotipo de Quezada Abogados, cliente satisfecho de clases de inglés jurídico"
              width={80}
              height={100}
              style={{ objectFit: 'contain', borderRadius: '0.5rem' }}
            />
            <div>
              <p style={{ color: '#374151', fontSize: '1rem', marginBottom: '0.5rem', textAlign: 'justify' }}>
                “Considero que Harry Ernest ha dejado un gran aporte en mi manejo del inglés...”
              </p>
              <p style={{ fontWeight: 'bold', color: '#1f2937' }}>
                – Alejandro Javier Quezada Ramírez, Director en Javier Quezada Abogado, México
              </p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              backgroundColor: '#fff',
              borderRadius: '1rem',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
              padding: '1.5rem',
              width: '100%',
            }}
          >
            <Image
              src="/logos/bechtel.jpeg"
              alt="Logotipo de Bechtel Corporation, empresa con personal capacitado en inglés técnico"
              width={100}
              height={60}
              style={{ objectFit: 'contain', borderRadius: '0.5rem' }}
            />
            <div>
              <p style={{ color: '#374151', fontSize: '1rem', marginBottom: '0.5rem', textAlign: 'justify' }}>
                “Mis dos grandes hallazgos y avances con el profesor Ernest fueron...”
              </p>
              <p style={{ fontWeight: 'bold', color: '#1f2937' }}>
                – Banjamin Porras, Project Coordinator, Bechtel, Chile
              </p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          style={{
            marginTop: '2.5rem',
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
          }}
        >
          <Link
  href="https://calendar.app.google/M3DnLoa1754P9qdHA"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Reserva tu clase gratis con Harry Michael Ernest"
  title="Agendar una clase de inglés con el profesor recomendado por estudiantes satisfechos"
  style={{
    display: 'inline-block',
    backgroundColor: '#2563eb',
    color: 'white',
    fontWeight: 'bold',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.75rem',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.backgroundColor = '#1d4ed8';
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.backgroundColor = '#2563eb';
  }}
>
  Agendar una Clase Gratis
</Link>


          <Link
            href="/features"
            style={{
              display: 'inline-block',
              border: '2px solid #2563eb',
              color: '#2563eb',
              fontWeight: 600,
              padding: '0.75rem 1.5rem',
              borderRadius: '0.75rem',
              textDecoration: 'none',
              textAlign: 'center',
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

      {/* ✅ Footer always outside the main content */}
      <Footer />
    </>
  );
}
