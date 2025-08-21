import { MetadataRoute } from 'next';

const URL = 'https://wikiscience.in';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '', 
    '/about', 
    '/competition', 
    '/resources', 
    '/sponsors', 
    '/organizers', 
    '/campus-ambassadors', 
    '/organizers/call', 
    '/jury', 
    '/support-us', 
    '/contact',
    '/affiliates'
];

  return routes.map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date(),
  }));
}
