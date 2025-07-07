// File: /src/app/page.tsx
import HomeClient from '@/components/HomeClient';

export const metadata = {
  title: 'Clases de Inglés Personalizadas | businessenglish.vip',
  description:
    'Aprende inglés online con un profesor con experiencia internacional. Cursos personalizados para profesionales en negocios, medicina, ingeniería y más.',
  openGraph: {
    title: 'Clases de Inglés Personalizadas | businessenglish.vip',
    description:
      'Aprende inglés online con un profesor con experiencia internacional. Cursos personalizados para profesionales en negocios, medicina, ingeniería y más.',
    url: 'https://businessenglish.vip/',
    siteName: 'businessenglish.vip',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: 'https://businessenglish.vip/og/homepage.png',
        width: 1200,
        height: 630,
        alt: 'Profesor de inglés en videollamada con alumno',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clases de Inglés Personalizadas | businessenglish.vip',
    description:
      'Reserva tu clase de inglés gratis con un profesor con experiencia internacional en varios sectores profesionales.',
    images: ['https://businessenglish.vip/og/homepage.png'],
  },
};

// ✅ This must exist
export default function HomePage() {
  return <HomeClient />;
}
