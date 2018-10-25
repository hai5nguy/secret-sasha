/* eslint-disable */

this.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('secret-sasha').then(function(cache) {
        return cache.addAll([
          'index.html',
          'bundle.js'
        ]);
      })
    );
  });
  
  // this.addEventListener('fetch', function(event) {
  //   event.respondWith(
  //     caches.match(event.request).then(function(response) {
  //       return response || fetch(event.request);
  //     })
  //   );
  // });
  
  
//   this.addEventListener('activate', function(e) {
//     console.log('***********************************');
//     console.log('secret-sasha service worker activated');
//   });
  

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(function (registration) {
            console.log('SW registration successful, scope is:', registration.scope);
        })
        .catch(function (error) {
            console.error('SW registration failed, error:', error);
        });
}
