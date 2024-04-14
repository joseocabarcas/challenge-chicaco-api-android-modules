import EventsScreen from '@app/screens/events/list'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import EventScreen from '@app/screens/events/detail'

import { RootStackParamList } from './types'

export const RootStack = createNativeStackNavigator<RootStackParamList>()

function Navigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Events">
        <RootStack.Screen
          name="Events"
          component={EventsScreen}
          options={{ headerShown: false, animation: 'slide_from_left' }}
        />
        <RootStack.Screen
          name="Event"
          component={EventScreen}
          options={{ headerShown: false, animation: 'slide_from_right' }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
