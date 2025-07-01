'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function ThankYouPage() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || 'amigo';

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-12"
      style={{
        background: 'linear-gradient(to bottom, #93c5fd, #ffffff, #bfdbfe)',
        fontFamily: 'sans-serif',
        color: '#1f2937',
      }}
    >
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-xl w-full animate-fade-in">
        <h2 className="text-3xl font-bold mb-4">¡Gracias por tu mensaje, {name}!</h2>
        <p className="text-lg mb-6">
          Me pondré en contacto contigo muy pronto.
        </p>
        <div className="flex justify-center gap-6">
          <Link href="/features/contactame" className="text-blue-600 hover:underline">
            ← Enviar otro mensaje
          </Link>
          <Link href="/features" className="text-blue-600 hover:underline">
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
