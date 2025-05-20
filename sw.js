const CACHE_NAME = 'mindease-cache-v3';
const urlsToCache = [
  '/',
  '/index.html',
  '/therapy.html',
  '/chat.html',
  '/mood.html',
  '/resources.html',
  '/styles.css',
  '/script.js',
  'https://cdn.jsdelivr.net/npm/chart.js@4.4.3/dist/chart.min.js',
  'https://raw.githubusercontent.com/yourusername/mental-health-app/main/stress-relief.mp3'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});