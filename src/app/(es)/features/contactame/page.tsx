'use client';

import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function ContactamePage() {
  return (
    <>
      <div
        className="animate-fade-in"
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(to bottom, #60a5fa, #ffffff, #93c5fd)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '1.7rem',
          fontFamily: 'sans-serif',
          color: '#1f2937',
        }}
      >
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Contáctame
        </h2>
        <p style={{ marginBottom: '2rem', textAlign: 'center' }}>
          ¿Tienes preguntas? ¿Quieres agendar una clase? Escríbeme aquí.
        </p>

        {/* Contact Form */}
        <form
          style={{
            backgroundColor: '#fff',
            padding: '2rem',
            borderRadius: '1rem',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            width: '100%',
            maxWidth: '640px',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <input
            type="text"
            placeholder="Tu nombre"
            style={{
              padding: '0.75rem',
              borderRadius: '0.5rem',
              border: '1px solid #ccc',
              fontSize: '1rem',
            }}
          />
          <input
            type="email"
            placeholder="Tu correo electrónico"
            style={{
              padding: '0.75rem',
              borderRadius: '0.5rem',
              border: '1px solid #ccc',
              fontSize: '1rem',
            }}
          />
          <textarea
            placeholder="Tu mensaje"
            rows={5}
            style={{
              padding: '0.75rem',
              borderRadius: '0.5rem',
              border: '1px solid #ccc',
              fontSize: '1rem',
            }}
          />

          <button
            type="submit"
            style={{
              backgroundColor: '#2563eb',
              color: 'white',
              fontWeight: 600,
              padding: '0.75rem',
              borderRadius: '0.75rem',
              fontSize: '1rem',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Enviar Mensaje
          </button>
        </form>

        {/* CTA Buttons */}
        <div
          style={{
            marginTop: '2rem',
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
          }}
        >
          <Link
            href="/contacto"
            style={{
              color: '#2563eb',
              fontWeight: 600,
              textDecoration: 'underline',
            }}
          >
            Agendar una Clase Gratis
          </Link>
          <Link
            href="/features"
            style={{
              color: '#2563eb',
              fontWeight: 600,
              textDecoration: 'underline',
            }}
          >
            ← Volver
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div style={{ backgroundColor: '#1f2937', paddingTop: '1rem' }}>
        <Footer />
      </div>
    </>
  );
}
