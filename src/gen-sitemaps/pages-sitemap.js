const fs = require('fs');

const SITE_URI = 'https://www.cablemovers.net';

function getCurrentDateInISO8601Format() {
  const now = new Date();
  const year = now.getUTCFullYear();
  const month = String(now.getUTCMonth() + 1).padStart(2, '0'); // Month is zero-based, so add 1 and pad to two digits
  const day = String(now.getUTCDate()).padStart(2, '0');
  const hours = String(now.getUTCHours()).padStart(2, '0');
  const minutes = String(now.getUTCMinutes()).padStart(2, '0');
  const seconds = String(now.getUTCSeconds()).padStart(2, '0');
  const iso8601Date = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}+00:00`;
  return iso8601Date;
}

const currentDateInISO8601Format = getCurrentDateInISO8601Format();

async function generateSitemap() {

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${SITE_URI}</loc>
        <lastmod>${currentDateInISO8601Format}</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>${SITE_URI}/contact-us</loc>
        <lastmod>${currentDateInISO8601Format}</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>${SITE_URI}/about-us</loc>
        <lastmod>${currentDateInISO8601Format}</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>${SITE_URI}/privacy-policy</loc>
        <lastmod>${currentDateInISO8601Format}</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>${SITE_URI}/do-not-sell-my-information</loc>
        <lastmod>${currentDateInISO8601Format}</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>${SITE_URI}/terms-and-conditions</loc>
        <lastmod>${currentDateInISO8601Format}</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
      <loc>${SITE_URI}/blog</loc>
      <lastmod>${currentDateInISO8601Format}</lastmod>
      <priority>1.00</priority>
    </url>
    <url>
      <loc>${SITE_URI}/providers</loc>
      <lastmod>${currentDateInISO8601Format}</lastmod>
      <priority>1.00</priority>
    </url>
    </urlset>
  `;

  fs.writeFileSync('public/pages-sitemap.xml', sitemap);
}

generateSitemap();
