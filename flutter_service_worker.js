'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icon.png": "ab89ad18c16356c3d5e16de877abe6b6",
"index.html": "ba56c1fd56713e58e029cc081d097491",
"Makefile": "94ac4280fb418e31b5946c20bd2efa80",
"main.dart.js": "72ba814e27c2115d913382097b538bdd",
"favicon_io/favicon-16x16.png": "6be63dec536a1595592d6fca2c7e9477",
"favicon_io/favicon.ico": "b2973d83b90ee9390364337460ac2bc5",
"favicon_io/android-chrome-192x192.png": "200da1fb6f117afae832c5a9f2b2d900",
"favicon_io/apple-touch-icon.png": "5945f239393a7769aa07c7ecf919b7ed",
"favicon_io/android-chrome-512x512.png": "e979c7eaa0183de6ba24f5ad792a7fe7",
"favicon_io/site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"favicon_io/favicon-32x32.png": "247940d25067ff8ba7a6b38319a841a6",
".git/config": "d6be57859fc9a60c986664137c486cb7",
".git/objects/pack/pack-285d7b4a092a721ce1be7988eef8bb364e18c17f.pack": "dca01d52b2df1ac3ef6e837a602dd194",
".git/objects/pack/pack-285d7b4a092a721ce1be7988eef8bb364e18c17f.idx": "ceca00c4dac4ba156d0026f8104a2176",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d2958f1484d37c2adca4d60f981018fb",
".git/logs/refs/heads/master": "d2958f1484d37c2adca4d60f981018fb",
".git/logs/refs/remotes/origin/HEAD": "d2958f1484d37c2adca4d60f981018fb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "9b869e90a180ba269bb8071fba5dcd6e",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/index": "e0ada1c3437fa9ad17b23402e079160a",
".git/packed-refs": "a6eff44b04ea21f6e83207f0a16485a2",
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
