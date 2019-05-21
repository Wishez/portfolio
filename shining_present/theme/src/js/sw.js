// 1. Open cache
// 2. Cache files
// 3. Confirm whether all the requored assets are cached or not

var CACHE_NAME = 'shining-present-cache-v1';
var staticCssPath = '/static/portfolio/css/';
var staticJsPath = '/static/portfolio/js/';

var urlsToCache = [
  staticCssPath + 'app.css',
  staticJsPath + 'app.js'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
      .catch(function(err) {
        console.log(err, 1);
      })
  );	
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request)
      .then(function(resp) {
        if (resp) 
          return resp;

        var fetchRequest = e.request.clone();

        return fetch(fetchRequest)
          .then(function(resp) {
            if(!resp || resp.status !== 200 || resp.type !== 'basic') {
			              return resp;
			            }
			            var responseToCache = resp.clone();
			            
            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(e.request, responseToCache);
              });

            return resp;
          })
          .catch(function(err) {
            console.log(err, 3);
          });


      })
      .catch(function(err) {
        console.log(err, 2);
      })
  );
});
