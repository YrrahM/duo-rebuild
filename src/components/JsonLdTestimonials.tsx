'use client';

import React from 'react';
import Script from 'next/script';

export default function JsonLdTestimonials() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Person',
      name: 'Harry Michael Ernest',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
    },
    author: {
      '@type': 'Person',
      name: 'Alejandro Javier Quezada Ramírez',
    },
    reviewBody:
      'Harry me ayudó a alcanzar un nuevo nivel en mi inglés profesional. Gracias a su enfoque personalizado y a su dedicación constante, ahora puedo expresarme con confianza y claridad en contextos jurídicos internacionales.',
  };

  return (
    <Script
      id="jsonld-testimonial"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
