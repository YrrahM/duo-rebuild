// src/app/(es)/features/custom-classes/page.tsx
import Link from 'next/link';
import MainLayout from '@/components/MainLayout';

// ✅ These must only be used inside a client component
import JsonLdClientOnly from './JsonLdClientOnly';

export const metadata = {
  title: 'Clases Personalizadas | businessenglish.vip',
  description: 'Clases de inglés adaptadas a tus necesidades profesionales y nivel. Diseñadas para hispanohablantes que buscan avanzar en su carrera.',
  alternates: {
    canonical: 'https://businessenglish.vip/features/custom-classes',
  },
  keywords: [
    'clases personalizadas de inglés',
    'inglés para profesionales',
    'clases online de inglés',
    'inglés adaptado a tu nivel',
  ],
  robots: 'index, follow',
  openGraph: {
    title: 'Clases Personalizadas | businessenglish.vip',
    description: 'Aprende inglés con un enfoque único adaptado a tus objetivos profesionales.',
    url: 'https://businessenglish.vip/features/custom-classes',
    siteName: 'businessenglish.vip',
    images: [
      {
        url: 'https://businessenglish.vip/og/custom-classes.png',
        width: 1200,
        height: 630,
        alt: 'Clases de inglés personalizadas para profesionales',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clases Personalizadas | businessenglish.vip',
    description: 'Diseñadas para adaptarse a tus metas, nivel y sector profesional.',
    images: ['https://businessenglish.vip/og/custom-classes.png'],
  },
};

export default function CustomClassesPage() {
  return (
    <MainLayout>
      {/* ✅ Inject client-only structured data */}
      <JsonLdClientOnly />

      <div
        style={{
          minHeight: '100vh',
          padding: '2rem',
          background: 'linear-gradient(to bottom, #e0f2fe, #ffffff)',
          fontFamily: 'sans-serif',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Clases Personalizadas
        </h2>
        <p style={{ color: '#374151', fontSize: '1.1rem', marginBottom: '2rem' }}>
          Cada estudiante es diferente, por eso adapto mis clases a tus objetivos, nivel de inglés,
          y área profesional...
        </p>

        <Link
          href="/features/contactame"
          style={{
            display: 'inline-block',
            backgroundColor: '#2563eb',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.5rem',
            fontWeight: 'bold',
            textDecoration: 'none',
            marginBottom: '1rem',
          }}
        >
          Agendar una clase gratuita
        </Link>

        <div>
          <Link
            href="/features"
            style={{
              display: 'inline-block',
              backgroundColor: '#2563eb',
              color: 'white',
              padding: '0.6rem 1.25rem',
              borderRadius: '0.5rem',
              fontWeight: 'bold',
              textDecoration: 'none',
            }}
          >
            ← Volver
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
