// import { configureSitemap } from '@sergeymyssak/nextjs-sitemap'; // for typescript
const { configureSitemap } = require('@sergeymyssak/nextjs-sitemap');

const Sitemap = configureSitemap({
    baseUrl: 'https://www.qualifund.co.nz',
    exclude: ['/admin/*'],
    excludeIndex: true,
    isTrailingSlashRequired: true,
    targetDirectory: __dirname + '/public',
    pagesDirectory: __dirname + '/pages',
});
Sitemap.generateSitemap();