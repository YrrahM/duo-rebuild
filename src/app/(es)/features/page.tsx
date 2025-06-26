'use client';

import React from 'react';
import Link from 'next/link';

export default function FeaturesPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '2rem 1rem',
        paddingBottom: '4rem',
        background: 'linear-gradient(to bottom, #bfdbfe, #ffffff, #e5e7eb)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontFamily: 'sans-serif',
        animation: 'fade-in 2.5s ease-out forwards',
        opacity: 0,
      }}
    >
      <h2
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          color: '#1f2937',
          marginBottom: '2rem',
        }}
      >
        ¿Qué Ofrezco?
      </h2>

      <div
        style={{
          maxWidth: '640px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '2.5rem',
        }}
      >
        <div style={{ animation: 'fade-in 0.8s ease-out 0.2s forwards', opacity: 0 }}>
          <Link href="/features/business-english">
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1d4ed8', cursor: 'pointer' }}>
              Inglés de Negocios
            </h3>
          </Link>
          <p style={{ color: '#374151' }}>
            Aprende el idioma que necesitas para reuniones, presentaciones y correos profesionales.
          </p>
        </div>

        <div style={{ animation: 'fade-in 0.8s ease-out 0.4s forwards', opacity: 0 }}>
          <Link href="/features/custom-classes">
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1d4ed8', cursor: 'pointer' }}>
              Una Gran Variedad de Clases Personalizadas
            </h3>
          </Link>
          <p style={{ color: '#374151' }}>
            Diseñadas para tus metas específicas en tu sector profesional.
          </p>
        </div>

        <div style={{ animation: 'fade-in 0.8s ease-out 0.6s forwards', opacity: 0 }}>
          <Link href="/features/sobre-mi">
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1d4ed8', cursor: 'pointer' }}>
              Sobre mí
            </h3>
          </Link>
          <p style={{ color: '#374151' }}>
            Conoce mi experiencia, formación y pasión por la enseñanza del inglés profesional.
          </p>
        </div>

        <div style={{ animation: 'fade-in 0.8s ease-out 0.8s forwards', opacity: 0 }}>
          <Link href="/features/testimonias">
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1d4ed8', cursor: 'pointer' }}>
              Testimonias
            </h3>
          </Link>
          <p style={{ color: '#374151' }}>Lo que dicen mis estudiantes:</p>
        </div>

        <div style={{ animation: 'fade-in 0.8s ease-out 1s forwards', opacity: 0 }}>
          <Link href="/features/contactame">
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1d4ed8', cursor: 'pointer' }}>
              Contáctame
            </h3>
          </Link>
          <p style={{ color: '#374151' }}>
            ¿Listo para mejorar tu inglés profesional? Envíame un mensaje y comencemos.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div style={{ marginTop: '2.5rem' }}>
        <Link
          href="/features/contactame"
          style={{
            display: 'inline-block',
            backgroundColor: '#2563eb',
            color: 'white',
            fontWeight: 600,
            padding: '0.75rem 1.5rem',
            borderRadius: '0.75rem',
            textDecoration: 'none',
            textAlign: 'center',
            transition: 'background-color 0.3s ease',
            cursor: 'pointer',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#1d4ed8';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#2563eb';
          }}
        >
          Agendar una clase
        </Link>
      </div>
    </div>
  );
}
