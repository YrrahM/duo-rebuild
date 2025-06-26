'use client';

import Script from 'next/script';

export default function JsonLdBreadcrumbBusinessEnglish() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://businessenglish.vip"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Características",
        "item": "https://businessenglish.vip/features"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Inglés de Negocios",
        "item": "https://businessenglish.vip/features/business-english"
      }
    ]
  };

  return (
    <Script
      id="jsonld-breadcrumb-business-english"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
