import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import fs from 'fs';
import path from 'path';

// Define your website routes
const routes = [
  { url: '/', changefreq: 'daily', priority: 1 },
  { url: '/work', changefreq: 'weekly', priority: 0.8 },
  { url: '/about', changefreq: 'monthly', priority: 0.7 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
];

async function generateSitemap() {
  try {
    const stream = new SitemapStream({ hostname: 'https://yourdomain.com' });
    
    // Create a readable stream and pipe it to the sitemap stream
    const links = routes.map((route) => ({
      url: route.url,
      changefreq: route.changefreq,
      priority: route.priority,
    }));

    const data = await streamToPromise(Readable.from(links).pipe(stream));
    
    fs.writeFileSync(
      path.join(process.cwd(), 'public', 'sitemap.xml'),
      data.toString()
    );

    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

generateSitemap();
