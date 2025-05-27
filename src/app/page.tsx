'use client';
import HeroSection from '../components/HeroSection';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSection
        headline="Speak English Like a Pro"
        subheadline="Fast-track your fluency with tailored tutoring"
        ctaLabel="Start Your Free Trial"
        onCtaClick={() => alert("Free Trial Booked")}
        imageUrl="/hero.jpg" // ✅ this must match public/hero.jpg exactly
        altText="Happy woman learning online"
      />
    </main>
  );
}

