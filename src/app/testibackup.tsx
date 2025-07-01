'use client';

import React from 'react';
import Link from 'next/link';
import MainLayout from '@/components/MainLayout';

export default function ContactamePage() {
  return (
    <MainLayout>
      <div
        style={{
          minHeight: '100vh',
          padding: '2rem 1rem',
          background: 'linear-gradient(to bottom, #60a5fa, #ffffff, #93c5fd)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontFamily: 'sans-serif',
          color: '#1f2937',
          animation: 'fade-in 1s ease-out forwards',
        }}
      >
        <h2
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
          }}
        >
          Contáctame
        </h2>

        <div
          style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '1rem',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            width: '100%',
            maxWidth: '600px',
          }}
        >
          <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
            ¿Tienes preguntas? ¿Quieres agendar una clase? Escríbeme aquí.
          </p>

          <form
            method="POST"
            action="https://formspree.io/f/manjlqjn"
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <input
              type="email"
              name="email"
              placeholder="Tu correo electrónico"
              required
              style={{
                padding: '0.75rem',
                borderRadius: '0.5rem',
                border: '1px solid #ccc',
              }}
            />
            <textarea
              name="message"
              placeholder="Tu mensaje"
              required
              rows={4}
              style={{
                padding: '0.75rem',
                borderRadius: '0.5rem',
                border: '1px solid #ccc',
              }}
            ></textarea>
            <button
              type="submit"
              style={{
                backgroundColor: '#2563eb',
                color: 'white',
                fontWeight: 'bold',
                padding: '0.75rem',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#1d4ed8';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#2563eb';
              }}
            >
              Enviar Mensaje
            </button>
          </form>
        </div>

        <div
          style={{
            marginTop: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            alignItems: 'center',
          }}
        >
          <Link
            href="/features/contactame"
            style={{
              display: 'inline-block',
              backgroundColor: '#2563eb',
              color: 'white',
              fontWeight: 'bold',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.75rem',
              textDecoration: 'none',
              textAlign: 'center',
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
              border: '2px solid #2563eb',
              borderRadius: '0.75rem',
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
