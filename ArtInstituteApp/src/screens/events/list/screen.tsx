import Header from '@app/components/header/header'
import * as React from 'react'
import {
  SafeAreaView,
  // ScrollView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native'

import Events from './components/events/events'

function EventsScreen(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar barStyle={'light-content'} />
      <Header />
      <Text style={styles.textDescription}>
        Explore our wide-ranging exhibitions along with a variety of virtual and
        on-site programs.
      </Text>
      <Events />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    padding: 16,
  },
  textDescription: {
    color: '#858585',
    marginBottom: 20,
  },
})

export default EventsScreen
