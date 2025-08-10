'use client';

import Image from 'next/image';
import heroImg from '@/assets/hero-fixed.jpg';

export type HeroSectionProps = {
  onImageLoad?: () => void;
};

export default function HeroSection({ onImageLoad }: HeroSectionProps) {
  return (
    <section
      aria-hidden="true"
      style={{
        position: 'relative',
        zIndex: 0,
        height: '100svh',
        width: '100%',
        overflow: 'hidden',
        backgroundImage: `linear-gradient(to bottom, rgba(96,165,250,0.45), rgba(255,255,255,0.15), rgba(147,197,253,0.45)), url(${heroImg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Invisible preloader just to fire onLoad */}
      <Image
        src={heroImg}
        alt=""
        priority
        onLoad={onImageLoad}
        style={{ position: 'absolute', width: 1, height: 1, opacity: 0, pointerEvents: 'none' }}
      />
    </section>
  );
}
