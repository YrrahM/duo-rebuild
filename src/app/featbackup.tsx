'use client';

import React from 'react';
import Footer from './Footer';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-200 via-white to-gray-100">
      {/* Main content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-sm px-4 py-8 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="mb-2 font-semibold">businessenglish.vip</p>
          <p className="mb-2">Propietario: Harry Michael Ernest</p>
          <p className="mb-2">Correo: harry@businessenglish.vip</p>
          <p className="mb-2">Dirección: Neuquén, Argentina</p>
          <p className="text-gray-400 mt-4">© {new Date().getFullYear()} Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
