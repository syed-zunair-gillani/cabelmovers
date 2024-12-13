const fs = require('fs');

const SITE_URI = 'https://www.cablemovers.net';

async function fetchData(offset) {
  const response = await fetch(`https://cblproject.cablemovers.net/wp-json/custom/v1/states-cities?posts_per_page=9000&offset=${offset}`);
  const data = await response.json();
  return data;
}

function getCurrentDateInISO8601Format() {
  const now = new Date();
  const year = now.getUTCFullYear();
  const month = String(now.getUTCMonth() + 1).padStart(2, '0');
  const day = String(now.getUTCDate()).padStart(2, '0');
  const hours = String(now.getUTCHours()).padStart(2, '0');
  const minutes = String(now.getUTCMinutes()).padStart(2, '0');
  const seconds = String(now.getUTCSeconds()).padStart(2, '0');
  const iso8601Date = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}+00:00`;
  return iso8601Date;
}

const currentDateInISO8601Format = getCurrentDateInISO8601Format();

async function generateSitemap(offset, fileName, path) {
  const data = await fetchData(offset);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${data?.map(
      (item) => `
        <url>
          <loc>${SITE_URI}/local-${path}-by-zip/zip-${item}</loc>
          <lastmod>${currentDateInISO8601Format}+00:00</lastmod>
          <priority>1.00</priority>
        </url>
      `
    ).join('')}
    </urlset>
  `;
  fs.writeFileSync(`public/zipcode_${path}_${fileName}-sitemap.xml`, sitemap);
}

async function generateSitemaps() {
  // Define the offsets and file names
  const offsets = [0, 9000, 18000, 27000, 36000];
  const fileNames = [1, 2, 3, 4, 5];

  // Generate sitemaps for each combination of offset, fileName, and path
  for (const path of ['internet', 'tv', 'internet-tv']) {
    for (let i = 0; i < offsets.length; i++) {
      await generateSitemap(offsets[i], fileNames[i], path);
      await delay(700); // Add a delay of 1.5 seconds
    }
  }
}

// Function to add a delay
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Call the function to generate sitemaps with delays
generateSitemaps();
