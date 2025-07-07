'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/MainLayout';
import JsonLdBreadcrumbSobreMi from '@/components/JsonLdBreadcrumbSobreMi';

export default function SobreMiPage() {
  return (
    <MainLayout>
      {/* ✅ Inject structured data for breadcrumbs */}
      <JsonLdBreadcrumbSobreMi />

      <div
        className="animate-fade-in"
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(to bottom, #bfdbfe, #ffffff, #e5e7eb)',
          padding: '2rem 1rem',
          textAlign: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Centered Main Image */}
        <div style={{ marginBottom: '2rem' }}>
          <Image
            src="/logos/sobre-mi.png"
            alt="Sobre mí"
            width={200}
            height={200}
            style={{ margin: '0 auto', borderRadius: '50%' }}
          />
        </div>

        {/* Text Content */}
        <h1
          style={{
            fontSize: '2.25rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '1rem',
          }}
        >
          Sobre Mí
        </h1>
        <p
          style={{
            maxWidth: '700px',
            margin: '0 auto',
            fontSize: '1.125rem',
            color: '#374151',
            lineHeight: '1.75rem',
          }}
        >
          Soy un profesor de inglés con más de 40 años de experiencia internacional...
        </p>

        {/* Image Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: '1.5rem',
            justifyItems: 'center',
            alignItems: 'center',
            maxWidth: '800px',
            margin: '3rem auto 2rem auto',
          }}
        >
          {[
            { src: 'student.png', alt: 'Profesor ayudando a un estudiante universitario en línea' },
            { src: 'awacs.png', alt: 'Instrucción de inglés para personal de aviación militar AWACS' },
            { src: 'doctor.png', alt: 'Clases de inglés especializadas para médicos y personal sanitario' },
            { src: 'businessman.png', alt: 'Entrenamiento en inglés para ejecutivos y profesionales de negocios' },
            { src: 'engineer.png', alt: 'Clases de inglés técnico para ingenieros y desarrolladores' },
            { src: 'child.png', alt: 'Profesor enseñando inglés a un niño' },
          ].map(({ src, alt }, index) => (
            <Image
              key={index}
              src={`/logos/${src}`}
              alt={alt}
              width={100}
              height={100}
              style={{ borderRadius: '1rem' }}
            />
          ))}
        </div>

        {/* CTA Container */}
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
  title="Agendar una clase de inglés profesional con Harry Michael Ernest"
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
              color: '#2563eb',
              fontWeight: 'bold',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.75rem',
              border: '2px solid #2563eb',
              textDecoration: 'none',
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
