/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://signoz.io',
  generateRobotsTxt: true, // (optional)
}