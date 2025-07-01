import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import heroImg from '@/assets/hero-fixed.jpg';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative flex-grow min-h-screen flex items-center justify-center overflow-hidden text-white">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={heroImg}
            alt="Clases de inglés online personalizadas para profesionales"
            placeholder="blur"
            fill
            quality={90}
            className="object-cover object-center"
          />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 -z-10" />

        {/* Screen-reader text */}
        <span className="sr-only">
          Aprende inglés online con clases personalizadas para profesionales. Mejora tu conversación,
          vocabulario técnico y confianza con Harry Ernest.
        </span>

        {/* Hero Content */}
        <div className="z-30 text-left px-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4 text-white">
            Aprende inglés con confianza
          </h1>

          <p className="text-xl font-semibold text-red-500 mb-6">
            Ofrezco cursos personalizados de inglés para profesionales hispanohablantes.
          </p>

          <Link
            href="/features"
            className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-700 transition"
          >
            Más información
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
