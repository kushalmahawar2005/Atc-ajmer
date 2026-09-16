/**
 * ATC service worker.
 *
 * Strategy by request type:
 *  - navigations: network first, falling back to the cached page, then /offline
 *  - static assets (images, fonts, CSS, JS): stale-while-revalidate
 *  - admin: always the network; on failure a navigation gets /offline, but
 *    no admin response is ever written to a cache
 *  - everything else (API): straight to the network, never cached
 */
const VERSION = "atc-v3";
const PAGES = `${VERSION}-pages`;
const ASSETS = `${VERSION}-assets`;
const OFFLINE_URL = "/offline";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(PAGES).then((cache) => cache.addAll([OFFLINE_URL])).then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => !key.startsWith(VERSION)).map((key) => caches.delete(key))),
      )
      .then(() => self.clients.claim()),
  );
});

function isAsset(request) {
  return ["image", "font", "style", "script"].includes(request.destination);
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Admin pages and API responses are per-user and live, so they are never
  // cached. Admin navigations still fall back to the offline page, otherwise
  // the installed app shows a browser error screen when the network drops.
  if (url.pathname.startsWith("/admin")) {
    if (request.mode === "navigate") {
      event.respondWith(fetch(request).catch(() => caches.match(OFFLINE_URL)));
    }
    return;
  }
  if (url.pathname.startsWith("/api")) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(PAGES).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(async () => (await caches.match(request)) ?? caches.match(OFFLINE_URL)),
    );
    return;
  }

  if (isAsset(request)) {
    event.respondWith(
      caches.match(request).then((cached) => {
        const network = fetch(request)
          .then((response) => {
            const copy = response.clone();
            caches.open(ASSETS).then((cache) => cache.put(request, copy));
            return response;
          })
          .catch(() => cached);
        return cached ?? network;
      }),
    );
  }
});
