


import Link from 'next/link';
import MainLayout from '@/components/MainLayout';
import JsonLdTestimonials from '@/components/JsonLdTestimonials';

export const metadata = {
  title: 'Testimonias | Opiniones reales de estudiantes satisfechos',
  description: 'Descubre cómo las clases personalizadas de inglés han ayudado a profesionales a mejorar su confianza y habilidades.',
  openGraph: {
    title: 'Testimonias | businessenglish.vip',
    description: 'Lee testimonios reales de estudiantes que han transformado su inglés profesional con Harry Ernest.',
    url: 'https://businessenglish.vip/features/testimonias',
    siteName: 'businessenglish.vip',
    images: [
      {
        url: 'https://businessenglish.vip/og/testimonias.png',
        width: 1200,
        height: 630,
        alt: 'Opiniones de estudiantes de inglés profesional',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Testimonias | businessenglish.vip',
    description: 'Historias reales de éxito: estudiantes que mejoraron su inglés profesional.',
    images: ['https://businessenglish.vip/og/testimonias.png'],
  },
  robots: 'index, follow',
};



export default function TestimoniasPage() {
  return (
    <MainLayout>
  <JsonLdTestimonials />
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>Testimonias</h1>
      {/* Alejandro Quezada */}
      <article
        style={{
          backgroundColor: 'white',
          padding: '1rem 1.25rem',
          borderRadius: '1rem',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          maxWidth: '800px',
          width: '100%',
          marginBottom: '1.5rem',
          animation: 'fade-in 0.8s ease-out 0.2s forwards',
          opacity: 0,
        }}
      >
        <p style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <img
            src="/logos/quezada.jpg"
            alt="Logo de Quezada"
            style={{
              height: '100px',
              width: 'auto',
              flexShrink: 0,
              borderRadius: '0.5rem',
            }}
          />
          <span style={{ flex: 1, minWidth: '200px' }}>
            “Harry me ayudó a alcanzar un nuevo nivel en mi inglés profesional. Gracias a su enfoque
            personalizado y a su dedicación constante, ahora puedo expresarme con confianza y claridad
            en contextos jurídicos internacionales.”
          </span>
        </p>
        <p style={{ textAlign: 'right', fontWeight: 'bold' }}>
          — Alejandro Javier Quezada Ramírez – Director en Javier Quezada Abogado, México
        </p>
      </article>

      {/* Benjamin Porras */}
      <article
        style={{
          backgroundColor: 'white',
          padding: '1rem 1.25rem',
          borderRadius: '1rem',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          maxWidth: '800px',
          width: '100%',
          marginBottom: '1.5rem',
          animation: 'fade-in 0.8s ease-out 0.4s forwards',
          opacity: 0,
        }}
      >
        <p style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <img
            src="/logos/bechtel.jpeg"
            alt="Bechtel logo"
            style={{
              height: '38px',
              width: 'auto',
              flexShrink: 0,
              borderRadius: '4px',
            }}
          />
          <span style={{ flex: 1, minWidth: '200px' }}>
            “Mis dos grandes hallazgos y avances con el profesor Ernest fueron:
            (1) Aclarar dudas específicas con los verbos y expresiones en inglés.
            (2) Generar confianza para conversaciones fluidas.
            (3) Tener más seguridad al exponer temas en inglés frente a audiencias nativas.”
          </span>
        </p>
        <p style={{ textAlign: 'right', fontWeight: 'bold' }}>
          — Benjamin Porras – Project Coordinator, Bechtel, Chile
        </p>
      </article>

      {/* CTA Button */}
      <div style={{ marginTop: '2rem' }}>
        <Link
  href="/contacto"
  style={{
    display: 'inline-block',
    backgroundColor: '#2563eb',
    color: 'white',
    fontWeight: 600,
    padding: '0.75rem 1.5rem',
    borderRadius: '0.75rem',
    textDecoration: 'none',
    textAlign: 'center',
  }}
>
  Agendar una clase
</Link>

      </div>

      {/* Volver Button */}
      <div style={{ marginTop: '1.5rem' }}>
        <Link href="/features" style={{ textDecoration: 'underline', color: '#1f2937' }}>
          Volver
        </Link>
      </div>
    </MainLayout>
  );
}
