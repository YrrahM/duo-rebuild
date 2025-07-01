'use client';

import React from 'react';
import Link from 'next/link';

export default function ContactamePage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '2rem',
        background: 'linear-gradient(to bottom, #60a5fa, #ffffff, #93c5fd)',
        fontFamily: 'sans-serif',
        color: '#1f2937',
      }}
    >
      <div
        style={{
          maxWidth: '640px',
          margin: '0 auto',
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '1rem',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '1.5rem',
          }}
        >
          Contáctame
        </h2>
        <p style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
          ¿Tienes preguntas? ¿Quieres agendar una clase? Escríbeme aquí.
        </p>

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');

            const res = await fetch('/api/contact', {
              method: 'POST',
              body: JSON.stringify({ name, email, message }),
              headers: {
                'Content-Type': 'application/json',
              },
            });

            if (res.ok) {
              alert('✅ Tu mensaje fue enviado con éxito.');
              e.currentTarget.reset();
            } else {
              alert('❌ Hubo un error al enviar el mensaje.');
            }
          }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            required
            style={{
              padding: '0.75rem',
              borderRadius: '0.5rem',
              border: '1px solid #ccc',
            }}
          />
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
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#1d4ed8')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#2563eb')}
          >
            Enviar Mensaje
          </button>
        </form>

        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
          <Link href="/features/contactame" style={{ color: '#2563eb', textDecoration: 'underline' }}>
            Agendar una Clase Gratis
          </Link>
          <Link href="/features" style={{ color: '#2563eb', textDecoration: 'underline' }}>
            ← Volver
          </Link>
        </div>
      </div>
    </div>
  );
}
