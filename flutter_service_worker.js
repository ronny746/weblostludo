'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "83180eb29fa7abfaa9da9d73d9816fe5",
"index.html": "c2fcc61715927a43d536332c2fc7ed00",
"/": "c2fcc61715927a43d536332c2fc7ed00",
"main.dart.js": "ebbe22c805d00e8aa87b36a10cdb3455",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/ludox.png": "8a341b66e1cf08db7ae742e6016218ac",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "feb5be63cb24922bd8584fc216b123ff",
"assets/AssetManifest.json": "47e0bd4245cd32c4c332184cc1e15d7b",
"assets/NOTICES": "3acdf4758f7ac87d4664afe3eb7afe4a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "491ca5a7c51079e44b48f68efd5b9611",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "ccbe8c8f2c5f481164820fd8db70946c",
"assets/fonts/MaterialIcons-Regular.otf": "4a605f5da94f25c87a21ab9601e256e1",
"assets/assets/images/email.png": "dc5d9917892c95a825f3d40394c5bb21",
"assets/assets/images/won.png": "be8eaafa9da2bf75ef34aa20112e6bd7",
"assets/assets/images/support.png": "9bc78ebfda041f8c4ccf1c8b0744c8ba",
"assets/assets/images/telegram.png": "ed8d50263cda842615e9a8326144cb77",
"assets/assets/images/sli2.jpg": "192929a1556f1d38568b33da64dd0447",
"assets/assets/images/wallet.png": "8d7a98619ac7168f19d609fb10a9f9a4",
"assets/assets/images/rules.png": "fa62102cd88a0c0b6be468c8c8cfa178",
"assets/assets/images/create_challenge.png": "99208e7f7646ac4a4a6c3d74932e339b",
"assets/assets/images/advertise.png": "2f4aca2e250607c88e286422ad18144d",
"assets/assets/images/ludox.png": "8a341b66e1cf08db7ae742e6016218ac",
"assets/assets/images/games.png": "1d26278a7f0c904391c0b858e870c64a",
"assets/assets/images/load_banner_img.png": "0928e05a9e6722a9293396bbed9b5ab2",
"assets/assets/images/slider1.png": "1b0d12bf59c7a4aebf45c0cbfa26ecf1",
"assets/assets/images/cancel.png": "d7db4130d7267b23bd6cb9ef29dd9a05",
"assets/assets/images/logout.png": "3b704aed559f5e98d2174d240cae343d",
"assets/assets/images/challenges.png": "00a249817415318ec4cc3bf90f51e914",
"assets/assets/images/home.png": "56f8205850dc6a2e92c791a67e91da6f",
"assets/assets/images/user.png": "e459835010bf256bf5e3f7423b43bc51",
"assets/assets/images/atm.png": "c493b54fd957e128338e58fc7f014698",
"assets/assets/images/about_us.png": "065d245183f452ca4addc48cbe65df2f",
"assets/assets/images/upi.png": "06a92c79bf8af4b66018d7ce5ae28276",
"assets/assets/images/lose.png": "a33e286eb576e11135d6a4f9505a788d",
"assets/assets/images/privacy_policy.png": "9a2ceafd230bdcb01a1317e4ca17a3c6",
"assets/assets/images/share.png": "8a96d3cafac2010f3cb27d3205b5c4a7",
"assets/assets/images/bank.png": "07a36f8150f730182b06489a34b690e6",
"assets/assets/images/edit.png": "15a18f98fd0c1541f22441f8568f5d3e",
"assets/assets/images/contact_us.png": "b5eae2e92560d2a73d2abfa453bf83e0",
"assets/assets/images/my_challenge.png": "8ae42379d155b76feab08aa40a8625d2",
"assets/assets/images/user_challenge.png": "e27c8735da98ec6ccdcf12e258b26475",
"assets/assets/images/whatsapp.png": "c1baf16f786d7e5971c3a9c7d7d20579",
"assets/assets/images/sli.jpg": "af0c69d051396ee3dbc31d91fcee2253",
"assets/assets/images/coin.png": "b60c3c61213a82c7643cf0b28bafd185",
"assets/assets/images/refresh.png": "972886a9f2be19dc16fc450c998dadf8",
"assets/assets/images/coins.png": "361b8bd20410f87f236bf508e634e389",
"assets/assets/images/close.png": "b4b4871b09030034e58525d99877bc27",
"assets/assets/gif/sign_up.json": "43a60c95c0d8ac428f1ca83f5dbaa300",
"assets/assets/gif/no_data.json": "a48b6c619c68c7706f11f5269391d796",
"assets/assets/gif/withdraw_money.json": "9575edd996ea243c1f05943e1d510293",
"assets/assets/gif/leaderboard.json": "b0585a6541215e50121e9da528718ab7",
"assets/assets/gif/dice.json": "a64fabb32895e571cb413a3b041efe64",
"assets/assets/gif/tournament.json": "55b9e56e8e931894bafe5b182c38cf41",
"assets/assets/gif/add_money.json": "d13e4800446c43513a732abe29e428c1",
"assets/assets/gif/support.json": "306c92a7289ba50aae00f114db41941e",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
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
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
