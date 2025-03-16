const CACHE_NAME = '5s9-pwa-cache-v1';
const PRECACHE_URLS = [
    '/5s9-pwa/',
    '/5s9-pwa/pages/index.html',
    '/5s9-pwa/pages/features.html',
    '/5s9-pwa/pages/about.html',
    '/5s9-pwa/pages/blog.html',
    '/5s9-pwa/pages/portfolio.html',
    '/5s9-pwa/pages/settings.html',
    '/5s9-pwa/pages/offline.html',
    '/5s9-pwa/pages/404.html',
    '/5s9-pwa/pages/500.html',
    '/5s9-pwa/css/styles.css',
    '/5s9-pwa/js/main.js',
    '/5s9-pwa/manifest.json',
    '/5s9-pwa/icons/icon-192x192.png',
    '/5s9-pwa/icons/icon-512x512.png'
];

// Install event: Precaches app shell and essential assets
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(PRECACHE_URLS);
        })
    );
});

// Activate event: Cleans up old caches
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Fetch event: Implements cache strategies
self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    if (PRECACHE_URLS.includes(url.pathname)) {
        // Cache First Strategy for pre-cached assets
        event.respondWith(cacheFirst(event.request));
    } else if (url.pathname.startsWith('/api/')) {
        // Network First Strategy for API requests
        event.respondWith(networkFirst(event.request));
    } else {
        // Stale-While-Revalidate Strategy for other assets
        event.respondWith(staleWhileRevalidate(event.request));
    }
});

function cacheFirst(request) {
    return caches.match(request).then(cachedResponse => {
        return cachedResponse || fetch(request);
    });
}

function networkFirst(request) {
    return caches.open(CACHE_NAME).then(cache => {
        return fetch(request).then(response => {
            cache.put(request, response.clone());
            return response;
        }).catch(() => {
            return caches.match(request);
        });
    });
}

function staleWhileRevalidate(request) {
    return caches.open(CACHE_NAME).then(cache => {
        return cache.match(request).then(cachedResponse => {
            const fetchPromise = fetch(request).then(networkResponse => {
                cache.put(request, networkResponse.clone());
                return networkResponse;
            });
            return cachedResponse || fetchPromise;
        });
    });
}