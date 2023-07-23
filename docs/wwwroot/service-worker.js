/*self.addEventListener('fetch', () => { });*/
//self.addEventListener(
//    'notificationclose',
//    function (event) {
//        const dismissedNotification = event.notification;

//        console.log("On notification close: ", event.notification.tag);

//        const promiseChain = clients.openWindow('https://www.wowhead.com/diablo-4/guide/classes/barbarian/legendary-aspects');
//        event.waitUntil(promiseChain);
//    }
//);


self.addEventListener('notificationclick', (event) => {
    const clickedNotification = event.notification;

    // Do something as the result of the notification click
    const promiseChain = clients.openWindow('https://www.wowhead.com/diablo-4/guide/classes/barbarian/legendary-aspects');
    event.waitUntil(promiseChain);

    clickedNotification.close();

});