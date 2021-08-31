const siteUrl = process.env.DOMAIN_APP || 'https://du-sainbolt.web.app';

module.exports = {
  siteUrl,
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
    additionalSitemaps: [`${siteUrl}/sitemap.xml`, `${siteUrl}/tag/sitemap.xml`],
  },
};
