import React from 'react';
import MainLayout from '@/components/MainLayout';

export const metadata = {
  title: 'Política de Cookies | businessenglish.vip',
  description: 'Descubre cómo usamos cookies para mejorar tu experiencia en nuestro sitio web.',
};

export default function CookiesPage() {
  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto px-4 py-16 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Política de Cookies</h1>
        <p className="mb-4">
          Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Esta política describe qué son las cookies, cómo las usamos y tus opciones al respecto.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">1. ¿Qué son las cookies?</h2>
        <p className="mb-4">
          Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">2. Tipos de cookies que usamos</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Cookies esenciales: necesarias para el funcionamiento básico del sitio.</li>
          <li>Cookies de rendimiento: nos ayudan a analizar cómo se utiliza el sitio.</li>
          <li>Cookies de funcionalidad: recuerdan tus preferencias.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">3. Cómo controlar las cookies</h2>
        <p className="mb-4">
          Puedes modificar la configuración de tu navegador para aceptar o rechazar cookies. Sin embargo, esto podría afectar algunas funcionalidades del sitio.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">4. Contacto</h2>
        <p className="mb-4">
          Si tienes preguntas sobre nuestra política de cookies, puedes escribirnos a
          <a href="mailto:info@businessenglish.vip" className="text-blue-600 underline ml-1">info@businessenglish.vip</a>.
        </p>
      </div>
    </MainLayout>
  );
}
