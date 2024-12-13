const fs = require('fs');
const citiesData = require('./public/cites.json')

const query = `
  query allProviders {
    allProviders(first: 100000) {
      nodes {
        date
        slug
      }
    }
    posts(first: 100000) {
      nodes {
        date
        slug
      }
    }   
  }
`;


const SITE_URI = 'https://www.cablemovers.net';

var date_time = new Date();

async function fetchData() {
  const response = await fetch('https://cblproject.cablemovers.net/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });
  const { data }  = await response.json();
  return data;
}

async function fetchStateWiseCity() {
  // const responceStateWiseCity = await fetch('./public/cites.json')
  // https://cblproject.cablemovers.net/wp-json/custom/v1/states-cities
  // const dataStateWiseCity = await responceStateWiseCity.json();
  // Initialize an empty array to store the result URLs
  const resultUrls = [];
  // Iterate through the keys and their associated arrays
  for (const key in citiesData) {
    const subArray = citiesData[key];
    for (const subValue of subArray) {
      const url = SITE_URI + '/' + key + '/' + subValue;
      resultUrls.push(url);
    }
  }
  return resultUrls
}
async function fetchStates() {
  const resultUrls = [];
  // Iterate through the keys and their associated arrays
  for (const key in citiesData) {
    const url = SITE_URI + '/' + key;
    resultUrls.push(url);
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
  const { allProviders, posts } = await fetchData();
  const stateWiseCity = await fetchStateWiseCity()
  const allStates = await fetchStates()

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
    ${posts?.nodes?.map(
      (item) => `
        <url>
          <loc>${SITE_URI}/blog/${item.slug}</loc>
          <lastmod>${item.date}+00:00</lastmod>
          <priority>1.00</priority>
        </url>
      `
    ).join('')}
      ${allProviders?.nodes
      .map(
        (item) => `
        <url>
          <loc>${SITE_URI}/providers/${item.slug}</loc>
          <lastmod>${item.date}+00:00</lastmod>
          <priority>0.80</priority>
        </url>
      `
      )
      .join('')}
      ${allStates.map(
        (item) => `
          <url>
            <loc>${item}</loc>
            <lastmod>${currentDateInISO8601Format}</lastmod>
            <priority>1.00</priority>
          </url>
        `
      ).join('')}
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

  fs.writeFileSync('public/sitemap.xml', sitemap);
}

generateSitemap();
