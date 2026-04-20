/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://pain.az",
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  alternateRefs: [
    { href: "https://pain.az/az", hreflang: "az" },
    { href: "https://pain.az/ru", hreflang: "ru" },
    { href: "https://pain.az/en", hreflang: "en" },
    { href: "https://pain.az/az", hreflang: "x-default" },
  ],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/api/", "/_next/"] },
    ],
  },
  transform: async (config, path) => {
    // Higher priority for key pages
    const highPriority = ["/az", "/az/xidmetler", "/az/hekimlerimiz", "/az/elaqe"];
    const priority = highPriority.includes(path) ? 1.0 : 0.7;
    return {
      loc: path,
      changefreq: "weekly",
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
