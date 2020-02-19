self.addEventListener('install', (event) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activate');
});

self.addEventListener('fetch', (event) => {
	console.log('[Service Worker] Fetch v2');
	event.respondWith(fetch(event.request).then( (resp) => { 
		if(!resp.ok)
		{
			return new Response('<p>Brak internetów ;( Ale ServiceWorker sobie działa.</p>', {
                          headers: { 'Content-Type': 'text/html' }
                        });
		}
		return resp; 
	} ).catch(() =>  return new Response('<p>Brak internetów ;( Ale ServiceWorker sobie działa.</p>', {
                          headers: { 'Content-Type': 'text/html' }
                        }););
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
});
