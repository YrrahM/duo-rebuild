import MainLayout from '@/components/MainLayout';
import BusinessEnglishContent from './BusinessEnglishContent';
import JsonLdBusinessEnglish from '@/components/JsonLdBusinessEnglish';
import JsonLdBreadcrumbBusinessEnglish from '@/components/JsonLdBreadcrumbBusinessEnglish';


export const metadata = {
  title: 'Inglés de Negocios | businessenglish.vip',
  description:
    'Clases de inglés enfocadas en negocios, reuniones, presentaciones y entrevistas. Aprende con un profesor con experiencia en sectores profesionales.',
  alternates: {
    canonical: 'https://businessenglish.vip/features/business-english',
  },
  keywords: [
    'inglés de negocios',
    'clases de inglés para empresas',
    'inglés para ejecutivos',
    'clases online de inglés profesional',
    'profesor de inglés para negocios',
  ],
  robots: 'index, follow',
  openGraph: {
    title: 'Inglés de Negocios | businessenglish.vip',
    description:
      'Mejora tu inglés profesional con clases personalizadas para el mundo empresarial.',
    url: 'https://businessenglish.vip/features/business-english',
    siteName: 'businessenglish.vip',
    images: [
      {
        url: 'https://businessenglish.vip/og/business-english.png',
        width: 1200,
        height: 630,
        alt: 'Clase de inglés profesional para ejecutivos',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inglés de Negocios | businessenglish.vip',
    description:
      'Inglés práctico para reuniones, entrevistas y presentaciones con un profesor experimentado.',
    images: ['https://businessenglish.vip/og/business-english.png'],
  },
};

export default function BusinessEnglishPage() {
  return (
    <MainLayout>
  <JsonLdBusinessEnglish />
  <JsonLdBreadcrumbBusinessEnglish />
  <BusinessEnglishContent />
</MainLayout>

  );
}
