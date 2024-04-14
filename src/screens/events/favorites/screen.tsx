import * as React from 'react'
import {
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import IconArrowLeft from '@app/assets/icons/icon_arrow_left.svg'
import { FavoritesProps } from '@app/navigation/types'

import Favorites from './components/favorites/favorites'

function FavoritesScreen({ navigation }: FavoritesProps): React.JSX.Element {
  const onBack = () => navigation.goBack()

  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar barStyle={'light-content'} />
      {/* Header */}
      <View style={styles.containerHeader}>
        <Pressable style={styles.wrapperTitle} onPress={onBack}>
          <IconArrowLeft
            height={16}
            width={20}
            color={'#000000'}
            style={styles.iconBack}
          />
          <Text style={styles.textTitle}>Favorites</Text>
        </Pressable>
        <Text style={styles.textDescription}>
          Explore our wide-ranging exhibitions along with a variety of virtual
          and on-site programs.
        </Text>
      </View>
      <Favorites />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  containerHeader: {
    marginBottom: 20,
  },
  wrapperTitle: {
    flexDirection: 'row',
    flexShrink: 1,
    alignItems: 'center',
    marginBottom: 10,
  },
  iconBack: {
    marginEnd: 10,
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textDescription: {
    fontSize: 16,
  },
})

export default FavoritesScreen
