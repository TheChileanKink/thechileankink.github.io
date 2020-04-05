'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icon.png": "ab89ad18c16356c3d5e16de877abe6b6",
"index.html": "ba56c1fd56713e58e029cc081d097491",
"Makefile": "94ac4280fb418e31b5946c20bd2efa80",
"main.dart.js": "491cec0228e2aba3f12a8398541caa4d",
"favicon_io/favicon-16x16.png": "6be63dec536a1595592d6fca2c7e9477",
"favicon_io/favicon.ico": "b2973d83b90ee9390364337460ac2bc5",
"favicon_io/android-chrome-192x192.png": "200da1fb6f117afae832c5a9f2b2d900",
"favicon_io/apple-touch-icon.png": "5945f239393a7769aa07c7ecf919b7ed",
"favicon_io/android-chrome-512x512.png": "e979c7eaa0183de6ba24f5ad792a7fe7",
"favicon_io/site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"favicon_io/favicon-32x32.png": "247940d25067ff8ba7a6b38319a841a6",
"assets/LICENSE": "554b3d32a7b4566be28ed6ae21d54e63",
"assets/AssetManifest.json": "9535e285c6271f9b33ba42b0545b5f0a",
"assets/FontManifest.json": "ffd625f1a5f6db294ae2ac54e10c7011",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "2abd86f90b3fd9d18d950195282cd8d5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/SF-Pro-Display-Regular.otf": "5810cdf5bc7db8d0090a6c46890ee33b",
"assets/fonts/SF-Pro-Rounded-Regular.otf": "f1bea2faef1e040dac7c8f97d25278e4",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
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
"assets/assets/icons/flask.png": "f05cef18f391ccbaf5fd15d9a72d3c19",
"assets/assets/icons/unity.png": "a277a850105ffcec7fbd90ee5dc854d5",
"assets/assets/icons/flutter.png": "9e85c8abbd5d039482ad39d1d3d603a9",
"assets/assets/icons/github.png": "3e54ed15b9cd877c5223f5ecf64579df",
"assets/assets/icons/nodejs.png": "73ba725cf930f8ba56e1996060c33cd2"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
