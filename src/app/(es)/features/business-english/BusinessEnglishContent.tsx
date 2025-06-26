'use client';

import Link from 'next/link';

export default function BusinessEnglishContent() {
  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '2rem',
        background: 'linear-gradient(to bottom, #e0f2fe, #ffffff)',
        fontFamily: 'sans-serif',
        textAlign: 'center',
      }}
    >
      <span className="sr-only">
        Clases de inglés de negocios para profesionales. Aprende a comunicarte en reuniones,
        entrevistas y presentaciones en inglés con confianza y fluidez.
      </span>

      <h1
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          color: '#1f2937',
        }}
      >
        Inglés de Negocios
      </h1>

      <p
        style={{
          color: '#374151',
          fontSize: '1.1rem',
          marginBottom: '2rem',
        }}
      >
        Domina el inglés que necesitas para prosperar en entornos profesionales internacionales.
        Aprenderás a comunicarte con confianza en reuniones, hacer presentaciones efectivas,
        escribir correos claros y diplomáticos, y desenvolverte con fluidez en situaciones de
        networking. Este curso está diseñado especialmente para hispanohablantes que quieren
        avanzar en su carrera o acceder a nuevas oportunidades globales.
      </p>

      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
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
            transition: 'background-color 0.3s ease',
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

        <div style={{ marginTop: '1.5rem' }}>
          <Link
            href="/features"
            style={{
              display: 'inline-block',
              backgroundColor: '#2563eb',
              color: 'white',
              padding: '0.6rem 1.25rem',
              borderRadius: '0.5rem',
              fontWeight: 'bold',
              textDecoration: 'none',
            }}
          >
            ← Volver
          </Link>
        </div>
      </div>
    </div>
  );
}
