// src/components/HeroSection.tsx
import heroImg from '@/assets/hero-fixed.jpg';

export default function HeroSection() {
  return (
    <section
      aria-hidden="true"
      style={{
        position: 'relative',
        zIndex: 0, // <- ensure it's under the fixed header
        height: '100svh',
        width: '100%',
        overflow: 'hidden',
        backgroundImage: `linear-gradient(to bottom, rgba(96,165,250,0.45), rgba(255,255,255,0.15), rgba(147,197,253,0.45)), url(${heroImg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transition: 'none',
      }}
    />
  );
}
