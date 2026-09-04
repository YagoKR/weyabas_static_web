import type { APIRoute } from 'astro';
import { client } from '../lib/sanity'; // Ajusta la ruta a tu cliente de Sanity

export const GET: APIRoute = async () => {
  // Pedimos los slugs a Sanity en tiempo real
  const posts = await client.fetch(`
    *[_type == "posts" && defined(slug.current) && !(_id in path("drafts.**"))]{
      "slug": slug.current,
      "_updatedAt": _updatedAt
    }
  `);

  const baseUrl = 'https://weyaluseries.net';

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <priority>1.0</priority>
  </url>
  ${posts
    .map(
      (post: any) => `
    <url>
      <loc>${baseUrl}/${post.slug}</loc>
      <lastmod>${new Date(post._updatedAt).toISOString()}</lastmod>
      <priority>0.8</priority>
    </url>`
    )
    .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600', // Se refresca cada hora
    },
  });
};