'use client';

import React from 'react';
import Script from 'next/script';

export default function JsonLdPerson() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Harry Michael Ernest',
    url: 'https://businessenglish.vip/features/sobre-mi',
    jobTitle: 'Profesor de Inglés para Profesionales',
    worksFor: {
      '@type': 'Organization',
      name: 'businessenglish.vip',
      url: 'https://businessenglish.vip',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Cambridge English CELTA | M.Ed. in TEFL & Educational Psychology',
    },
    knowsAbout: [
      'Inglés de Negocios',
      'Inglés Técnico',
      'Inglés Jurídico',
      'Inglés Médico',
      'Psicología Educativa',
    ],
    sameAs: [
      'https://businessenglish.vip/features/sobre-mi'
    ],
  };

  return (
    <Script
      id="jsonld-person"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
