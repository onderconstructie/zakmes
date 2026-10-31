// Oud adres van MemoMiles: ruim de oude opslag op en verwijder deze service worker.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(k => Promise.all(k.filter(n => n.startsWith('memomities-')).map(n => caches.delete(n))))
    .then(() => self.registration.unregister()));
});
