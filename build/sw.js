importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js");

//eslint-disable-next-line no-undef
workbox.loadModule("workbox-background-sync");

//eslint-disable-next-line no-undef, no-restricted-globals
workbox.precaching.precacheAndRoute([{"revision":"34e626428ada0dd51b0466053fcebeb5","url":"asset-manifest.json"},{"revision":"c92b85a5b907c70211f4ec25e29a8c4a","url":"favicon.ico"},{"revision":"64e77079019e5b4795b8d43ffc4de1c5","url":"Icon_logo.png"},{"revision":"d7847bff365fe158fca78b26bcce18b6","url":"icon-128x128.png"},{"revision":"409a9eff2b9a6a535d850bb1d2001a41","url":"icon-144x144.png"},{"revision":"2ed22eeb643ac35d9d093090f311a8e3","url":"icon-192x192.png"},{"revision":"cc14adb287301bc1297c46bef2f55751","url":"icon-48x48.png"},{"revision":"d3e3400c6b20a6e4307f065cd8e5f93a","url":"icon-512x512.png"},{"revision":"ea77f52a26a351102a8e4afb478182b6","url":"icon-72x72.png"},{"revision":"f9138bd82906f90404ae679471621b30","url":"icon-96x96.png"},{"revision":"0889cce9506b72f8e86387ec23650fb5","url":"index.html"},{"revision":"33dbdd0177549353eeeb785d02c294af","url":"logo192.png"},{"revision":"917515db74ea8d1aee6a246cfbcc0b45","url":"logo512.png"},{"revision":"81f0c223ca45a1078742c909eb3b5bb6","url":"manifest.json"},{"revision":"fa1ded1ed7c11438a9b0385b1e112850","url":"robots.txt"},{"revision":"62bbd8404e3456cdbfdbcc6451bdca15","url":"static/css/main.16ce6a78.css"},{"revision":"39ea77fc613a0d343f03105662485446","url":"static/js/787.5e632d68.chunk.js"},{"revision":"fc0feea9759f6bdee90cf4874a2f2ece","url":"static/js/main.521970c0.js"},{"revision":"518fe4e1d1f218cb8b5d6d44e17ad539","url":"static/js/main.521970c0.js.LICENSE.txt"},{"revision":"97daec5d0d0397851c36e39fbf25bbfe","url":"static/media/bano.92613a4fb38336fcb8af.png"},{"revision":"525dac29af965d28ffcbc76f871e6dab","url":"static/media/flete.6c8d024f57d7c14bb49c.png"},{"revision":"96a90cf4368e630513286c6f2b954b3d","url":"static/media/gota.d4393c8ccb9e0c5a2c26.png"},{"revision":"b9e37f59ea3d46cb2eaec4c63d1a6f73","url":"static/media/home.ccf4b5b9dfc01eb683f1.png"},{"revision":"8e1f991fe2fcdfd43244264012639c94","url":"static/media/La Cabaña logo completo.aef9a1eb908307e24bc4.png"},{"revision":"8e1f991fe2fcdfd43244264012639c94","url":"static/media/La Cabaña.aef9a1eb908307e24bc4.png"},{"revision":"0732d21b0fd381057807d30720d449ea","url":"static/media/nosotros.68d5d2f7aa6b931ae147.png"},{"revision":"525f3b4b0205230ba88e5ba064169636","url":"static/media/resenas.3ad5e48a70c413ada01e.png"},{"revision":"55ce6f976aa135bffc0e9c832572f949","url":"static/media/servicios.b03a1148340a17605df1.png"}]);

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