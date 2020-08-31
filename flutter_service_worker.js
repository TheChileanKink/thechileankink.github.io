'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icon.png": "ab89ad18c16356c3d5e16de877abe6b6",
"index.html": "ba56c1fd56713e58e029cc081d097491",
"/": "ba56c1fd56713e58e029cc081d097491",
"main.dart.js": "7f71622975b8026f7f4fd13450d4bafc",
"favicon_io/favicon-16x16.png": "6be63dec536a1595592d6fca2c7e9477",
"favicon_io/favicon.ico": "b2973d83b90ee9390364337460ac2bc5",
"favicon_io/android-chrome-192x192.png": "200da1fb6f117afae832c5a9f2b2d900",
"favicon_io/apple-touch-icon.png": "5945f239393a7769aa07c7ecf919b7ed",
"favicon_io/android-chrome-512x512.png": "e979c7eaa0183de6ba24f5ad792a7fe7",
"favicon_io/site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"favicon_io/favicon-32x32.png": "247940d25067ff8ba7a6b38319a841a6",
"assets/AssetManifest.json": "2b776388768d0da7deaa8e76f828b847",
"assets/NOTICES": "6942da62ad1747c051f2c97c8492c3af",
"assets/FontManifest.json": "fe78b2efd8c89843e12352c526b9fc94",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "62fa0ce72ddf9a22ac36d88cf9b28bfb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/SF-Pro-Display-Regular.otf": "5810cdf5bc7db8d0090a6c46890ee33b",
"assets/fonts/SF-Pro-Rounded-Regular.otf": "f1bea2faef1e040dac7c8f97d25278e4",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/SF-Pro-Rounded-Thin.otf": "10048d64107f85ae036222578e13aae7",
"assets/assets/Screenshots/Clarinich/4.png": "c884f31be8daf9ac5c08025717f4913e",
"assets/assets/Screenshots/Clarinich/2.png": "a93e5384271e88ee81e2c2aafad3d0e3",
"assets/assets/Screenshots/Clarinich/3.png": "090b09767f1ca70af79bf160d9cd6fa7",
"assets/assets/Screenshots/Clarinich/1.png": "a2e63d9530a09b9d1281a572725961ea",
"assets/assets/Screenshots/Reformados/2.jpg": "b8668d2b3d36906c552b3ef9216b8681",
"assets/assets/Screenshots/Reformados/3.jpg": "5bb32fc968b0dd9f5216f59fbf820d2c",
"assets/assets/Screenshots/Reformados/1.jpg": "fd7fb8f476a22c72d641eb9207de589a",
"assets/assets/Screenshots/Tranqui/2.jpg": "05b1c98aecc3a8f404fcfcddeca94ef4",
"assets/assets/Screenshots/Tranqui/3.jpg": "f1dbc0f3b37b0fd67afe00d58d60a841",
"assets/assets/Screenshots/Tranqui/1.jpg": "d48259bac6655f3f1c80cdbb2115fefe",
"assets/assets/images/fullBenanie.jpeg": "55914e7ce36b44844ef7206462918467",
"assets/assets/images/brepic.png": "3092a599ab66768f7c216bbe88c03aef",
"assets/assets/images/brepic.jpg": "fc643b35b630dfa82edf3747ca2ae054",
"assets/assets/images/icon.png": "6293e3dfc8c3433da298b3b28de2ec6b",
"assets/assets/images/redShirt.png": "2c245bef253b8751f0214fe922e9515f",
"assets/assets/images/dwayne.png": "acf74bbe0880ede25bebbc20c0d3aa54",
"assets/assets/images/smallBrePic.png": "a484e502a56e376153a9d71245e6b865",
"assets/assets/images/beanie.jpeg": "d87b06c91f3e231fac32641d207f2d0c",
"assets/assets/images/beanie.png": "48fc9b28c1500e923f29b48db2c76df9",
"assets/assets/images/snow.JPG": "4e42a389a6e1cf180cfc637906f01348",
"assets/assets/images/snow.png": "52595af1c53d11e21e5b537fef1b8f42",
"assets/assets/images/brepicsmall.jpg": "85d3ffa5d52e26caa620ccaf9aa51d84",
"assets/assets/images/myself.jpg": "a1c127a9096d08dcd9448f2dea0fb258",
"assets/assets/images/snow.jpeg": "f69b7bbbcc643d982802432b9e173e86",
"assets/assets/images/myself.png": "7e67dc27add644a2a116711cacff6773",
"assets/assets/appLogos/clarinich.png": "0185e71c56300762f3c30489129e7646",
"assets/assets/appLogos/reformados.png": "ca449299087f08a64a40a3620925f8c8",
"assets/assets/appLogos/tranqui.png": "3a49dd5edcce153f432f9b4386244e40",
"assets/assets/appLogos/brucards.png": "d924e033d00e73e0dfbf0f4f2d34ee61",
"assets/assets/icons/flask.png": "f05cef18f391ccbaf5fd15d9a72d3c19",
"assets/assets/icons/unity.png": "a277a850105ffcec7fbd90ee5dc854d5",
"assets/assets/icons/flutter.png": "9e85c8abbd5d039482ad39d1d3d603a9",
"assets/assets/icons/github.png": "3e54ed15b9cd877c5223f5ecf64579df",
"assets/assets/icons/wordpress.png": "b81cdb0e2b04fcc324cefcd9aeb3b52d",
"assets/assets/icons/nodejs.png": "73ba725cf930f8ba56e1996060c33cd2"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
