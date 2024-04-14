import { EventSlim } from '@app/types/events'
import * as React from 'react'
import { FlatList, ListRenderItem } from 'react-native'

import Event from '../event/event'
import { useGetEvents } from '../../hooks/useGetEvents'

function Events(): React.JSX.Element {
  const { data } = useGetEvents()

  const renderItem: ListRenderItem<EventSlim> = ({ item }) => {
    return <Event event={item} />
  }

  return (
    <FlatList
      renderItem={renderItem}
      data={data?.data || []}
      keyExtractor={item => item.id.toString()}
      numColumns={1}
    />
  )
}

export default Events
