self.addEventListener('install', (event) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activate');
});

// self.addEventListener('fetch', (event) => {
  // event.respondWith(
    // fetch(event.request).then((resp) =>
      // {
        // if(!resp.ok)
        // {
          // return new Response('<p>Hello from your friendly neighbourhood service worker!</p>', {
              // headers: { 'Content-Type': 'text/html' }
            // });
        // } 
      // return resp;
      // }  
      // )
	// );
// });
