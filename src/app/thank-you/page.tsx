// src/app/thank-you/page.tsx
'use client';

import HeroSection from '@/components/HeroSection_TEMP';
import FeaturesSection from '@/components/FeatureCards';
import FooterSection from '@/components/FooterSection';
import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <div className="text-center my-8">
        <Link href="/">
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Volver al inicio
          </button>
        </Link>
      </div>
      <FooterSection />
    </>
  );
}
