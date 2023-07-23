export function requestPermission() {
    return new Promise((resolve, reject) => {
        Notification.requestPermission((permission) => {
            resolve(permission);
        });
    });
}

export function isSupported() {
    if ("Notification" in window)
        return true;
    return false;
}

export async function create(title, options) {
    const registration = await navigator.serviceWorker.getRegistration();
    registration.showNotification(title, options);
}