import HeroSection from '@/components/HeroSection';

export const metadata = {
  title: 'Clases de Inglés para Profesionales | businessenglish.vip',
  description:
    'Aprende inglés con un profesor con experiencia internacional. Clases personalizadas para profesionales hispanohablantes que quieren destacar en su carrera.',
  openGraph: {
    title: 'Clases de Inglés para Profesionales | businessenglish.vip',
    description:
      'Inglés personalizado para profesionales: conversación, negocios, entrevistas y más. Mejora tu confianza y oportunidades.',
    url: 'https://businessenglish.vip',
    siteName: 'businessenglish.vip',
    images: [
      {
        url: 'https://businessenglish.vip/og/home.png',
        width: 1200,
        height: 630,
        alt: 'Profesor enseñando inglés en videollamada a un profesional',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clases de Inglés para Profesionales | businessenglish.vip',
    description:
      'Cursos de inglés diseñados para ejecutivos y profesionales que buscan avanzar en su carrera.',
    images: ['https://businessenglish.vip/og/home.png'],
  },
  alternates: {
    canonical: 'https://businessenglish.vip',
  },
  robots: 'index, follow',
};
// temp edit

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      {/* You can add FeatureSection, TestimonialsSection, etc. here */}
    </main>
  );
}
