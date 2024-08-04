import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { NzTableQueryParams } from 'ng-zorro-antd/table'
import { lastValueFrom } from 'rxjs'

import { Resource } from '@features/models/resource.model'
import { PokemonService } from '@features/services/pokemon.service'
import { PAGE_SIZE } from '@shared/utils/constants'

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.css'
})
export class PokeListComponent {
  data: Resource[] = []
  error = false
  loading = true
  pageSize = PAGE_SIZE
  total = 0

  constructor(
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  private async listPokemon(offset = 0) {
    try {
      const response = await lastValueFrom(this.pokemonService.list(offset))
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
    const offset = (pageIndex - 1) * this.pageSize
    await this.listPokemon(offset)
  }

  extractId(url: string) {
    const urlObj = new URL(url)
    const pathname = urlObj.pathname
    const match = pathname.match(/\/(\d+)\/$/)
    return match ? match[1] : null
  }

  onRowClick(pokemon: Resource) {
    const id = this.extractId(pokemon.url)
    if (!id) return

    this.router.navigate(['/pokemon', id])
  }
}
