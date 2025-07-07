'use client';

import React from 'react';
import Link from 'next/link';
import MainLayout from '../../../components/MainLayout';

export default function FeaturesPage() {
  return (
    <MainLayout>
      <div
        className="animate-fade-in"
        style={{
          minHeight: 'auto',
          marginBottom: '4rem',
          padding: '2rem 1rem',
          background: 'linear-gradient(to bottom, #bfdbfe, #ffffff, #e5e7eb)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-10">¿Qué Ofrezco?</h2>

        <Link href="/features/business-english" className="text-xl underline text-purple-800 mb-2">
          <strong>Inglés de Negocios</strong>
        </Link>
        <p className="text-gray-700 mb-6">
          Aprende el idioma que necesitas para reuniones, presentaciones y correos profesionales.
        </p>

        <Link href="/features/clases-personalizadas" className="text-xl underline text-purple-800 mb-2">
          <strong>Una Gran Variedad de Clases Personalizadas</strong>
        </Link>
        <p className="text-gray-700 mb-6">
          Diseñadas para tus metas específicas en tu sector profesional.
        </p>

        <Link href="/features/sobre-mi" className="text-xl underline text-purple-800 mb-2">
          <strong>Sobre mí</strong>
        </Link>
        <p className="text-gray-700 mb-6">
          Conoce mi experiencia, formación y pasión por la enseñanza del inglés profesional.
        </p>

        <Link href="/features/testimonias" className="text-xl underline text-purple-800 mb-2">
          <strong>Testimonias</strong>
        </Link>
        <p className="text-gray-700 mb-6">Lo que dicen mis estudiantes:</p>

        <Link href="/features/contactame" className="text-xl underline text-purple-800 mb-2">
          <strong>Contáctame</strong>
        </Link>
        <p className="text-gray-700 mb-6">
          ¿Listo para mejorar tu inglés profesional? Envíame un mensaje y comencemos.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            marginTop: '2.5rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap',
          }}
        >
          <Link
  href="https://calendar.app.google/M3DnLoa1754P9qdHA"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Reserva tu clase gratis con Harry Michael Ernest"
  title="Agendar una clase gratuita de inglés profesional con Harry Michael Ernest"
  style={{
    display: 'inline-block',
    backgroundColor: '#2563eb',
    color: 'white',
    fontWeight: 'bold',
    textDecoration: 'none',
    fontSize: '1.1rem',
    border: '2px solid #2563eb',
    borderRadius: '0.75rem',
    padding: '0.5rem 1rem',
    transition: 'all 0.3s ease',
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
  href="/"
  style={{
    display: 'inline-block',
    color: '#2563eb',
    fontWeight: 'bold',
    textDecoration: 'none',
    fontSize: '1.1rem',
    border: '2px solid #2563eb',
    borderRadius: '0.75rem',
    padding: '0.5rem 1rem',
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
