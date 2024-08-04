import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

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
}
