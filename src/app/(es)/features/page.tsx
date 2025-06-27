'use client';

import Link from 'next/link';

export default function FeaturesPage() {
  return (
    <div
      className="animate-fade-in"
      style={{
        minHeight: '100vh',
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

      <div style={{ maxWidth: '640px', width: '100%' }}>
        {/* Inglés de Negocios */}
        <div style={{ marginBottom: '2rem' }}>
          <Link href="/features/business-english">
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                color: '#1d4ed8',
                marginBottom: '0.5rem',
                cursor: 'pointer',
              }}
            >
              Inglés de Negocios
            </h3>
          </Link>
          <p style={{ color: '#374151' }}>
            Aprende el idioma que necesitas para reuniones, presentaciones y correos profesionales.
          </p>
        </div>

        {/* Clases Personalizadas */}
        <div style={{ marginBottom: '2rem' }}>
          <Link href="/features/custom-classes">
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                color: '#1d4ed8',
                marginBottom: '0.5rem',
                cursor: 'pointer',
              }}
            >
              Una Gran Variedad de Clases Personalizadas
            </h3>
          </Link>
          <p style={{ color: '#374151' }}>
            Diseñadas para tus metas específicas en tu sector profesional.
          </p>
        </div>

        {/* Sobre mí */}
        <div style={{ marginBottom: '2rem' }}>
          <Link href="/features/sobre-mi">
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                color: '#1d4ed8',
                marginBottom: '0.5rem',
                cursor: 'pointer',
              }}
            >
              Sobre mí
            </h3>
          </Link>
          <p style={{ color: '#374151' }}>
            Conoce mi experiencia, formación y pasión por la enseñanza del inglés profesional.
          </p>
        </div>

        {/* Testimonias */}
        <div style={{ marginBottom: '2rem' }}>
          <Link href="/features/testimonias">
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                color: '#1d4ed8',
                marginBottom: '0.5rem',
                cursor: 'pointer',
              }}
            >
              Testimonias
            </h3>
          </Link>
          <p style={{ color: '#374151' }}>
            Lo que dicen mis estudiantes:
          </p>
        </div>

        {/* Contáctame */}
        <div style={{ marginBottom: '2rem' }}>
          <Link href="/features/contactame">
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                color: '#1d4ed8',
                marginBottom: '0.5rem',
                cursor: 'pointer',
              }}
            >
              Contáctame
            </h3>
          </Link>
          <p style={{ color: '#374151' }}>
            ¿Listo para mejorar tu inglés profesional? Envíame un mensaje y comencemos.
          </p>
        </div>
      </div>
    </div>
  );
}
