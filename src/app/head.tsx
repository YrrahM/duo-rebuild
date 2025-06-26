export default function Head() {
  return (
    <>
      <title>Business English with a Pro</title>
      <meta name="description" content="One-on-one and group classes tailored to your professional field. Book your free trial today." />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="Business English with a Pro" />
      <meta property="og:description" content="Fluency focused. Professionally delivered. Online English that works." />
      <meta property="og:url" content="https://www.businessenglish.vip" />
      <meta property="og:site_name" content="Business English with a Pro" />
      <meta property="og:image" content="/og-image.jpg" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />

      {/* Icons & Manifest */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
      <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* PWA Metadata */}
      <meta name="theme-color" content="#ffffff" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="application-name" content="Business English" />
    </>
  );
}
