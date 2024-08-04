import { Injectable } from '@angular/core'

import { Pokedex } from 'pokeapi-js-wrapper'

import { TableService } from './table.service'

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private pokedex: Pokedex

  constructor(private tableService: TableService) {
    this.pokedex = new Pokedex()
  }

  get(id: string) {
    return this.pokedex.getPokemonByName(id)
  }

  list(offset = 0) {
    return this.pokedex.getPokemonsList({
      limit: this.tableService.pageSize,
      offset
    })
  }
}
