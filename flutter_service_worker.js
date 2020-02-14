'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "7cfd9a3897cc665d0566dc63fa4c6e98",
"/LICENSE": "884774c1c2aa67facf7b263c11310121",
"/main.dart.js.deps": "292ac6f459e8daae057ab23a8988f458",
"/main.dart.js": "a736ad8b07142c908272e650e6e108cc",
"/.git/config": "d6be57859fc9a60c986664137c486cb7",
"/.git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
"/.git/objects/67/2d2457b6c3abf20dbd39711927bbc955eb77ea": "50078e59e5ffc92b0a51158eebd9ecd0",
"/.git/objects/5a/71707648b91bf54dd61779e159164406d1176d": "0072ba7ef2bb28aa2fb6e9d67d922e61",
"/.git/objects/ac/492f27cee17a8eabdc6d37e91a33337e181be8": "379eb004b706e046a405cc2317567217",
"/.git/objects/d0/10b36317439e84cd823125d74c235c48be09f7": "a62d5d282f49053da6a1d7e65ee39795",
"/.git/objects/d6/2d64e5309af18a65753c3f9dced6df3b7e4471": "ae1aa9cffd481403b087432332d2098d",
"/.git/objects/ed/1c08e7a732a3a97f410a372212b554f9c9049f": "296af119d61162c4a94a5ecc1fa4d7bf",
"/.git/objects/17/c160c37f83790c5f524c93a50d7540419210e6": "1e83623617fdff1db07648a6d59c25d4",
"/.git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
"/.git/objects/88/88f457f74e0848fc7a953d0ecfb5d62dcc07f0": "a4b030ca36e8767d60c2a9a991181b0d",
"/.git/objects/6b/ed41eafeaeb4f5131c66e25c79d7ced7ab1d75": "e98eed791f6373c5693f8e2618baa5bc",
"/.git/objects/53/6901db43c3119718472ed3a00da0a655c4a6f0": "79107cbea916bef060695bd35fb50a41",
"/.git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
"/.git/objects/d4/4135a22b0046319ec0bed3d0d0183b8bd142f0": "12317d865cd0741879d99cc1cacce433",
"/.git/objects/a7/c86ad09d4b09ce97f54f3640c83d87b9c024e6": "a786293a35a28aa7fc2b621de34475d8",
"/.git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
"/.git/objects/db/ef116d224d8f796abe72ecfef9271f9d79f069": "a633ba18bbfd84d0c0ea0a4dd6b59348",
"/.git/objects/b9/2d4c8e7ae7929651d8339106e25ed0756a749b": "19b2cedf15692a8adc4f2e8fce027214",
"/.git/objects/e7/ae5fd0fb8a76c072452260bfe4f94962bc11f9": "29eb510d4ebbc2d2f00fdcb2fd9394c1",
"/.git/objects/46/29300535635a09160eae0adc54a9071c4ffcf3": "2ed8a89385d3a3411dbaa675a6860f2f",
"/.git/objects/2c/0e5be22aab076cebe55b510e8ccce14b1675f8": "9093ae6fd202a9616cbd37ab37e2b6a8",
"/.git/objects/2d/c02abbe90eefbc8cbc47ec8740a4f7afbc4a12": "b02d9ce34a152d188d3acce51bbc5726",
"/.git/objects/1b/51fbced099ef9733da7c40dbb284f509aa7eaa": "f55fd0f583cfa918afccff08223911d1",
"/.git/objects/77/9fb8b9392d40b3c834a08f58859a39e83f36a2": "d99aaed3b26f10337b2ca27c2384bc7c",
"/.git/objects/4a/723613962c6912feea62391a4e5a8b585fc06e": "9ecb797565a9c835b2a7a423597f2472",
"/.git/objects/23/4b8a26c117e42f6f4bde2dbc655418e97a66c8": "3a1634212cd104ded26d92a4fbac4ad8",
"/.git/objects/15/89224f6c6b572a1f84fec513e706ffe4aa28ec": "965e51e971e8cf30db3140358bd01207",
"/.git/objects/15/db38895b70fe3724c7cf7658948289d2458863": "db1eceb3b8444488e0a719fce6da4680",
"/.git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
"/.git/objects/47/9a34c8aedcde15eca862f3fbc8918604c133e8": "83825a09b9d80d52184ad5f22f8d60a9",
"/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"/.git/logs/HEAD": "d6b32e1e824738617aebfc78e03a6c54",
"/.git/logs/refs/heads/master": "d6b32e1e824738617aebfc78e03a6c54",
"/.git/logs/refs/remotes/origin/HEAD": "d6b32e1e824738617aebfc78e03a6c54",
"/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"/.git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
"/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"/.git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
"/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"/.git/refs/heads/master": "bbc17be1f057608f0c0d5b19cbdae3c2",
"/.git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
"/.git/index": "f117b7ca8089271fcd56478dd788c716",
"/.git/packed-refs": "ceaea7d32d2485bb76c2cfa21ccd9788",
"/assets/LICENSE": "9e00d062ca7e8f8a2f55e360af6fe823",
"/assets/AssetManifest.json": "83eec1705a371d86f0fd6d5f3543b6cb",
"/assets/FontManifest.json": "0621fb7723859a382fc19210904f6578",
"/assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "2abd86f90b3fd9d18d950195282cd8d5",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/images/myself.jpg": "a1c127a9096d08dcd9448f2dea0fb258"
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
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});