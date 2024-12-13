/** @type {import('next').NextConfig} */

module.exports = {
  async redirects() {
    return [
      {
        source: '/order-internet-and-tv-service',
        destination: '/',
        permanent: true,
      },
      { source: '/feed', destination: '/', permanent: true },
      { source: '/feed/', destination: '/', permanent: true },
     
    ];
  },
  reactStrictMode: true,
  images: {
    domains: ['cblproject.cablemovers.net', 'localhost', "topproviders.mufaqar.com"],
  },
};
