import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { NzTableQueryParams } from 'ng-zorro-antd/table'
import { NamedAPIResource } from 'pokeapi-js-wrapper'

import { PokemonService } from '@features/services/pokemon.service'
import { TableService } from '@features/services/table.service'

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.css'
})
export class PokeListComponent {
  data: NamedAPIResource[] = []
  error = false
  loading = true
  total = 0

  constructor(
    private router: Router,
    private pokemonService: PokemonService,
    public tableService: TableService
  ) {}

  private async listPokemon(offset = 0) {
    try {
      this.loading = true
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
    const offset = (pageIndex - 1) * this.tableService.pageSize
    await this.listPokemon(offset)
    this.tableService.pageIndex = pageIndex
  }

  extractId(url: string) {
    const urlObj = new URL(url)
    const pathname = urlObj.pathname
    const match = pathname.match(/\/(\d+)\/$/)
    return match ? match[1] : null
  }

  onRowClick(pokemon: NamedAPIResource) {
    const id = this.extractId(pokemon.url)
    if (!id) return

    this.router.navigate(['/pokemon', id])
  }
}
