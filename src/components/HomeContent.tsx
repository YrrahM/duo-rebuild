'use client';

import { useState } from 'react';
import HeroSection from './HeroSection';
import Footer from './Footer';
import MainLayout from './MainLayout';

export default function HomeContent() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <MainLayout>
      <HeroSection onImageLoad={() => setImageLoaded(true)} />
      {imageLoaded && <Footer />}
    </MainLayout>
  );
}
