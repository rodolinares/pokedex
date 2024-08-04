import { Resource } from './resource.model'

export interface PokeList {
  count: number
  next: string | null
  previous: string | null
  results: Resource[]
}
