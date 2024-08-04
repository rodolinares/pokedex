import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { NzTableQueryParams } from 'ng-zorro-antd/table'
import { NamedAPIResource } from 'pokeapi-js-wrapper'

import { PokemonService } from '@features/services/pokemon.service'

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.css'
})
export class PokeListComponent {
  error = false
  loading = true
  data: NamedAPIResource[] = []
  total = 0

  constructor(
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  private async listPokemon(offset = 0) {
    try {
      const response = await this.pokemonService.list(offset)
      this.data = response.results
      this.total = response.count
      this.loading = false
    } catch (error) {
      this.error = true
      this.loading = false
    }
  }

  async onQueryParamsChange(params: NzTableQueryParams) {
    const { pageIndex } = params
    const offset = (pageIndex - 1) * 10
    await this.listPokemon(offset)
  }

  extractId(url: string) {
    const urlObj = new URL(url)
    const pathname = urlObj.pathname
    const match = pathname.match(/\/(\d+)\/$/)
    return match ? match[1] : null
  }

  onRowClick(pokemon: NamedAPIResource) {
    const id = this.extractId(pokemon.url)
    this.router.navigate(['/pokemon', id])
  }
}
