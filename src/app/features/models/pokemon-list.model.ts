import { Resource } from './resource.model'

export interface PokemonList {
  count: number
  next: string | null
  previous: string | null
  results: Resource[]
}
