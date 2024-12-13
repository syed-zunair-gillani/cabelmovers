const fs = require('fs');


const SITE_URI = 'https://www.cablemovers.net';

async function fetchStateWiseCity() {
  const responceStateWiseCity = await fetch('https://cblproject.cablemovers.net/wp-json/custom/v1/states-cities?posts_per_page=10000&offset=40000') 
  const citiesData = await responceStateWiseCity.json();
  const resultUrls = [];
  // Iterate through the keys and their associated arrays
  for (const key in citiesData) {
    const subArray = citiesData[key];
    for (const subValue of subArray) {
      const url = SITE_URI + '/landline/' + key + '/' + subValue;
      resultUrls.push(url);
    }
  }
  return resultUrls
}



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
  const stateWiseCity = await fetchStateWiseCity()

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${stateWiseCity.map(
        (item) => `
          <url>
            <loc>${item}</loc>
            <lastmod>${currentDateInISO8601Format}</lastmod>
            <priority>1.00</priority>
          </url>
        `
      ).join('')} 
    </urlset>
  `;

  fs.writeFileSync('public/cities_landline_5-sitemap.xml', sitemap);
}

generateSitemap();
