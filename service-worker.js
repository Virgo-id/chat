const CACHE_NAME = 'ochat-cache-v1';
const urlsToCache = [
  '/chat/',
  '/chat/index.html',
  '/chat/manifest.json',
  // Tambahkan file lain yang dipakai aplikasi kamu, misal:
  // '/chat/style.css',
  // '/chat/main.js',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
