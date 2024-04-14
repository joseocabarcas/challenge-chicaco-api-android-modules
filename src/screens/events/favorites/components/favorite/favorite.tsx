import { Event } from '@app/types/event'
import { removeHtml } from '@app/utils/removeHtml'
import IconStarFull from '@app/assets/icons/icon_star_solid.svg'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useActionsEvents } from '@app/stores/events'

interface Props {
  event: Event
}

function Favorite({ event }: Props) {
  const { removeFromFavorite } = useActionsEvents()

  const onPress = () => removeFromFavorite(event.id)

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: event.image_url }}
        style={styles.image}
        height={50}
        width={50}
      />
      <View style={styles.containerText}>
        <Text style={styles.textTitle}>{removeHtml(event.title)}</Text>
        <Text style={styles.textDescription}>
          {removeHtml(event.short_description)}
        </Text>
        <Text style={styles.textDate}>{removeHtml(event.date_display)}</Text>
      </View>
      <TouchableOpacity onPress={onPress} style={styles.buttonStar}>
        <IconStarFull height={18} width={14} color={'#000000'} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    paddingHorizontal: 6,
    paddingVertical: 4,
    //ios
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    //android
    elevation: 4,
    marginHorizontal: 10,
  },
  image: {
    marginEnd: 10,
    borderRadius: 10,
  },
  containerText: {
    flex: 1,
  },
  textTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  textDescription: {
    fontSize: 12,
    marginBottom: 4,
  },
  textDate: {
    fontSize: 12,
  },
  buttonStar: {
    position: 'absolute',
    top: -8,
    right: -10,
    backgroundColor: '#ffffff',
    borderRadius: 40,
    padding: 6,
  },
})

export default Favorite
