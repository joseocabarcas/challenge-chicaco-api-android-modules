import { getEvents } from '@app/api/events'
import { RootEvents } from '@app/types/pagination'
import { useEffect, useState } from 'react'

export function useGetEvents() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<RootEvents | null>(null)

  useEffect(() => {
    async function getAllEvents() {
      setLoading(true)
      const resp = await getEvents()
      setData(resp.data)
      setLoading(false)
    }

    void getAllEvents()
  }, [])

  // fetch next page
  const viewMore = async () => {
    if (!data) return
    if (data.pagination.current_page >= data.pagination.total_pages) {
      console.warn('limit page')
      return
    }

    setLoading(true)
    const resp = await getEvents(
      data.pagination.current_page * data.pagination.limit,
    )

    if (resp.data) {
      setData(val => {
        if (val) {
          const dataVal = resp.data.data || []
          return { ...resp.data, data: [...val.data, ...dataVal] }
        }
        return val
      })
    }
    setLoading(false)
  }

  return { data, viewMore, loading }
}
