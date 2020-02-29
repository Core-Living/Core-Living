/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var cacheName = 'CSv3';

var cachedFiles = [
    '/',
    '/index.html',
    '/manifest.json',
    '/js/main.js'
];

self.addEventListener('install', function(evt){
    //Add the file to the cache
    evt.waitUntil(
        caches.open(cacheName).then(function(cache){
            return cache.addAll(cachedFiles);
        }).then(function(){
            return self.skipWaiting();
        }).catch(function(err){
        })    
    );
});

self.addEventListener('activate', function(evt){
    evt.waitUntil(
       caches.keys().then(function(keyList){
           return Promise.all(keyList.map(function(key){
               if(key !== cacheName){
                   console.log('Removing Old Cache', key);
                   return caches.delete(key)
               }
           }));
       })
    );
    return self.clients.claim();
});

self.addEventListener('fetch', function(evt){
    evt.respondWith(
       caches.match(evt.request).then(function(response){
           return response || fetch(evt.request);
       })
    );
});
