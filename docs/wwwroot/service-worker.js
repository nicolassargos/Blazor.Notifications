/*self.addEventListener('fetch', () => { });*/
//self.addEventListener(
//    'notificationclose',
//    function (event) {
//        const dismissedNotification = event.notification;

//        console.log("On notification close: ", event.notification.tag);

//        const promiseChain = clients.openWindow('wxhatever');
//        event.waitUntil(promiseChain);
//    }
//);


self.addEventListener(
    'notificationclick',
    (event) => {
        const clickedNotification = event.notification;

        const redirectionUri = event.notification.data.redirectionUri;

        // create a promiseChain that will be executed asynchronously
        const promiseChain = clients.openWindow(redirectionUri);
        event.waitUntil(promiseChain);

        clickedNotification.close();
    }
);