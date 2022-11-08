const CACHE_KEY = 'appShell-v1';

const assetsToCache = ["offline.html"];

async function cacheStaticAssets(){

    const cache = await caches.open(CACHE_KEY);
    return cache.addAll(assetsToCache);

}

self.addEventListener('install', event => {

    console.log('[Service Worker] Installing service worker...');
    event.waitUntil(cacheStaticAssets());
    self.skipWaiting();
});

self.addEventListener('activate', event => {

    console.log('[Service Worker] Activating service worker...');
    return self.clients.claim();

})


self.addEventListener("fetch", (event) => {


    console.log('[Service Worker] Fetch event worker');
    event.respondWith(fetch(event.request.url));


})