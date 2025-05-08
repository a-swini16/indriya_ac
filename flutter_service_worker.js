'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "fc99046f45089a1b9261fdb8bf7dcb92",
".git/config": "d6c58349dd50350aae53e07a224d52e9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "738a217b6514ab38493c1dfc9bda0124",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ab28efa226af557d2c8dd300f296327e",
".git/logs/refs/heads/main": "e527991f4262e97cd70fa90cdc4ad026",
".git/logs/refs/remotes/origin/main": "f214ce074e58fd0675f4136004325c48",
".git/objects/00/3750b229694c3f7ff01931a71d3119d6189432": "7a55b8622607aac1fb47f9ce7d0bdb30",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/07/b446bb320b0cb2ad7427ca304d53dbc12918c7": "c1ae19b32be7e58f15a48ff2ba38d4c1",
".git/objects/0e/91a33ef8c03ee6832a57f1c54478105c8506b2": "cac76fe45d88bb05c07881479fafacd4",
".git/objects/16/9519a6c13debcb55247d09667d1a486ddaddfc": "d0912765eb8c60c4c9099bc03c0443ab",
".git/objects/18/46fb2f9861403b8ced9ab3507b2703a0a601a4": "4d7ad73c1b14d31282bd7730344ce13a",
".git/objects/1a/1f1d52df9dcb55dcf75b1b5388489dc806eed6": "cef4cb8aa77e2e8c35a0c2411fbe6bb9",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/27/9d6c8bea10018e4dd3bc4f75edb45537f2cbb6": "a45e53e6430de759d4076e009671286f",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/28/ea2060a7b3732dcef0d82d57ed1f838c452f0d": "1525f8ab14897d636171c066072758a6",
".git/objects/3b/89e77a3090307d7ff39e629c9f56b76bd030d9": "27e0a77a62b4801bdc85b7ceaae99d7e",
".git/objects/3d/2972125b38b6a6bf08dc1c9fa68ba23aa74f1f": "321bd3dc76d376347df90c0e92722a9e",
".git/objects/40/ffad93335330fc62fb87a1a3428ae2df15c7ed": "b20ee0a554105f5477e5c6572ce3f1f4",
".git/objects/4b/0dca8d85ed7fc1d36ad4997ec1a6c35aed0f44": "d979f49db3b4cfe37dca0866d07f6825",
".git/objects/4d/83bc0b304d0a107a6e8b64bbc05870a3aabd3b": "d27219851d541085d449785c42c26562",
".git/objects/4f/5cb5f9db35e4cc5f58d61e172fef09e6d6f1fd": "b0a328680ed67ac79a17db4c3b76f60c",
".git/objects/54/b058ad034a9a2aa35cdfeb8a79fafc2e0fea01": "bebd8ef7161fad3b83cd382ce420966d",
".git/objects/5b/b240119010d2781694f0140a3ad4927ab6b32b": "9715edad231f99944ef8a6e1142cbf31",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/5f/15da9213927b203937aca8b599655d78f29320": "1904b570d3e651dbbd6732e176a1e486",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/66/10df73512cf2475580a44bbdd10e422d697260": "9713630b8421a5c53489a412cf12f9ed",
".git/objects/68/4c72aa77dc05b54daae50a4a1d0bf5a1e57c3f": "db194f76864499a31232cf16028ff30b",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/70/735969d38c205af3ef3f9c9f8d6815fa069f94": "f1373bcd2f3e8b3c557a16bf562bd637",
".git/objects/72/3b36477c9fd2534043c2cd5905b71feb396d79": "3e2f0747571fefb05350583039d25026",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/84/485d40eed56d10bdc00eeab93c1d14bf0cb8cd": "ac688fd410a5780e8f750fd300ba5363",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/befd5cc0d15ff2bb1ee8835e5b06faddfff908": "c008514f9f755be379e9ddf8c1166c52",
".git/objects/89/9369e1ed31048a3530fbbf7f0831ce72948cba": "cdf7e3c404ce07db765dadaf409db97f",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/90/f184becc136b5726b45f41b5c5e8c1ebd45efb": "e21123d1287c4a19cd7c5389bd7ac6ec",
".git/objects/96/6fdcff79252c8273530a6b6cc6c29d9e5b929a": "20d26a0111cf25ffc0c04106e046c3ad",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/9b/b2c50d06d64c8c3362ca4e006dc8bb3fd4322c": "33884adb27f82a1c5aaf0013ab19806e",
".git/objects/9d/6b1759a92719671ed1933de42861c0d0d890ff": "a81ab521a5a516715adc28810a975ce6",
".git/objects/a4/819c5efe4fcc99a0490dce79085cba4b737d02": "4319988eb1fb739ad3b5b4ce755822ae",
".git/objects/aa/63b688ff59968bd36291e87179e2317a93be26": "136c03adcf93eb8dd23a1496a2fe4435",
".git/objects/ad/80876e5b210944cdf26b206c87efae58ff919c": "54d7998bee0296485044dfc8c5043637",
".git/objects/ae/5f7fbd632d9a59f1e962ae6f5280fa537aada9": "7ce2fbab94d058fd1602933d7824cd7b",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b0/495896e8fbb038a99cc10560ea81722a4b3839": "b60ce9d3bde49a84dd26ffe4fa31eeef",
".git/objects/b1/3bd54fe32fa90171e0445e87be96f682e69a5b": "1ad03dce8a2ed598642ea1d1bee8082c",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b3/cb075d63e6563103b1e969b8e050304c58de66": "1977417c37735a03e8853fa244371716",
".git/objects/b6/29eb68c9a5ce82cc2dcedc490005b8e7248c5b": "d97bb2bfd30eed4cda029d8c34495984",
".git/objects/b7/c6b1848bca3c9948b6167a6523234584367386": "0c68f314c6e53e8129ca9c8d5aa9e746",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c3/6c74e0d37a01adcd1dfa396f0746150a19de76": "e0ba12be29d61b2f440b97c1ec1f32a3",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c6/c36f1c7bb660ce5640d3a8e13cf9e052a89127": "cfdb3139ca5a2f8c2278b2c0bd860772",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/d0/5a5c29c56d608528c9744f47821a2f59206e06": "05e25b64703902a0f753f201e662cada",
".git/objects/d1/41e5a52b8a7d515245b5ebca785fdcc1b165aa": "8c20dbc382a1bfac925f542d001c272d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ee/1ca8e34c0964324fb39a0e512167bc614711d5": "a0e976cf2fff5f99b957199c2cdf11f4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fa/b5867e986ef1d90ada162924456ac06d2f387e": "1bdeff5b6b0544d414438f43be19352f",
".git/refs/heads/main": "3d575a62e624bf0633a26c5f2fd60c01",
".git/refs/remotes/origin/main": "3d575a62e624bf0633a26c5f2fd60c01",
"assets/AssetManifest.bin": "5045b89a2dd8f02d7e705216a8091aea",
"assets/AssetManifest.bin.json": "5c447b4037249a589b4c51a4d784de0f",
"assets/AssetManifest.json": "03a2375fa84cec738bfd523a4b91e279",
"assets/assets/images/about_hero.png": "51ff025bd705e5236bd0e07fb5130fac",
"assets/assets/images/Ai.jpg": "554b9ea504e46301f7bba742525b637d",
"assets/assets/images/asw_pic.jpeg": "a445752049739d2854764ae49f39a7c0",
"assets/assets/images/aws-logo.png": "8faae6e6550e3d945afe022fef0bbf90",
"assets/assets/images/coding_illustration.png": "d7bcfca2a6c5d3106ee17263d405951e",
"assets/assets/images/DSA.png": "d0ea30b10f6025016a855383e3847f0b",
"assets/assets/images/govt_india_logo.png": "cd531fcc55e24bde2f4d23169eec9372",
"assets/assets/images/indriya.png": "c00bb30ecc2c4eec3a28d5a1fed683f3",
"assets/assets/images/indriya_logo.png": "82e408a3d111e9c33bbd7a71837cc5b5",
"assets/assets/images/nsdc_logo.png": "e916fe1793e041c8d7967aa3f03947cf",
"assets/assets/images/OI.jpg": "c6ee6c3a5a925c9df26d1b96133f3d25",
"assets/assets/images/R.png": "d5fb0ef361f7bfca6069e1978ff73438",
"assets/assets/images/skill_india_logo.png": "98a1871797aeff5fec27de986f33324d",
"assets/assets/images/team_c.jpeg": "c28260c0a33cdc2a7f8bf82dc9cf2df2",
"assets/assets/images/team_h.jpeg": "a2589616abfab18132ee9dbb6b0d9736",
"assets/assets/images/web_dev.png": "36ce151cbd682ef29aa1165373061a02",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "cc1490355d21a9485eb0ff7f33948bbf",
"assets/NOTICES": "c8eddef63c103b63c7eb2aeee5cbdf5f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "a53baa14911df76a48506ba22ea66b91",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "6ad092654b114214bb08727d42bf273d",
"icons/Icon-192.png": "b7135b6549958fd60f2ebdec67e68418",
"icons/Icon-512.png": "c405ccce314a7fff7f10d72ada2b2950",
"icons/Icon-maskable-192.png": "cbe6cbb810f4f35005a8e8ee202cbb20",
"index.html": "58c2df79a81cf5eceac9c861368be760",
"/": "58c2df79a81cf5eceac9c861368be760",
"logo.png": "c405ccce314a7fff7f10d72ada2b2950",
"main.dart.js": "de9e3b39a28a4dd49cfa4d9d57a126cd",
"manifest.json": "3659ffb1d79ac3efbac7d5a9eb258525",
"version.json": "923651d3959ca70a05e4002e0b61b9f6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
