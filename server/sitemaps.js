

sitemaps.add('/sitemap.xml', function() {
  // 'page' is reqired
  // 'lastmod', 'changefreq', 'priority' are optional.
  return [
    { page: '/front_end_jobs', lastmod: new Date().getTime(), changefreq: 'daily', priority: 0.8 },
    { page: '/back_end_jobs', lastmod: new Date().getTime(), changefreq: 'daily', priority: 0.8 },
    { page: '/fullstack_jobs', lastmod: new Date().getTime(), changefreq: 'daily', priority: 0.8 },
    { page: '/miscellaneous_jobs', lastmod: new Date().getTime(), changefreq: 'daily', priority: 0.8},
    { page: '/design_jobs', lastmod: new Date().getTime(), changefreq: 'daily', priority: 0.8},
    { page: '/sales_marketing_jobs', lastmod: new Date().getTime(), changefreq: 'daily', priority: 0.8},
    { page: '/help_desk_support_jobs', lastmod: new Date().getTime(), changefreq: 'daily', priority: 0.8},
    { page: '/system_admin_jobs', lastmod: new Date().getTime(), changefreq: 'daily', priority: 0.8}
];
});
