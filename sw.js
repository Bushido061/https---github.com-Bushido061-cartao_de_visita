const cacheName = 'cartao-pessoal';

const filesCache = [
    './',
    '.index.html',
    './css/css.css',
    './image/./img/72a0ec2ce73566d839e5600309a1db04b9ddead4-1920x1080.webp',
    './script/main.js'
]

//instalar o Service Worker e armazenar em cache
self.addEventListener('install',event =>{
    event.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll(filesToCache);
        })
    )
}) 

//ultiliza os arquivos do cache quando estiver offline
self.addEventListener('fetch', event =>{
    event.respondwith(
        caches.match(event,request).then(response =>{
            return response || fetch(event.rquest);
        })
    )
})