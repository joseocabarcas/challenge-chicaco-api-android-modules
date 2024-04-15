import { getEvent } from '@app/api/events'
import { RootEvent } from '@app/types/pagination'
import { useEffect, useState } from 'react'

export function useGetEvent(eventId: number) {
  const [data, setData] = useState<RootEvent | null>(null)

  useEffect(() => {
    async function getDetailEvent() {
      const data = await getEvent(eventId)
      setData(data.data)
      console.log('data')
    }

    void getDetailEvent()
  }, [eventId])

  return { data }
}
