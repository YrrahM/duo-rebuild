import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/MainLayout';
import JsonLdPerson from '@/components/JsonLdPerson';
import JsonLdBreadcrumbSobreMi from '@/components/JsonLdBreadcrumbSobreMi';

export const metadata = {
  title: 'Sobre mí | Tu profesor de inglés de confianza',
  description: 'Conoce a tu profesor de inglés con experiencia internacional y un enfoque personalizado.',
  openGraph: {
    title: 'Sobre mí | Tu profesor de inglés de confianza',
    description: 'Aprende más sobre mi experiencia profesional y mi método de enseñanza.',
    url: 'https://businessenglish.vip/features/sobre-mi',
    siteName: 'businessenglish.vip',
    images: [
      {
        url: 'https://businessenglish.vip/og/prof.png',
        width: 1200,
        height: 630,
        alt: 'Profesor de inglés profesional en videollamada',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre mí | Tu profesor de confianza',
    description: 'Descubre quién está detrás de tus clases personalizadas de inglés.',
    images: ['https://businessenglish.vip/og/prof.png'],
  },
  robots: 'index, follow',
};

export default function SobreMiPage() {
  return (
    <MainLayout>
      <JsonLdPerson />
      <JsonLdBreadcrumbSobreMi />

      <div className="relative min-h-screen px-4 py-16 animate-fade-in">
        <div className="max-w-[800px] mx-auto bg-white rounded-2xl shadow-md p-8 text-gray-800 z-10 relative">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Sobre mí</h2>

          <p className="mb-4 text-justify">
            Soy un instructor nativo de inglés británico con más de 40 años de experiencia en la enseñanza de inglés general y profesional.<br />
            Tengo una Maestría en Educación con especialización en Enseñanza del Inglés como Lengua Extranjera y Psicología Educativa,<br />
            además de la certificación CELTA de Cambridge.
          </p>

          <p className="mb-4 text-justify">
            A lo largo de mi carrera, he ayudado a profesionales en sectores como ingeniería, derecho, hotelería, medicina, aviación y minería<br />
            a desarrollar sus habilidades comunicativas en inglés. Mis clases se centran en tus metas reales: mejorar la fluidez, ganar confianza<br />
            y expresarte con claridad en situaciones laborales.
          </p>

          <p className="text-justify">
            Creo en un ambiente de aprendizaje amigable, en el que puedas integrar el idioma a tu vida profesional<br />
            de forma natural y efectiva.
          </p>
        </div>

        <div className="flex justify-center mt-10 mb-6">
          <Image
            src="/logos/sobre-mi.png"
            alt="Harry Michael Ernest"
            width={260}
            height={260}
            className="rounded-xl shadow-xl"
          />
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-[800px] mx-auto">
          <Image src="/logos/child.png" alt="Niño" width={150} height={150} className="rounded-xl shadow-md w-full h-auto" />
          <Image src="/logos/student.png" alt="Estudiante" width={150} height={150} className="rounded-xl shadow-md w-full h-auto" />
          <Image src="/logos/businessman.png" alt="Ejecutivo" width={150} height={150} className="rounded-xl shadow-md w-full h-auto" />
          <Image src="/logos/doctor.png" alt="Doctor" width={150} height={150} className="rounded-xl shadow-md w-full h-auto" />
          <Image src="/logos/awacs.png" alt="Piloto" width={150} height={150} className="rounded-xl shadow-md w-full h-auto" />
          <Image src="/logos/engineer.png" alt="Ingeniero" width={150} height={150} className="rounded-xl shadow-md w-full h-auto" />
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contacto"
            className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors duration-300"
          >
            Agendar una clase
          </Link>

          <div style={{ marginTop: '1.5rem' }}>
            <Link
              href="/features"
              className="inline-block bg-blue-600 text-white font-bold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              ← Volver
            </Link>
          </div>
 // ...everything else unchanged above...

        </div>
      </div>
    </MainLayout>
  );
} // ✅ This closing brace was missing
