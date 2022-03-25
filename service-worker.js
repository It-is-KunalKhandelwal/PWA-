// // // Ensure that the browser supports the service worker API
// // if (navigator.serviceWorker) {
// //     // Start registration process on every page load
// //     window.addEventListener('load', () => {
// //         navigator.serviceWorker
// //             // The register function takes as argument
// //             // the file path to the worker's file
// //             .register('/service-worker.js')
// //             // Gives us registration object
// //             .then(reg => console.log('Service Worker Registered'))
// //             .catch(swErr => console.log(
// //                     `Service Worker Installation Error: ${swErr}}`));
// //         });
// //     }
    
//     var cacheName = 'tasty-v1';
//     var cacheAssets = ['/'];
    
//     // Call install Event
//     self.addEventListener('install', e => {
//         // Wait until promise is finished
//         e.waitUntil(
//             caches.open(cacheName)
//             .then(cache => {
//                 console.log(`Service Worker: Caching Files: ${cache}`);
//                 cache.addAll(cacheAssets)
//                     // When everything is set
//                     .then(() => self.skipWaiting())
//             })
//         );
//     })
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./service-worker.js')
      .then((reg)=>console.log('registred successfully',reg))
      .catch((error)=>console.log('registration failed',error))

}
//install
self.addEventListener('install',evt=>{
    console.log('service installed')
})
self.addEventListener('activate',evt=>{
    console.log('activated successfully')
})
//fetch
self.addEventListener('fetch',evt=>{
    console.log('fetch event:',evt)
})