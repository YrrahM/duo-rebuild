'use client';

import React from 'react';
import Script from 'next/script';

export default function JsonLdBusinessEnglish() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Características',
        item: 'https://businessenglish.vip/features',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Inglés de Negocios',
        item: 'https://businessenglish.vip/features/business-english',
      },
    ],
  };

  return (
    <Script
      id="jsonld-business-english"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
