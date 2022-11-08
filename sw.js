const CACHE_KEY = 'appShell-v1';

const assetsToCache = ["./offline.html"];

async function cacheStaticAssets(){

    const cache = await caches.open(CACHE_KEY);
    return cache.addAll(assetsToCache);

}


async function networkFirst(request){

    try {

        return await fetch(request);

    } catch (error) {

        
        console.log('Erro',{error});
        const cache = await caches.open(CACHE_KEY);
        return cache.match('offline.html');

    }

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


    console.log('[Service Worker] Fetch event worker', event.request.url);
    event.respondWith(networkFirst(event.request));

})

