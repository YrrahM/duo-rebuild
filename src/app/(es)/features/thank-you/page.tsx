// File: /src/app/(es)/features/thank-you/page.tsx
import ThankYouClient from './ThankYouClient.tsx';

export const metadata = {
  title: 'Gracias por tu mensaje | businessenglish.vip',
  description: 'Gracias por contactarme. Muy pronto me pondré en contacto contigo para ayudarte con tus clases de inglés.',
  openGraph: {
    title: 'Gracias por tu mensaje | businessenglish.vip',
    description: 'Gracias por contactarme. Muy pronto me pondré en contacto contigo para ayudarte con tus clases de inglés.',
    url: 'https://businessenglish.vip/features/thank-you',
    siteName: 'businessenglish.vip',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: 'https://businessenglish.vip/og/thank-you.png',
        width: 1200,
        height: 630,
        alt: 'Confirmación de mensaje enviado con éxito',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gracias por tu mensaje | businessenglish.vip',
    description: 'Gracias por contactarme. Muy pronto me pondré en contacto contigo para ayudarte con tus clases de inglés.',
    images: ['https://businessenglish.vip/og/thank-you.png'],
  },
};

export default function ThankYouPage() {
  return <ThankYouClient />;
}
