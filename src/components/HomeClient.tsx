// src/components/HomeClient.tsx  (server component)
import Image from 'next/image';
import Link from 'next/link';
import heroImg from '@/assets/hero-fixed.jpg';

// ...MESSAGES stays the same...

export default function HomeClient({ locale }: { locale: 'es' | 'en' | 'zh' }) {
  const t = MESSAGES[locale];
  const featuresHref = locale === 'es' ? '/features' : `/${locale}/features`;

  return (
    <section
      id="home"
      aria-label={t.aria}
      className="relative w-full overflow-hidden"
      // Use dynamic viewport height so it’s exactly 1 screen tall on all browsers
      style={{
        height: '100svh',          // modern viewport unit (fixes desktop/mobile bars)
        backgroundColor: '#0b1220', // first-paint fallback
        isolation: 'isolate',
      }}
    >
      {/* Background image fills the section */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg}
          alt={t.alt}
          fill
          priority
          quality={90}
          placeholder="blur"
          className="object-cover object-center"
        />
      </div>

      {/* Dark overlay (inline so it appears before CSS) */}
      <div
        className="absolute inset-0 z-10"
        style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
      />

      {/* Content (no big margins/paddings that change the section height) */}
      <div
        className="relative z-20 text-left max-w-3xl px-4 md:px-8"
        style={{ paddingTop: '10vh', paddingLeft: '1cm' }} // gentle offset only
      >
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
