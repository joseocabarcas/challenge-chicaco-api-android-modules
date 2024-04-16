import Notifications from '@app/integrations/notifications'
import { Event } from '@app/types/event'
import { requestCalendarPermission } from '@app/utils/requestPermissionCalendar'
import { Alert, Platform, ToastAndroid } from 'react-native'
import RTNCalendar from 'rtn-calendar/js/NativeCalendar'

export function useEventScreen(event: Event | undefined) {
  const onHandleAddToCalendar = async () => {
    if (!event) return

    const val = await RTNCalendar?.addEvent(
      event?.title,
      event.short_description,
      event.start_date,
      event.end_date,
      event.start_time,
      event.end_time,
      event.location,
    )
    void onScheduleNotification(val, event)
  }

  const onHandleAddToCalendarAutomatic = async () => {
    if (!event) return
    const resPermission = await requestCalendarPermission()

    if (!resPermission) return

    const val = await RTNCalendar?.addEventAutomatic(
      event?.title,
      event.short_description,
      event.start_date,
      event.end_date,
      event.start_time,
      event.end_time,
      event.location,
    )
    void onScheduleNotification(val, event)
  }

  const onScheduleNotification = (value: boolean | undefined, event: Event) => {
    if (value) {
      if (Platform.OS === 'android') {
        ToastAndroid.showWithGravity(
          'Event added successfull',
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
        )
      } else {
        Alert.alert('Event added successfull')
      }
      // Only for test
      const currentDate = new Date()
      const nextTime = currentDate.getSeconds() + 10
      currentDate.setSeconds(nextTime)
      // Schedule the notification
      // Here we are passing the reminder string and date to the scheduleNotification method
      void Notifications.scheduleNotificationEvent({
        event: event,
        date: currentDate,
      })
    } else {
      Alert.alert('Oopss! We have been trouble with this')
    }
  }

  return {
    onHandleAddToCalendar,
    onHandleAddToCalendarAutomatic,
    onScheduleNotification,
  }
}
