export async function GET() {
  const baseUrl = 'https://businessenglish.vip';
  const today = new Date().toISOString();

  const routes = [
    '',
    '/features',
    '/features/business-english',
    '/features/custom-classes',
    '/features/sobre-mi',
    '/features/testimonias',
    '/contacto', // ✅ if correct
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
