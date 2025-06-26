'use client';

import React from 'react';
import Script from 'next/script';

export default function JsonLdBreadcrumbCustomClasses() {
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
        name: 'Clases Personalizadas',
        item: 'https://businessenglish.vip/features/custom-classes',
      },
    ],
  };

  return (
    <Script
      id="jsonld-breadcrumb-custom-classes"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    
  );
}
