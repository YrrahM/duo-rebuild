'use client';

import { useEffect, useState } from 'react';
import MainLayout from '@/components/MainLayout';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';

export default function HomeContent() {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []); // show footer after first paint

  return (
    <MainLayout>
      <HeroSection />
      {ready && <Footer />}
    </MainLayout>
  );
}
