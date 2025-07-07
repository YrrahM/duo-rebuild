'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#1f2937',
        color: '#d1d5db',
        padding: '2rem 1rem',
        position: 'relative',
        fontSize: '0.875rem',
        animation: 'fade-in 1s ease-in-out',
      }}
    >
      {/* ✅ Logo in top-left corner */}
      <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
        <Image
          src="/logos/footer-logo.png"
          alt="Logo de businessenglish.vip"
          width={60}
          height={60}
        />
      </div>

      {/* ✅ Centered content */}
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontWeight: '600' }}>businessenglish.vip</p>
        <p>© {new Date().getFullYear()} Todos los derechos reservados.</p>
        <p>Mérida, Yucatán, México</p>

        <div style={{ marginTop: '1rem' }}>
          <Link
            href="/legal/privacidad"
            style={{
              marginRight: '1.5rem',
              color: '#2563eb',
              textDecoration: 'none',
            }}
          >
            Política de Privacidad
          </Link>
          <Link
            href="/legal/terminos"
            style={{
              marginRight: '1.5rem',
              color: '#2563eb',
              textDecoration: 'none',
            }}
          >
            Términos de Servicio
          </Link>
          <Link
            href="/legal/aviso"
            style={{
              color: '#2563eb',
              textDecoration: 'none',
            }}
          >
            Aviso Legal
          </Link>
        </div>

        {/* ✅ Social Media Links */}
        <div style={{ marginTop: '1.5rem' }}>
          <a
            href="https://www.linkedin.com/in/your-profile" // 🔁 Replace with actual LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: '1.5rem', color: '#d1d5db', textDecoration: 'none' }}
          >
            LinkedIn
          </a>
          <a
            href="https://www.facebook.com/your-page" // 🔁 Replace with actual Facebook
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: '1.5rem', color: '#d1d5db', textDecoration: 'none' }}
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/your-profile" // 🔁 Replace with actual Instagram
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: '1.5rem', color: '#d1d5db', textDecoration: 'none' }}
          >
            Instagram
          </a>
          <a
            href="https://x.com/your-handle" // ✅ X (Twitter) link
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#d1d5db', textDecoration: 'none' }}
          >
            X
          </a>
        </div>
      </div>
    </footer>
  );
}
