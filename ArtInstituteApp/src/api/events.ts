import { RootEvent, RootEvents } from '@app/types/pagination'

import { fetcher } from './chicaco-art-api'

const getEvents = async (from = 0, size = 20) => {
  const data = await fetcher<RootEvents>(
    // eslint-disable-next-line max-len
    `/events/search?fields=id,title,short_description,image_url,date_display&query[range][start_date][gte]=now&sort[start_date][order]=asc&from=${from}&size=${size}`,
    {
      method: 'GET',
    },
  )
  return data
}

const getEvent = async (eventId: number) => {
  const data = await fetcher<RootEvent>(`/events/${eventId}`, {
    method: 'GET',
  })
  return data
}

export { getEvents, getEvent }
