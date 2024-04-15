import * as React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import IconStar from '@app/assets/icons/icon_star_regular.svg'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '@app/navigation/types'

function Header(): React.JSX.Element {
  const navigation: NavigationProp<RootStackParamList> = useNavigation()

  const onPress = () => {
    navigation.navigate('Favorites')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Events</Text>
      <TouchableOpacity onPress={onPress}>
        {/* Icons */}
        <IconStar height={22} width={16} color={'#000000'} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 16,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})

export default Header
