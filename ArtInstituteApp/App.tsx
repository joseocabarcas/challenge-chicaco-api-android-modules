import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { API_URL } from '@env'

// import type {PropsWithChildren} from 'react'
// type SectionProps = PropsWithChildren<{
//   title: string
// }>

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text style={styles.highlight}>App.tsx {API_URL}</Text>
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
