'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import heroImg from '@/assets/hero-fixed.jpg';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      {/* Main Content Section */}
      <section
        id="home"
        aria-label="Sección principal de introducción a clases de inglés personalizadas"
        className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden"
        style={{ paddingBottom: '380px' }} // ✅ Push content up to avoid footer overlap
      >
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={heroImg}
            alt="Clases de inglés online personalizadas para profesionales"
            placeholder="blur"
            fill
            quality={90}
            className="object-cover object-center animate-fade-in"
          />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Screen reader text */}
        <span className="sr-only">
          Aprende inglés online con clases personalizadas para profesionales. Mejora tu conversación,
          vocabulario técnico y confianza con Harry Ernest.
        </span>

        {/* Hero Content */}
        <div
          className="z-30 text-left animate-fade-in-delay-1"
          style={{
            paddingLeft: '1cm',
            paddingRight: '1rem',
            marginTop: '3.5cm',
          }}
        >
          <h1
            className="font-bold mb-4"
            style={{
              fontSize: '3rem',
              lineHeight: '1.2',
              color: '#ffffff',
            }}
          >
            Aprende inglés con confianza
          </h1>

          <p
            className="leading-relaxed mb-6"
            style={{
              fontSize: '1.5rem',
              color: '#c1121f',
              fontWeight: 'bold',
            }}
          >
            Ofrezco cursos personalizados de inglés<br />
            para profesionales hispanohablantes.
          </p>

          <Link
            href="/features"
            className="inline-block font-bold py-3 px-6 rounded-xl text-lg transition duration-300 mt-6"
            style={{
              backgroundColor: '#2563eb',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Más información
          </Link>
        </div>
      </section>

      {/* ✅ Footer placed outside and below the main section */}
      <Footer />
    </>
  );
}
