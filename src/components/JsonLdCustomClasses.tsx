'use client';

import React from 'react';
import Script from 'next/script';

export default function JsonLdCustomClasses() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Clases Personalizadas de Inglés',
    description:
      'Clases de inglés adaptadas a tus necesidades profesionales, entrevistas, conversación y vocabulario técnico.',
    provider: {
      '@type': 'Person',
      name: 'Harry Michael Ernest',
      url: 'https://businessenglish.vip/features/sobre-mi',
    },
    inLanguage: 'es',
    url: 'https://businessenglish.vip/features/custom-classes',
  };

  return (
    <Script
      id="jsonld-custom-classes"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
