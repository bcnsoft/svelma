!function(){"use strict";const e=["client/chunk.f06b9ea2.js","client/index.5d881703.js","client/collapse.4dabd69b.js","client/progress.2e29e256.js","client/snackbar.232e658a.js","client/message.80b62f0a.js","client/chunk.f3440abb.js","client/chunk.9276dc34.js","client/dialog.9372490b.js","client/notification.98bb97c6.js","client/chunk.6129f740.js","client/chunk.084446e9.js","client/modal.180d66a9.js","client/icon.b585638f.js","client/about.834d5776.js","client/intro.cecb5ac9.js","client/switch.e78a6a65.js","client/toast.555a9c1a.js","client/chunk.0a41e55b.js","client/index.68d3dc04.js","client/button.2cee4081.js","client/index.6a233743.js","client/[slug].0c518167.js","client/input.3f450470.js","client/hero.b442cc9a.js","client/tiles.082d2d46.js","client/table.7f467ebe.js","client/media.5319108e.js","client/tabs.e9ebff87.js","client/field.fe481751.js","client/client.a988cc88.js","client/chunk.833f8687.js"].concat(["service-worker-index.html",".DS_Store","favicon.ico","favicon.png","global.css","great-success.png","logo-192.png","logo-512.png","manifest.json","svelma-logo-ico.png","svelma-logo.png","svelma-logo.svg"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1581353555019").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1581353555019"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const c=new URL(e.request.url);c.protocol.startsWith("http")&&(c.hostname===self.location.hostname&&c.port!==self.location.port||(c.host===self.location.host&&t.has(c.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1581353555019").then(async t=>{try{const c=await fetch(e.request);return t.put(e.request,c.clone()),c}catch(c){const n=await t.match(e.request);if(n)return n;throw c}}))))})}();
