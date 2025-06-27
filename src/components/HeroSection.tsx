'use client';

import React from 'react';
import Image from 'next/image';
import heroImg from '@/assets/hero-fixed.jpg';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <header>
      <section
        id="home"
        aria-label="Sección principal de introducción a clases de inglés personalizadas"
        className="relative min-h-screen flex items-center justify-center overflow-hidden text-white"
      >
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={heroImg}
            alt="Clases de inglés online personalizadas para profesionales"
            placeholder="blur"
            fill
            quality={90}
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Screen reader-only summary */}
        <span className="sr-only">
          Aprende inglés online con clases personalizadas para profesionales. Mejora tu conversación,
          vocabulario técnico y confianza con Harry Ernest.
        </span>

        {/* Hero content */}
        <div
          className="z-20 text-left opacity-0"
          style={{
            paddingLeft: '1cm',
            paddingRight: '1rem',
            marginTop: '3.5cm',
            animation: 'fade-in 0.8s ease-out 0.2s forwards',
          }}
        >
          <h1
            className="font-bold mb-4 opacity-0"
            style={{
              fontSize: '3rem',
              lineHeight: '1.2',
              color: '#ffffff',
              animation: 'fade-in 1s ease-out 0.4s forwards',
            }}
          >
            Aprende inglés con confianza
          </h1>

          <p
            className="leading-relaxed mb-6 opacity-0"
            style={{
              fontSize: '1.5rem',
              color: '#c1121f',
              fontWeight: 'bold',
              animation: 'fade-in 1s ease-out 0.8s forwards',
            }}
          >
            Ofrezco cursos personalizados de inglés<br />
            para profesionales hispanohablantes.
          </p>

          <Link
            href="/features"
            className="inline-block font-bold py-3 px-6 rounded-xl text-lg transition duration-300 mt-6 opacity-0"
            style={{
              backgroundColor: '#2563eb',
              color: 'white',
              textDecoration: 'none',
              animation: 'fade-in 1s ease-out 1.2s forwards',
            }}
          >
            Más información
          </Link>
        </div>
      </section>
    </header>
  );
}
