module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret',
     // Pass through env variables
    ENV_HOST_NAME: process.env.ENV_HOST_NAME,
    ENV_PORT: process.env.ENV_PORT,
    DOMAIN_IMAGE_AMAZON: process.env.DOMAIN_IMAGE_AMAZON
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
  },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },
  images: {
    domains: [process.env.DOMAIN_IMAGE_AMAZON],
  },
};
