import type { APIRoute } from 'astro';
import { client } from '../lib/sanity'; // Ajusta la ruta a tu cliente de Sanity

export const GET: APIRoute = async () => {
  const baseUrl = 'https://weyaluseries.net';

  // 1. Lee automáticamente todos los archivos Markdown dentro de src/pages/legal/
  const legalFiles = import.meta.glob('./legal/*.md');
  const legalPages = Object.keys(legalFiles).map((filePath) => {
    // Convierte './legal/privacy-policy.md' -> '/legal/privacy-policy'
    return filePath.replace('./', '/').replace('.md', '');
  });

  // 2. Consulta de entradas dinámicas desde Sanity
  const posts = await client.fetch(`
    *[_type == "posts" && defined(slug.current) && !(_id in path("drafts.**"))]{
      "slug": slug.current,
      "_updatedAt": _updatedAt
    }
  `);

  // 3. Genera XML para las páginas legales automáticas
  const legalUrlsXml = legalPages
    .map(
      (path) => `
  <url>
    <loc>${baseUrl}${path}</loc>
    <priority>0.3</priority>
  </url>`
    )
    .join('');

  // 4. Genera XML para los posts de Sanity
  const postUrlsXml = posts
    .map(
      (post: any) => `
  <url>
    <loc>${baseUrl}/${post.slug}</loc>
    <lastmod>${new Date(post._updatedAt).toISOString()}</lastmod>
    <priority>0.8</priority>
  </url>`
    )
    .join('');

  // 5. Estructura XML completa
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <priority>1.0</priority>
  </url>
  ${legalUrlsXml}
  ${postUrlsXml}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};