module.exports = {
  siteUrl: process.env.DOMAIN_APP || 'https://du-sainbolt.web.app',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  sourceDir: 'build',
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/secret'],
      },
    ],
  },
};
