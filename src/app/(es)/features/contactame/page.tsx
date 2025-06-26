'use client';

import React, { useState } from 'react';

export default function ContactamePage() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      setStatus('✅ Mensaje enviado correctamente.');
      form.reset();
    } else {
      setStatus('❌ Error al enviar el mensaje.');
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '2rem',
        fontFamily: 'sans-serif',
        background: 'linear-gradient(to bottom, #93c5fd, #ffffff)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '1rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          width: '100%',
          maxWidth: '500px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Contáctame</h2>

        <input
  name="name"
  type="text"
  placeholder="Tu nombre"
  required
  style={{
    padding: '0.75rem',
    borderRadius: '0.5rem',
    border: '1px solid #ccc',
    width: '100%',
    fontSize: '1rem',
  }}
/>

<input
  name="email"
  type="email"
  placeholder="Tu correo electrónico"
  required
  style={{
    padding: '0.75rem',
    borderRadius: '0.5rem',
    border: '1px solid #ccc',
    width: '100%',
    fontSize: '1rem',
  }}
/>

<textarea
  name="message"
  placeholder="Tu mensaje"
  required
  rows={5}
  style={{
    padding: '0.75rem',
    borderRadius: '0.5rem',
    border: '1px solid #ccc',
    width: '100%',
    fontSize: '1rem',
  }}
/>

        <button
          type="submit"
          style={{
            backgroundColor: '#2563eb',
            color: 'white',
            padding: '0.75rem',
            borderRadius: '0.5rem',
            border: 'none',
            fontWeight: 'bold',
          }}
        >
          Enviar mensaje
        </button>

        {status && (
          <p style={{ marginTop: '1rem', color: 'green', fontWeight: 600 }}>{status}</p>
        )}
      </form>
    </div>
  );
}
