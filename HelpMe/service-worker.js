// Simple cache for offline
self.addEventListener('install', e => {
    e.waitUntil(
      caches.open('helpme-cache').then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          '/style.css',
          '/app.js',
          '/firebase.js'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', e => {
    e.respondWith(
      caches.match(e.request).then(response => {
        return response || fetch(e.request);
      })
    );
  });
  