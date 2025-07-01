// File: /src/app/(es)/features/thank-you/page.tsx
import ThankYouClient from './ThankYouClient';

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
  },
};

export default function ThankYouPage() {
  return <ThankYouClient />;
}
