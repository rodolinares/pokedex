import { Injectable } from '@angular/core'

import { Pokedex } from 'pokeapi-js-wrapper'

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private pokedex: Pokedex

  constructor() {
    this.pokedex = new Pokedex()
  }

  get(id: string) {
    return this.pokedex.getPokemonByName(id)
  }

  list(offset = 0, limit = 10) {
    return this.pokedex.getPokemonsList({
      limit,
      offset
    })
  }
}
