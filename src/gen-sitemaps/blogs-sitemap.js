const fs = require('fs');

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



async function generateSitemap() {
  const { allProviders, posts } = await fetchData();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${posts?.nodes?.map(
      (item) => `
        <url>
          <loc>${SITE_URI}/blog/${item.slug}</loc>
          <lastmod>${item.date}+00:00</lastmod>
          <priority>1.00</priority>
        </url>
      `
    ).join('')}
    </urlset>
  `;

  fs.writeFileSync('public/blog-sitemap.xml', sitemap);
}

generateSitemap();
