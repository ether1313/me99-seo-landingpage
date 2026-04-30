import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const SITE_URL = "https://www.me99.org";
const DIST_DIR = path.resolve("out");

const routes = ["/"];

function xmlEscape(s) {
  return s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function buildSitemap() {
  const lastmod = new Date().toISOString();
  const urls = routes
    .map((route) => {
      const loc = `${SITE_URL}${route}`;
      return `  <url>
    <loc>${xmlEscape(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function buildRobots() {
  return `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
}

await mkdir(DIST_DIR, { recursive: true });
await writeFile(path.join(DIST_DIR, "sitemap.xml"), buildSitemap(), "utf8");
await writeFile(path.join(DIST_DIR, "robots.txt"), buildRobots(), "utf8");

