// Simple cache for offline
const CACHE_NAME = 'helpme-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/14658292_2011.i211.029_loudspeaker megaphone lightnings realistic (3).jpg',
  '/3325437_458738-PFWZHQ-65.jpg'
  
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
