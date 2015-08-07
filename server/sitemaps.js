sitemaps.add('/sitemap.xml', function() {
  // 'page' is reqired
  // 'lastmod', 'changefreq', 'priority' are optional.
  return [
    { page: '/front_end_jobs', lastmod: new Date().getTime(), changefreq: 'daily' },
    { page: '/back_end_jobs', lastmod: new Date().getTime(), changefreq: 'daily' },
    { page: '/fullstack_jobs', lastmod: new Date().getTime(), changefreq: 'monthly', priority: 0.8 }
  ];
});
