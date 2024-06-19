const staticCacheName = "calcmoy-V1.0.3";
const assets = [
  "./",
  "./index.php",
  "./home/styles.css",

  "./js/init.js",
  "./errors/offline.html",

  "./science/",
  "./science/index.html",
  "./science/script.js",
  "./eco/",
  "./eco/index.html",
  "./eco/script.js",
  "./info/",
  "./info/index.html",
  "./info/script.js",
  "./tech/",
  "./tech/index.html",
  "./tech/script.js",

  "./styles.css",

  "./images/logo.svg",
];

self.addEventListener("install", (e) => {
  // caching assets
  e.waitUntil(
    caches
      .open(staticCacheName)
      .then((cache) => {
        assets.map((asset) => {
          cache.add(asset);
        });
        cache.addAll("./icons/");
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachesRes) => {
      return cachesRes || fetch(event.request);
    })
  );
});

self.addEventListener("activate", async (e) => {
  console.log("Service Worker is active.");

  // deleting old unwanted cached assets
  e.waitUntil(
    caches.keys().then((cachesNames) => {
      return Promise.all(
        cachesNames.map((cache) => {
          if (cache !== staticCacheName) {
            caches.delete(cache);
          }
        })
      );
    })
  );
});
