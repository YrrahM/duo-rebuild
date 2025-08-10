// src/components/HomeClient.tsx (server component)
import Image from 'next/image';
import Link from 'next/link';
import heroImg from '@/assets/hero-fixed.jpg';
import { HOME_MESSAGES as MESSAGES, Locale } from '@/messages/home';

type MessageShape = (typeof MESSAGES)[Locale];

export default function HomeClient({ locale }: { locale: Locale }) {
  const t: MessageShape = MESSAGES[locale];
  const featuresHref = locale === 'es' ? '/features' : `/${locale}/features`;

  return (
    <section
      id="home"
      aria-label={t.aria}
      className="relative w-full overflow-hidden"
      style={{ height: '100svh', backgroundColor: '#0b1220', isolation: 'isolate' }}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg}
          alt={t.alt}
          fill
          priority
          quality={90}
          placeholder="blur"
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 z-10" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }} />

      <div className="relative z-20 text-left max-w-3xl px-4 md:px-8" style={{ paddingTop: '10vh', paddingLeft: '1cm' }}>
        <h1 className="font-bold mb-4" style={{ fontSize: '3rem', lineHeight: '1.2', color: '#fff' }}>
          {t.title}
        </h1>
        <p className="leading-relaxed mb-6" style={{ fontSize: '1.5rem', color: '#c1121f', fontWeight: 'bold' }}>
          {t.subtitle1}
          <br />
          {t.subtitle2}
        </p>
        <Link
          href={featuresHref}
          className="inline-block font-bold py-3 px-6 rounded-xl text-lg transition duration-300 mt-6"
          style={{ backgroundColor: '#2563eb', color: '#fff', textDecoration: 'none' }}
        >
          {t.cta}
        </Link>
      </div>

      <span className="sr-only">{t.sr}</span>
    </section>
  );
}
