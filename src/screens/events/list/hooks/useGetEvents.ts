import { getEvents } from '@app/api/events'
import { RootEvents } from '@app/types/pagination'
import { useEffect, useState } from 'react'

export function useGetEvents() {
  const [data, setData] = useState<RootEvents | null>(null)

  useEffect(() => {
    async function getAllEvents() {
      const data = await getEvents()
      setData(data.data)
      console.log('data')
    }

    void getAllEvents()
  }, [])
  return { data }
}
