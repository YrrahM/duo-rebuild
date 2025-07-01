import React from 'react';
import MainLayout from '@/components/MainLayout';

export const metadata = {
  title: 'Términos y Condiciones | businessenglish.vip',
  description: 'Lee los términos legales que rigen el uso de nuestros servicios de clases de inglés en línea.',
};

export default function TermsPage() {
  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto px-4 py-16 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Términos y Condiciones</h1>
        <p className="mb-4">
          Al acceder y utilizar este sitio web, aceptas cumplir con los siguientes términos y condiciones.
          Si no estás de acuerdo con alguno de ellos, por favor no utilices este sitio.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">1. Uso del sitio</h2>
        <p className="mb-4">
          Este sitio está destinado a ofrecer clases de inglés en línea para fines educativos y profesionales.
          No debes usarlo para actividades ilegales o no autorizadas.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">2. Contenido y propiedad</h2>
        <p className="mb-4">
          Todo el contenido de este sitio (textos, imágenes, diseño) pertenece a businessenglish.vip
          y está protegido por derechos de autor. No se permite su reproducción sin consentimiento previo.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">3. Responsabilidad</h2>
        <p className="mb-4">
          Aunque nos esforzamos por ofrecer información precisa, no garantizamos que el sitio esté libre de errores
          o interrupciones. El uso de los servicios es bajo tu propio riesgo.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">4. Cambios</h2>
        <p className="mb-4">
          Nos reservamos el derecho de modificar estos términos en cualquier momento. Te sugerimos revisarlos periódicamente.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">5. Contacto</h2>
        <p className="mb-4">
          Si tienes preguntas sobre estos términos, escríbenos a
          <a href="mailto:info@businessenglish.vip" className="text-blue-600 underline ml-1">info@businessenglish.vip</a>.
        </p>
      </div>
    </MainLayout>
  );
}
