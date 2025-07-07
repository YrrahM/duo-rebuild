// src/app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'Tu Sitio',
  description: 'Descripción del sitio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* ✅ Structured Data: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "businessenglish.vip",
              "url": "https://businessenglish.vip",
              "logo": "https://businessenglish.vip/logos/sobre-mi.png",
              "sameAs": [
                "https://www.linkedin.com/in/harry-michael-ernest",
                "https://www.facebook.com/profile.php?id=61573586556838",
                "https://www.instagram.com/harrymichaelerne",
                "https://x.com/businessengvip"
              ],
              "description":
                "Clases de inglés personalizadas para profesionales. Aprende con un profesor con experiencia internacional y enfoque personalizado."
            }),
          }}
        />

        {/* ✅ Structured Data: WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://businessenglish.vip",
              "name": "businessenglish.vip",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://businessenglish.vip/?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />

        {/* ✅ Structured Data: LocalBusiness (EducationalOrganization) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "businessenglish.vip",
              "url": "https://businessenglish.vip",
              "logo": "https://businessenglish.vip/logos/sobre-mi.png",
              "description": "Clases de inglés especializadas para profesionales en América Latina. Enfocadas en negocios, medicina, ingeniería y más.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ciudad de México",
                "addressRegion": "CDMX",
                "addressCountry": "MX"
              },
              "areaServed": [
                { "@type": "Country", "name": "México" },
                { "@type": "Country", "name": "Argentina" },
                { "@type": "Country", "name": "Colombia" },
                { "@type": "Country", "name": "Perú" },
                { "@type": "Country", "name": "Chile" }
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+52-1-999-123-4567",
                "contactType": "customer support",
                "availableLanguage": ["Spanish", "English"]
              }
            }),
          }}
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
