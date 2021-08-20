const generateSitemap = require('./generate-sitemap');
const { i18n } = require('./next-i18next.config');

module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret',
    // Pass through env variables
    APOLLO_SERVER_URL: process.env.APOLLO_SERVER_URL,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    CLIENT_DOMAIN_APP: process.env.DOMAIN_APP,
    CLIENT_GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    CLIENT_APOLLO_SERVER_URL: process.env.APOLLO_SERVER_URL,
    CLIENT_APP_KEY: process.env.APP_KEY,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      generateSitemap();
    }
    return config;
  },
  //   trailingSlash: true,
  images: {
    loader: 'imgix',
    path: '',
  },
  i18n,
};
