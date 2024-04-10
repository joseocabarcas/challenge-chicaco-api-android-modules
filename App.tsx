import React from 'react'
import { Header } from 'react-native/Libraries/NewAppScreen'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native'

// import type {PropsWithChildren} from 'react'
// type SectionProps = PropsWithChildren<{
//   title: string
// }>

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header />
        <View>
          <Text style={styles.highlight}>App.tsx</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
})

export default App
