'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icon.png": "ab89ad18c16356c3d5e16de877abe6b6",
"index.html": "ba56c1fd56713e58e029cc081d097491",
"/": "ba56c1fd56713e58e029cc081d097491",
"main.dart.js": "034878efbf2a86e1daa36aafb8b51166",
"favicon_io/favicon-16x16.png": "6be63dec536a1595592d6fca2c7e9477",
"favicon_io/favicon.ico": "b2973d83b90ee9390364337460ac2bc5",
"favicon_io/android-chrome-192x192.png": "200da1fb6f117afae832c5a9f2b2d900",
"favicon_io/apple-touch-icon.png": "5945f239393a7769aa07c7ecf919b7ed",
"favicon_io/android-chrome-512x512.png": "e979c7eaa0183de6ba24f5ad792a7fe7",
"favicon_io/site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"favicon_io/favicon-32x32.png": "247940d25067ff8ba7a6b38319a841a6",
".git/ORIG_HEAD": "979847c106fcba1c283cee5dc5d1934d",
".git/config": "d6be57859fc9a60c986664137c486cb7",
".git/objects/0d/61f435519c89727b176d8f19568ac86b0d79b7": "1bce3a8aa1d987c4db8f8a561792b6f4",
".git/objects/0c/375e40daafaf230822d194a21c81fdbaf1e161": "2fbd4a9006562dd8534978ab634c12c9",
".git/objects/03/10c9f8cc6d95ccf49de70b5fe6ae5c2038b3a5": "0aa20be6f188699f160572cc8df7d333",
".git/objects/69/3b437507e62aa8676005b0bf28c5d522821718": "60089399caba90299f4472dfa8cdd767",
".git/objects/56/ac0c19de25ebee67dd953ce4bcfba8e989d5b5": "7eacce56d6c06c50013038ebf3cc6bc2",
".git/objects/0b/4b8aaaa13245cc44d7db2c819faa204c5f1492": "c150b39e95150fcc7e1d3e07927040f6",
".git/objects/df/44fdd616b50384ac18b4e94275f91bae1f50fc": "693de537ddeb9ef7739430ee56355c89",
".git/objects/f4/7312b4b7b3ad00f56b6276f58f546a53b77fca": "d944fa469ffee7f1ec282a9e70472a8f",
".git/objects/27/443133304400392845a1d30b0120d60b26f077": "7eb77fbdd44ab6a43a6f64cdc905de30",
".git/objects/pack/pack-285d7b4a092a721ce1be7988eef8bb364e18c17f.pack": "dca01d52b2df1ac3ef6e837a602dd194",
".git/objects/pack/pack-285d7b4a092a721ce1be7988eef8bb364e18c17f.idx": "ceca00c4dac4ba156d0026f8104a2176",
".git/objects/80/f434d6da8f14912f3dc0959e23621bab8b20b4": "f6dc1d735c9d3508432dcdc3bcc39d4f",
".git/objects/2a/308865d1d6104ff5b1ad3357d4d94ed82bfa0b": "828771c8429e0a975a2d720f71098615",
".git/objects/91/8a0ba9e99293069b0125b480a58acc7fdebcbf": "898407373355852bd6a4ba972d0c629a",
".git/objects/52/208982a9cd0dd305b499f2c5f688079bb25895": "72400b7a717ce042de5729ba94de3e69",
".git/objects/90/28ebfaedd86f0a552379852489ac2256e906d7": "379481a300dfd4dfaf7bfa91f9610be9",
".git/objects/d3/f5420db15b62e144faefa384bd6887ce56c184": "2917ed393e16359d358091ab54e11ed7",
".git/objects/ba/007a4e4d3abbad167bbb752c62cb5aee37d52a": "9cc2dc519d6b1699989f81e6d326c938",
".git/objects/ba/1086cdf9924c9ecbbf9ac2ecb461f6cfff7cc5": "46aa3098dd9667b0701b2e4077ab147d",
".git/objects/ef/27e31cd95f74d3145fae2fb346f5cbaa7ef565": "f8e4587fbe22b57c15cde73f25b7327a",
".git/objects/f1/3ab76cd9ce4da534940d354ff99295a7475ed2": "b79a9d3a0c139579b2c9a7f245031bd5",
".git/objects/cb/13af276b7c6f1ac2cf4f7df5da6b235cd0b425": "02bd25876eb5c7207de7be1d79ae6965",
".git/objects/f8/3336f6c4864a39d967d6775d7ff686aefe04e6": "a88d02874925ab25d9224a40f7f5d2ed",
".git/objects/2b/1a087cc053da385c0a0a22c6afe3b9e5b1c3dd": "06319e8a1e78e3dcf9fb833b3a617777",
".git/objects/47/6c4728ec50c8a2f0c0742c5a9836564aeeea91": "6c3befbb13bf9c2a5a4aee64c6e1e1a4",
".git/objects/13/9cc689932914802fd4b1ab5bbcf3ce01f36b02": "c883a4e2baeb7e62d09a0c16219d5e06",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d2958f1484d37c2adca4d60f981018fb",
".git/logs/refs/heads/master": "d2958f1484d37c2adca4d60f981018fb",
".git/logs/refs/remotes/origin/HEAD": "d2958f1484d37c2adca4d60f981018fb",
".git/logs/refs/remotes/origin/master": "df8d8e259090b1c9ec1e7671e695710f",
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
".git/refs/remotes/origin/master": "405daaa7214269c8f1ab6176482ea73e",
".git/index": "e0ada1c3437fa9ad17b23402e079160a",
".git/packed-refs": "a6eff44b04ea21f6e83207f0a16485a2",
".git/COMMIT_EDITMSG": "f8f6a77becf60c865065c6a832592625",
".git/FETCH_HEAD": "54861a77a2afdee3ad5dc36c17be66e9",
"assets/LICENSE": "c9127beb7cb73455c34c12753a31fef3",
"assets/AssetManifest.json": "e2e781ac92777c3bb93c616c62d6e7f1",
"assets/FontManifest.json": "fe78b2efd8c89843e12352c526b9fc94",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "2abd86f90b3fd9d18d950195282cd8d5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/SF-Pro-Display-Regular.otf": "5810cdf5bc7db8d0090a6c46890ee33b",
"assets/fonts/SF-Pro-Rounded-Regular.otf": "f1bea2faef1e040dac7c8f97d25278e4",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/SF-Pro-Rounded-Thin.otf": "10048d64107f85ae036222578e13aae7",
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
"assets/assets/icons/wordpress.png": "b81cdb0e2b04fcc324cefcd9aeb3b52d",
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
