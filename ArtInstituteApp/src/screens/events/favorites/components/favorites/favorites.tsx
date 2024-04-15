import { Event } from '@app/types/event'
import React from 'react'
import { FlatList, ListRenderItem, StyleSheet } from 'react-native'
import { useFavoritesEvents } from '@app/stores/events'

import Favorite from '../favorite/favorite'

function Favorites() {
  const favorites = useFavoritesEvents()
  const renderItem: ListRenderItem<Event> = ({ item }) => {
    return <Favorite event={item} />
  }

  return (
    <FlatList
      data={favorites}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.container}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
})

export default Favorites
