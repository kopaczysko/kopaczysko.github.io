self.addEventListener('install', function(event) {
  console.log('[Service Worker] Install');
});

self.addEventListener('activate', function(event)) {
  console.log('[Service Worker] Activate');
});

