'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "d6c197d726d5da6c40fadac07235c4d5",
"/LICENSE": "884774c1c2aa67facf7b263c11310121",
"/main.dart.js.deps": "292ac6f459e8daae057ab23a8988f458",
"/main.dart.js": "3f7d982a078c2b4ae3bcd823fb2ab36d",
"/.git/config": "d6be57859fc9a60c986664137c486cb7",
"/.git/objects/61/c7cd55e940b64cdd26da7cd50cbb0bd63f84b8": "ae6b8c1b364455991223338a16219144",
"/.git/objects/0d/250ff6462c890da0a84dbee700eb28d42c4e81": "de62328b221ccf45acd9bb9609f928ed",
"/.git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
"/.git/objects/3e/11d37d7216766512f24c71d488faefcb5b4018": "b0e74d5e7dde4dc163454b9eabcefff8",
"/.git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
"/.git/objects/56/ebe4ec857a1125f18a0d2dcff650eb2b6b424a": "6513a9a01cf1e06ce51201067068af93",
"/.git/objects/56/cb9ed4b1c6b81fcc2203695468c931883e446e": "b0b4961a1873a2e6d83e757abdd4cb05",
"/.git/objects/51/5a231192430a84912d55c6ca34286bc4e93119": "8b432ab85d88e080caa35db2d3039fca",
"/.git/objects/67/2d2457b6c3abf20dbd39711927bbc955eb77ea": "50078e59e5ffc92b0a51158eebd9ecd0",
"/.git/objects/0e/fa8c2ec746165cb67a5044485b5043d349ebbe": "4e4b7177aaf41d73f8c6d0b0d9e26648",
"/.git/objects/0e/e4748d33df72e5d9dcba16bce90ca0dbe52d40": "6fa77f86929923793ae1f0b57b505708",
"/.git/objects/34/42d8cae01a9cc08088c0aac5f34b941371ae22": "9824e97721df4c1f480746756a29d3c7",
"/.git/objects/5a/71707648b91bf54dd61779e159164406d1176d": "0072ba7ef2bb28aa2fb6e9d67d922e61",
"/.git/objects/ac/492f27cee17a8eabdc6d37e91a33337e181be8": "379eb004b706e046a405cc2317567217",
"/.git/objects/ac/573cb128e5a211f89e3aaa951d203f0ecdb86c": "90fa195968d1a5283de225925823aebb",
"/.git/objects/d0/10b36317439e84cd823125d74c235c48be09f7": "a62d5d282f49053da6a1d7e65ee39795",
"/.git/objects/a5/9ccfccfd503f5e54c4c7fb043f6efb570e4fd4": "81183bb7d11fad412ec95127b9186fa9",
"/.git/objects/d6/fbab806b1dce15b7b2c086b4a06e4596818a0d": "e2273d9aad96a0f07506329997ebf681",
"/.git/objects/d6/2d64e5309af18a65753c3f9dced6df3b7e4471": "ae1aa9cffd481403b087432332d2098d",
"/.git/objects/ae/80e5aad17c48caef63dedcedf6041e766fe7f7": "8cb209e4b7032b4ff98ce333dfc9a56c",
"/.git/objects/c7/9e00b7ac91233027ad815a4c81cf57f3809c8d": "4e9c8f01336f6bea2322edbcdb8c4c9d",
"/.git/objects/f2/9a50e7ff08ba98ec97b31ed94811a60574d228": "6820237b237fa90a3448b89c988a2358",
"/.git/objects/e3/f8b57bc8a41382c46c748ed712f00d0452a20f": "6a6c2218131ebc31b430214153924fb5",
"/.git/objects/ed/81a2b2d7612b0ae871ed0b58def93630db8020": "e73eddd9756d00eb372db40210b1ed4b",
"/.git/objects/ed/1c08e7a732a3a97f410a372212b554f9c9049f": "296af119d61162c4a94a5ecc1fa4d7bf",
"/.git/objects/16/8f8fb5663439e769787d82ac960b95f80d11d5": "d39a7af14f353db79aa8989b80221f29",
"/.git/objects/42/bc0948cbddef24b6df007e083bc5b79de991c1": "adaceadd33f7c8ca350bce880f289002",
"/.git/objects/89/b0cc794c37eb43cff438460a3e0abec6682875": "5f582c68a2b45c458eb5505a50d2e22e",
"/.git/objects/45/f323805fa9223fcbec781218a7f05c8960d11f": "593b5204e69672e4b239890dea7303ad",
"/.git/objects/1f/308368604493f50b6455f88a3feb711a9723d0": "a059addd57fda13a63836102d5ba680e",
"/.git/objects/87/c02725aec165d351c12019f8cf8702380bf04f": "2256b7f94ed0f3b9e5af98cc48fed617",
"/.git/objects/17/c160c37f83790c5f524c93a50d7540419210e6": "1e83623617fdff1db07648a6d59c25d4",
"/.git/objects/21/1fda6a2f276fd345c951a2300e7c7ff464b54f": "dff4df96135d76a61b13a94590d8b661",
"/.git/objects/4d/b7b3f3bb31cb9460f3af3eb98f70896201e28d": "59190847cd2811fbdf26d2d9591062cc",
"/.git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
"/.git/objects/88/88f457f74e0848fc7a953d0ecfb5d62dcc07f0": "a4b030ca36e8767d60c2a9a991181b0d",
"/.git/objects/6b/ed41eafeaeb4f5131c66e25c79d7ced7ab1d75": "e98eed791f6373c5693f8e2618baa5bc",
"/.git/objects/07/dcf21a62a3e059b8b1ec7de9b2ae25dbdb5986": "9a3babc02c7957584295c7ce7e8b98b4",
"/.git/objects/65/9e4583cf61ccd47e56f9681deb2d16e6bc8ff0": "1a5a7f0aa1e9bec5250f0aca60d707a1",
"/.git/objects/62/d8f1c8c08d2ac2ff359419d2ed6f29d5c4d61d": "1c3fde0de6e766329bb054b5359f5a8b",
"/.git/objects/53/6901db43c3119718472ed3a00da0a655c4a6f0": "79107cbea916bef060695bd35fb50a41",
"/.git/objects/53/0a28a8a199ea77ca4a238ee26d75d44b0bad07": "798dfc5a03b0ff10c32d43b9f269cfbc",
"/.git/objects/53/63d7f5a9585c7403668849c5f9f8d42cca8f20": "5434419ee725804fa9b3234b284b0356",
"/.git/objects/37/d0d0690ec13baee87f6fcb35ce64a9f0f32fc1": "92bed290efc3599ffbcd72c94fed3bdd",
"/.git/objects/6c/0d7f09385ee7dd3f597bb67807daedb7258b3e": "524e31f2bb180500b6db27ef9a5d3ad9",
"/.git/objects/6c/5523b5fb9bb84ccafa28f193d979a0926a0919": "2ede8e88444304805de4c95236924102",
"/.git/objects/39/5cda16db3732560862f52adbe5d1aa4aafc58e": "3e7dfd04ae50c2b98b549394e01dfeb8",
"/.git/objects/63/512bcead41ef4b87096b45cacfc4666148522a": "3db3e3631028ae0c680d3fb77464073c",
"/.git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
"/.git/objects/0a/e225b36e551ae9da0a8dd9cf55e802cf92bf90": "8e0d2041824afa3b50c14dab192a0c28",
"/.git/objects/64/0ce56855a58b4e2b71034176eb1c6d07b1f299": "69fec706380774094d59a35aadcbc6a9",
"/.git/objects/d3/151a319551ed5b9afdd2fed20050008a788cba": "3d9fba0d56f815035027162c1bdd0607",
"/.git/objects/d4/4135a22b0046319ec0bed3d0d0183b8bd142f0": "12317d865cd0741879d99cc1cacce433",
"/.git/objects/a7/c86ad09d4b09ce97f54f3640c83d87b9c024e6": "a786293a35a28aa7fc2b621de34475d8",
"/.git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
"/.git/objects/d2/c432381a90ff288bcab8d89f1633c16601d520": "0fa57a27c3679b55151cac7c513af9e3",
"/.git/objects/db/ef116d224d8f796abe72ecfef9271f9d79f069": "a633ba18bbfd84d0c0ea0a4dd6b59348",
"/.git/objects/b9/2d4c8e7ae7929651d8339106e25ed0756a749b": "19b2cedf15692a8adc4f2e8fce027214",
"/.git/objects/a1/c136c797f4efa864147038702dc6d8cf02ed68": "55906d824f0bde227aa146bf7deef0aa",
"/.git/objects/cd/980f8961ac81811c879a98e56dc7660829483b": "d3fcc9be313829eeac82e66a232128ca",
"/.git/objects/f7/98108736f5200ce8d978d1c87da1de552332ab": "af7591d0e9b8e31137954969c1f89325",
"/.git/objects/fa/ed893319555000d03d1552d846b5ce8e0ea99c": "001a103aae37280058e269d43eb47f97",
"/.git/objects/c5/52766bce842e778239d98e0645f1c816d7b966": "7acaa9cb8ade76a83c451a7e36e88a83",
"/.git/objects/f1/413232544b5aa46fd4e51d17a10c9f2d5455a8": "8ebec0a20430d452e518bdf230e52f33",
"/.git/objects/e7/ae5fd0fb8a76c072452260bfe4f94962bc11f9": "29eb510d4ebbc2d2f00fdcb2fd9394c1",
"/.git/objects/e0/c7ec2207277aa39a7686136ee8f707a360a33e": "cb55a9582dd04108c2816a0d859b2e3a",
"/.git/objects/46/29300535635a09160eae0adc54a9071c4ffcf3": "2ed8a89385d3a3411dbaa675a6860f2f",
"/.git/objects/2c/0e5be22aab076cebe55b510e8ccce14b1675f8": "9093ae6fd202a9616cbd37ab37e2b6a8",
"/.git/objects/2c/c703a66b8a5f9821b1a104e3dd32ca39dcd1d1": "cb88a532718219f481c6d6abed5ccefe",
"/.git/objects/2d/c02abbe90eefbc8cbc47ec8740a4f7afbc4a12": "b02d9ce34a152d188d3acce51bbc5726",
"/.git/objects/1b/51fbced099ef9733da7c40dbb284f509aa7eaa": "f55fd0f583cfa918afccff08223911d1",
"/.git/objects/77/9fb8b9392d40b3c834a08f58859a39e83f36a2": "d99aaed3b26f10337b2ca27c2384bc7c",
"/.git/objects/4a/723613962c6912feea62391a4e5a8b585fc06e": "9ecb797565a9c835b2a7a423597f2472",
"/.git/objects/24/b7052533a62bbe9492a52cf3968de03bc8958f": "8f749bc2c74f1fef0fbc228cf192f6ec",
"/.git/objects/23/4b8a26c117e42f6f4bde2dbc655418e97a66c8": "3a1634212cd104ded26d92a4fbac4ad8",
"/.git/objects/15/89224f6c6b572a1f84fec513e706ffe4aa28ec": "965e51e971e8cf30db3140358bd01207",
"/.git/objects/15/db38895b70fe3724c7cf7658948289d2458863": "db1eceb3b8444488e0a719fce6da4680",
"/.git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
"/.git/objects/47/4a5b5b78e740693f4c3a8e4b4d54d4d04f24b5": "c46701a24a58e7fc03b1907517d20b92",
"/.git/objects/47/9a34c8aedcde15eca862f3fbc8918604c133e8": "83825a09b9d80d52184ad5f22f8d60a9",
"/.git/objects/8b/dfff78bcef30a8bfcdef36f9e226c5b5e582b2": "394c730c1dc93464045ef4fbdd1d4ffb",
"/.git/objects/7f/b3ba926bb2dd85cedf257047a81bb8a2943fb1": "4274842284f05887f34fdc279158fa61",
"/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"/.git/logs/HEAD": "713367cf47f180e5d657fa61ee723e65",
"/.git/logs/refs/heads/master": "713367cf47f180e5d657fa61ee723e65",
"/.git/logs/refs/remotes/origin/HEAD": "d6b32e1e824738617aebfc78e03a6c54",
"/.git/logs/refs/remotes/origin/master": "e4d42feee6aed881f233439841511e6a",
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
"/.git/refs/heads/master": "59e0d6b1f1ae01c6ea9ca7dc1a6daffb",
"/.git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
"/.git/refs/remotes/origin/master": "59e0d6b1f1ae01c6ea9ca7dc1a6daffb",
"/.git/index": "8bfd6e38a13a0ec8285b781154a5e19d",
"/.git/packed-refs": "ceaea7d32d2485bb76c2cfa21ccd9788",
"/.git/COMMIT_EDITMSG": "9ab2519731de19277754b243adfdb4a6",
"/assets/LICENSE": "307b4e41e0e7528f333fb9997cbf40b5",
"/assets/AssetManifest.json": "45b1da849829e56fd1e12913708c8afb",
"/assets/FontManifest.json": "0621fb7723859a382fc19210904f6578",
"/assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "2abd86f90b3fd9d18d950195282cd8d5",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/images/brepic.jpg": "fc643b35b630dfa82edf3747ca2ae054",
"/assets/assets/images/brepicsmall.jpg": "85d3ffa5d52e26caa620ccaf9aa51d84",
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
        return fetch(event.request);
      })
  );
});
