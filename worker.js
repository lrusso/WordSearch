const filesToCache = [
	"WordSearch.htm",
	"WordSearch.json",
	"WordSearch.png",
	"WordSearchFavIcon_16x16.png",
	"WordSearchFavIcon_192x192.png",
	"WordSearchFavIcon_512x512.png",
	"WordSearchGame.htm",
	"WordSearchGame.js",
	"WordSearchShare.png"
];

const staticCacheName = "wordsearch-v1";

self.addEventListener("install", event => {
	event.waitUntil(
		caches.open(staticCacheName)
		.then(cache => {
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request)
		.then(response => {
			if (response) {
				return response;
			}
			return fetch(event.request)
		}).catch(error => {
		})
	);
});