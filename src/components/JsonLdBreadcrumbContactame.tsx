'use client';

import React from 'react';
import Script from 'next/script';

export default function JsonLdBreadcrumbContactame() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
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
        name: "Contáctame",
        item: "https://businessenglish.vip/features/contactame"
      }
    ]
  };

  return (
    <Script
      id="jsonld-breadcrumb-contactame"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
