import { API_URL } from '@env'

async function fetcher<TData>(namePath: string, config: RequestInit = {}) {
  try {
    const url = `${API_URL}${namePath}`
    const response = await fetch(url, config)

    const data = (await response.json()) as TData
    return { data }
  } catch (error) {
    console.error(error)
    return { data: null, error }
  }
}

export { fetcher }
