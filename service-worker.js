"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","24c38ae06c969e31c0800a4efaa51aed"],["/static/css/main.5834f168.css","ef6e7d540e223ca8c130de6344da7538"],["/static/js/main.60e085df.js","e5cf04125078e865ae92e8f6e52a0121"],["/static/media/balls.dcbfba45.JPG","dcbfba454499cc267ce1058309836494"],["/static/media/christmas.008816b8.JPG","008816b85ced2addf4918017eee09e15"],["/static/media/classes.0e02b4e3.JPG","0e02b4e3039715afc4de7e3fc338192e"],["/static/media/collection.dc0d82ce.png","dc0d82ce52507b55094a35a4169406c6"],["/static/media/game.a33bc4e2.PNG","a33bc4e2dd31844e242f874a2102a464"],["/static/media/guitar.902dfd2c.JPG","902dfd2ca1ceeec6fe201a6f8513b4ec"],["/static/media/mermaid.68f220e8.PNG","68f220e8014ccd56b726d64250013553"],["/static/media/mormaids.e9e4706b.PNG","e9e4706b0d6104beee4ca9918b4e0a60"],["/static/media/nino.01697014.PNG","01697014ec4d2580ecbe3fa44709c81d"],["/static/media/present.68b2bda8.PNG","68b2bda8448b68ef4fe74df63049b533"],["/static/media/riot.32d605d0.PNG","32d605d0c8382c1d744943aeff05b25d"],["/static/media/santa.ed0a66de.jpg","ed0a66de7b09f872ccdfef672b6e3bde"],["/static/media/schoolbus.4e6d6014.PNG","4e6d6014a04e4595ee43fbfddd46f939"],["/static/media/shell.5399ff5e.JPG","5399ff5e7881e05ea113b8a22dccc291"],["/static/media/skiing.ffb1b3a7.JPG","ffb1b3a7df493a0cbe4bc11a0c0c58d8"],["/static/media/tennis.96464dfd.JPG","96464dfd1e4717157850d3b5a0073832"],["/static/media/titanic.173b1912.JPG","173b191282120be653b16a28eeff9b90"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});