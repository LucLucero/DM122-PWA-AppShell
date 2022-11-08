self.addEventListener('install', event => {

    console.log('[Service Worker] Installing service worker...');
    self.skipWaiting();
    
});