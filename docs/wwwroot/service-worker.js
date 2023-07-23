// References:
// - https://itnext.io/an-introduction-to-web-push-notifications-a701783917ce
// - https://developer.mozilla.org/en-US/docs/Web/API/Clients
// - https://web-push-book.gauntface.com/common-notification-patterns/#open-a-window

self.addEventListener(
    'notificationclick',
    handleNotification);

function handleNotification(event) {
    const notification = event.notification;

    if (event.action === 'View') {
        const redirectionUrl = event.notification.data.redirectionUrl;

        // create a promiseChain that will be executed asynchronously
        const promiseChain = clients.openWindow(redirectionUrl);
        event.waitUntil(promiseChain);
    }
    else if (event.action === 'Close') {
        notification.close();
    }
    else {
        // we could do something here...
    }
}