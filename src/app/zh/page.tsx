// src/app/zh/page.tsx  (server component)
import Link from 'next/link';
import heroImg from '@/assets/hero-fixed.jpg';

export const metadata = {
  title: '个性化英语课程 | businessenglish.vip',
  description:
    '为专业人士提供个性化的在线英语课程。提升会话能力、专业词汇与自信。',
};

export default function HomePageZH() {
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
      {/* Background image (no animations, server-rendered) */}
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
        aria-label="语言"
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
          为专业人士提供个性化的在线英语课程。
        </h3>

        <h1 style={{ fontSize: '3rem', lineHeight: 1.2, margin: '12px 0 0' }}>
          自信学英语
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
          为西语母语的专业人士提供
          {'\n'}个性化英语课程。
        </p>

        <Link
          href="/zh/features"
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
          了解更多
        </Link>
      </div>
    </section>
  );
}
