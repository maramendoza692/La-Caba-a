importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js");

//eslint-disable-next-line no-undef
workbox.loadModule("workbox-background-sync");

//eslint-disable-next-line no-undef, no-restricted-globals
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

const { registerRoute } = workbox.routing;

const { NetworkFirst, NetworkOnly } = workbox.strategies;

const { BackgroundSyncPlugin } = workbox.backgroundSync;

const bgSyncPlugin = new BackgroundSyncPlugin("lacabana-offline", {
    maxRetentionTime: 24 * 60,
});

registerRoute(new RegExp("https://lacabana-server.onrender.com/api"), new NetworkFirst(), "GET");

registerRoute(
    new RegExp("https://lacabana-server.onrender.com/api"),
    new NetworkOnly({ plugins: [bgSyncPlugin] }),
    "POST"
);

registerRoute(
    new RegExp("https://lacabana-server.onrender.com/api"),
    new NetworkOnly({ plugins: [bgSyncPlugin] }),
    "PUT"
);

registerRoute(
    new RegExp("https://lacabana-server.onrender.com/api"),
    new NetworkOnly({ plugins: [bgSyncPlugin] }),
    "DELETE"
);