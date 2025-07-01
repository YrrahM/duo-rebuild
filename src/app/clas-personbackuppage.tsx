import MainLayout from '@/components/MainLayout';
import Link from 'next/link';

export const metadata = {
  title: 'Clases Personalizadas | businessenglish.vip',
  description:
    'Clases de inglés personalizadas para todos los niveles y profesiones. Aprende a tu ritmo con un enfoque adaptado a tus necesidades.',
  openGraph: {
    title: 'Clases Personalizadas | businessenglish.vip',
    description:
      'Ofrezco clases de inglés personalizadas según tu profesión, intereses y nivel. Perfecto para avanzar de forma rápida y efectiva.',
    url: 'https://businessenglish.vip/features/clases-personalizadas',
    siteName: 'businessenglish.vip',
    images: [
      {
        url: 'https://businessenglish.vip/og/custom.png',
        width: 1200,
        height: 630,
        alt: 'Clase personalizada de inglés para profesionales',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clases Personalizadas | businessenglish.vip',
    description:
      'Cursos adaptados a tu ritmo, profesión y nivel. Aprende inglés con confianza.',
    images: ['https://businessenglish.vip/og/custom.png'],
  },
  robots: 'index, follow',
};

export default function ClasesPersonalizadasPage() {
  return (
    <MainLayout>
      <div
        className="animate-fade-in"
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(to bottom, #bfdbfe, #ffffff, #e5e7eb)',
          padding: '2rem 1rem',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '1.5rem',
          }}
        >
          Clases Personalizadas
        </h1>

        <p
          style={{
            maxWidth: '640px',
            margin: '0 auto 2rem auto',
            fontSize: '1.125rem',
            color: '#374151',
            lineHeight: '1.75rem',
          }}
        >
          Cada estudiante tiene necesidades diferentes. Ofrezco clases adaptadas a tu profesión, intereses,
          nivel actual y objetivos específicos. Ya sea que trabajes en medicina, ingeniería, derecho, o estés
          comenzando desde cero, planificamos juntos un programa eficaz para ti.
        </p>

        {/* ✅ CTA Container */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <Link
            href="/features/contactame"
            style={{
              display: 'inline-block',
              backgroundColor: '#2563eb',
              color: 'white',
              fontWeight: 'bold',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontSize: '1rem',
            }}
          >
            Agendar una Clase Gratis
          </Link>
          <Link
            href="/features"
            style={{
              display: 'inline-block',
              color: '#2563eb',
              fontWeight: 'bold',
              border: '2px solid #2563eb',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontSize: '1rem',
            }}
          >
            ← Volver
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
