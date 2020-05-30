import PushNotification from 'react-native-push-notification';
import { Platform } from 'react-native';

class NotificationService {
    constructor() {
        this.configure();
        this.lastId = 0;
    }

    configure() {
        PushNotification.configure({
            requestPermissions: Platform.OS === 'ios',
            // IOS ONLY (optional): default: all - Permissions to register.
            permissions: {
                alert: true,
                badge: true,
                sound: true,
            },

            popInitialNotification: true,
        });
    }

    //Appears right away
    localNotification(title, message) {
        this.lastId++;
        PushNotification.localNotification({
            title,
            message,
            playSound: false,
            soundName: 'default',
        });
    }

    //Appears after a specified time. App does not have to be open.
    scheduleNotification() {
        this.lastId++;
        PushNotification.localNotificationSchedule({
            date: new Date(Date.now() + 30 * 1000), //30 seconds
            title: 'Scheduled Notification',
            message: 'My Notification Message',
            playSound: true,
            soundName: 'default',
        });
    }

    checkPermission(cbk) {
        return PushNotification.checkPermissions(cbk);
    }

    cancelNotif() {
        PushNotification.cancelLocalNotifications({ id: '' + this.lastId });
    }

    cancelAll() {
        PushNotification.cancelAllLocalNotifications();
    }
}

export const notification = new NotificationService();
