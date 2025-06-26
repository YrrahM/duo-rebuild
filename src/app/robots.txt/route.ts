// src/app/robots.txt/route.ts

export async function GET() {
  const content = `
User-agent: *
Allow: /

Sitemap: https://businessenglish.vip/sitemap.xml
`;

  return new Response(content.trim(), {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
