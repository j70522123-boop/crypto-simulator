const CACHE_NAME = 'crypto-simulator-v3';
const urlsToCache = [
  '/crypto-simulator/',
  '/crypto-simulator/index.html',
  '/crypto-simulator/manifest.json',
  '/crypto-simulator/favicon.png',
  '/crypto-simulator/icons/Icon-192.png',
  '/crypto-simulator/icons/Icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
