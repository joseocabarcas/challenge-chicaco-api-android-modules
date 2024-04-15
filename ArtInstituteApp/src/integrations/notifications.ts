import { Event } from '@app/types/event'
import notifee, {
  AuthorizationStatus,
  EventType,
  TimestampTrigger,
  TriggerType,
} from '@notifee/react-native'

class Notifications {
  constructor() {
    // Listen for events
    // This is called when the app is in the foreground
    notifee.onForegroundEvent(({ type, detail }) => {
      switch (type) {
        case EventType.DISMISSED:
          console.log('User dismissed notification', detail.notification)
          break
        case EventType.PRESS:
          console.log('User pressed notification', detail.notification)
          break
      }
    })

    // This is called when the app is in the background
    // eslint-disable-next-line @typescript-eslint/require-await
    notifee.onBackgroundEvent(async ({ type, detail }) => {
      console.log('Notification received: background', type, detail)
    })
  }

  // This method is called to check if the user has granted permission to send notifications
  public async checkPermissions() {
    const settings = await notifee.requestPermission()

    if (settings.authorizationStatus >= AuthorizationStatus.AUTHORIZED) {
      console.log('Permission settings:', settings)
      return true
    } else {
      console.log('User declined permissions')
      return false
    }
  }

  public async scheduleNotificationEvent({
    event,
    date,
  }: {
    event: Event
    date: Date
  }) {
    // Check if the user has granted the permission to send notifications
    const hasPermissions = await this.checkPermissions()

    // If the user has granted the permission, schedule the notification
    if (hasPermissions) {
      // Create a channel (required for Android)
      const channelId = await notifee.createChannel({
        id: 'reminder-event',
        name: 'reminder-event',
      })

      // Create a timestamp trigger for the notification
      const trigger: TimestampTrigger = {
        type: TriggerType.TIMESTAMP, // This is the type of trigger, we have other types of triggers as well
        // timestamp: +date, // +date converts the date to timestamp
        timestamp: date.getTime(),
      }

      // Create the notification details
      const notificationDetails = {
        id: String(event.id),
        title: `🔔 ${event.title}`,
        body: `${event.short_description}`,
        android: {
          channelId: channelId,
          pressAction: {
            id: 'default',
          },
        },
        data: {
          id: String(event.id),
          action: 'reminder-event',
          details: {
            ...event,
          },
        },
      }

      // Schedule the notification
      await notifee.createTriggerNotification(notificationDetails, trigger)
    }
  }
}

// Exporting an instance of the class
export default new Notifications()
