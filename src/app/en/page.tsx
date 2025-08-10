// src/app/en/page.tsx  (server component)
import Link from 'next/link';
import heroImg from '@/assets/hero-fixed.jpg';

export const metadata = {
  title: 'Personalized English Classes | businessenglish.vip',
  description:
    'Learn English online with personalized classes for professionals. Improve your conversation, technical vocabulary, and confidence.',
};

export default function HomePageEN() {
  return (
    <section
      style={{
        position: 'relative',
        height: '100svh',
        width: '100%',
        overflow: 'hidden',
        background: 'linear-gradient(to bottom, #60a5fa, #ffffff, #93c5fd)',
        isolation: 'isolate',
      }}
    >
      {/* Background image (no animations, no client code) */}
      <img
        src={heroImg.src}
        alt=""
        decoding="async"
        fetchPriority="high"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block',
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.60)',
        }}
      />

      {/* Simple language switcher */}
      <nav
        aria-label="Language"
        style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          display: 'flex',
          gap: '8px',
          zIndex: 2,
        }}
      >
        <Link href="/"   prefetch={false} style={{ color: '#fff', textDecoration: 'none' }}>ES</Link>
        <Link href="/en" prefetch={false} style={{ color: '#fff', textDecoration: 'none' }}>EN</Link>
        <Link href="/zh" prefetch={false} style={{ color: '#fff', textDecoration: 'none' }}>中文</Link>
      </nav>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          paddingLeft: '1cm',
          paddingRight: '1rem',
          marginTop: '3.5cm',
          color: '#fff',
          maxWidth: '72ch',
        }}
      >
        <h3 style={{ margin: 0, fontWeight: 600 }}>
          Personalized online English classes for professionals.
        </h3>

        <h1 style={{ fontSize: '3rem', lineHeight: 1.2, margin: '12px 0 0' }}>
          Learn English with confidence
        </h1>

        <p
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#c1121f',
            marginTop: '16px',
            whiteSpace: 'pre-line',
          }}
        >
          I offer personalized English courses
          {'\n'}for Spanish-speaking professionals.
        </p>

        <Link
          href="/en/features"
          prefetch={false}
          style={{
            display: 'inline-block',
            marginTop: '18px',
            background: '#2563eb',
            color: '#fff',
            padding: '12px 20px',
            borderRadius: '12px',
            fontWeight: 700,
            textDecoration: 'none',
          }}
        >
          Learn more
        </Link>
      </div>
    </section>
  );
}
