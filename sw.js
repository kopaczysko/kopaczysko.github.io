self.addEventListener('install', function(event) {
  console.log('[Service Worker] Install');
});

self.addEventListener('activate', function(event)) {
  console.log('[Service Worker] Activate');
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request) ||
        new Response('<p>Hello from your friendly neighbourhood service worker!</p>', {
          headers: { 'Content-Type': 'text/html' }
        });
      
      ));
});
