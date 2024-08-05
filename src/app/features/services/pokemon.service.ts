import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { map } from 'rxjs'

import { PokeDetail } from '@features/models/poke-detail.model'
import { PokeList } from '@features/models/poke-list.model'

import { TableService } from './table.service'

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon'

  constructor(
    private http: HttpClient,
    private tableService: TableService
  ) {}

  get(id: string) {
    return this.http.get<PokeDetail>(`${this.apiUrl}/${id}`)
  }

  list(offset = 0) {
    return this.http.get<PokeList>(
      `${this.apiUrl}?offset=${offset}&limit=${this.tableService.pageSize}`
    )
  }

  search(name: string) {
    return this.http
      .get<PokeList>(`${this.apiUrl}?limit=2000`)
      .pipe(
        map(data =>
          data.results.filter(pokemon =>
            pokemon.name.toLowerCase().includes(name.toLowerCase())
          )
        )
      )
  }
}
