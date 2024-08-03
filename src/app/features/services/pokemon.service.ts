import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { PokemonList } from '@features/models/pokemon-list.model'

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon'

  constructor(private http: HttpClient) {}

  get(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`)
  }

  list(offset = 0, limit = 20) {
    return this.http.get<PokemonList>(
      `${this.apiUrl}?offset=${offset}&limit=${limit}`
    )
  }
}
