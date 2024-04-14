import { EventSlim } from './events'
import { Event } from './event'

interface Root {
  info: Info
  config: Config
}

export interface RootEvents extends Root {
  pagination: Pagination
  data: EventSlim[]
}

export interface RootEvent extends Root {
  data: Event
}

export interface Pagination {
  total: number
  limit: number
  offset: number
  total_pages: number
  current_page: number
  next_url: string
}

export interface Info {
  license_text: string
  license_links: string[]
  version: string
}

export interface Config {
  iiif_url: string
  website_url: string
}
