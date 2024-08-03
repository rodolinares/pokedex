import { Resource } from './resource.model'

interface PokeAbility {
  is_hidden: boolean
  slot: number
  ability: Resource
}

interface VersionGameIndex {
  game_index: number
  version: Resource
}

interface PokeHeldItemVersion {
  version: Resource
  rarity: number
}

interface PokeHeldItem {
  item: Resource
  version_details: PokeHeldItemVersion[]
}

interface PokeMoveVersion {
  move_learn_method: Resource
  version_group: Resource
  level_learned_at: number
}

interface PokeMove {
  move: Resource
  version_group_details: PokeMoveVersion[]
}

interface PokeType {
  slot: number
  type: Resource
}

interface PokeTypePast {
  generation: Resource
  types: PokeType[]
}

interface PokeSprites {
  front_default: string
  front_shiny: string
  front_female: string
  front_shiny_female: string
  back_default: string
  back_shiny: string
  back_female: string
  back_shiny_female: string
}

interface PokeCries {
  latest: string
  legacy: string
}

interface PokeStat {
  stat: Resource
  effort: number
  base_stat: number
}

export interface PokemonDetail {
  id: number
  name: string
  base_experience: number
  height: number
  is_default: boolean
  order: number
  weight: number
  abilities: PokeAbility[]
  forms: Resource[]
  game_indices: VersionGameIndex[]
  held_items: PokeHeldItem[]
  location_area_encounters: string
  moves: PokeMove[]
  past_types: PokeTypePast[]
  sprites: PokeSprites
  cries: PokeCries
  species: Resource[]
  stats: PokeStat[]
  types: PokeType[]
}
