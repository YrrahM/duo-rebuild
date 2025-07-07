'use client';

import React from 'react';
import Script from 'next/script';

export default function JsonLdBreadcrumbTestimonias() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://businessenglish.vip"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Características",
        item: "https://businessenglish.vip/features"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Testimonias",
        item: "https://businessenglish.vip/features/testimonias"
      }
    ]
  };

  return (
    <Script
      id="jsonld-breadcrumb-testimonias"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
