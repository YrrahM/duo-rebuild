'use client';

import React from 'react';
import Script from 'next/script';

export default function JsonLdBreadcrumbSobreMi() {
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
        name: "Sobre mí",
        item: "https://businessenglish.vip/features/sobre-mi"
      }
    ]
  };

  return (
    <Script
      id="jsonld-breadcrumb-sobre-mi"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
