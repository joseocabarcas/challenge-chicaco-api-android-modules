import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import IconSave from '@app/assets/icons/icon_save.svg'

function Header(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Events</Text>
      <View>
        {/* Icons */}
        <IconSave height={22} width={16} color={'#000000'} />
      </View>
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
