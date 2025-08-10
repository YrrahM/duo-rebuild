'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';
import JsonLdBreadcrumbContactame from '@/components/JsonLdBreadcrumbContactame';

export default function ContactamePage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      router.push(`/features/thank-you?name=${encodeURIComponent(name)}`);
    } else {
      alert('No se pudo enviar el mensaje. Intenta más tarde.');
    }
  };


  return (
    <>
      <JsonLdBreadcrumbContactame />

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

        <form
          onSubmit={handleSubmit}
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
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
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
  style={{
    padding: '0.75rem',
    borderRadius: '0.5rem',
    border: '1px solid #ccc',
    fontSize: '1rem',
  }}
/>

          <textarea
  placeholder="Tu mensaje"
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  required
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

        <div
          style={{
            marginTop: '2rem',
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
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
              color: '#2563eb',
              fontWeight: 600,
              textDecoration: 'underline',
            }}
          >
            ← Volver
          </Link>
        </div>
      </div>

      <div style={{ backgroundColor: '#1f2937', paddingTop: '1rem' }}>
        <Footer />
      </div>
    </>
  );
}
