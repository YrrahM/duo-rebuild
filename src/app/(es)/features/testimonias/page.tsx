'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function TestimoniasPage() {
  return (
    <>
      <div
        className="animate-fade-in"
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(to bottom, #bfdbfe, #ffffff, #e5e7eb)',
          padding: '2rem 1rem 400px', // Extra bottom padding for footer
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
              alt="Logo of Javier Quezada Abogado"
              width={60}
              height={80}
              className="rounded-md object-contain"
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
              alt="Logo de Bechtel"
              width={80}
              height={80}
              style={{ borderRadius: '0.5rem', flexShrink: 0 }}
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
            href="/contacto"
            style={{
              display: 'inline-block',
              backgroundColor: '#2563eb',
              color: 'white',
              fontWeight: 600,
              padding: '0.75rem 1.5rem',
              borderRadius: '0.75rem',
              textDecoration: 'none',
              textAlign: 'center',
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
