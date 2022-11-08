if('serviceWorker' in navigator){ //nesse if o serviceworker tem q ser minusculo

    const onsuccess = () => console.log('[Service Worker] Success!!');
    const onerror = () => console.log('[Service Worker] Error!!');
    onsuccess();


}