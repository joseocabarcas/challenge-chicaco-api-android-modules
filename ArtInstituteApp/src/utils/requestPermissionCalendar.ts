import { PermissionsAndroid } from 'react-native'

export const requestCalendarPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_CALENDAR,
      {
        title: 'App Calendar Permission',
        message: 'Art App needs access to your calendar',
        buttonPositive: 'OK',
      },
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true
    } else {
      return false
    }
  } catch (err) {
    console.error(err)
    return false
  }
}
