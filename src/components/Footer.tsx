'use client';
import React from 'react';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <h2 className="text-lg font-semibold mb-3">Inglés Profesional Online</h2>
          <p className="text-sm text-gray-400">Clases enfocadas en la fluidez. Impartidas por un experto. Resultados reales.</p>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-3">Navegación</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/#contact">Contáctame</Link></li>
            <li><Link href="/privacy-policy">Política de privacidad</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-3">Conecta</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-3">Contacto</h3>
          <p className="text-sm text-gray-400">Correo: info@businessenglish.vip</p>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Inglés Profesional Online. Todos los derechos reservados.
      </div>
    </footer>
  );
}
