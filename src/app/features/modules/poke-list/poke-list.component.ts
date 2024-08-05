import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { Router } from '@angular/router'

import { NzTableQueryParams } from 'ng-zorro-antd/table'
import {
  debounceTime,
  lastValueFrom,
  Observable,
  of,
  startWith,
  switchMap
} from 'rxjs'

import { Resource } from '@features/models/resource.model'
import { PokemonService } from '@features/services/pokemon.service'
import { TableService } from '@features/services/table.service'

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.css'
})
export class PokeListComponent implements OnInit {
  data: Resource[] = []
  error = false
  loading = true
  total = 0

  filterControl = new FormControl()
  filteredData!: Observable<Resource[]>

  constructor(
    private router: Router,
    private pokemonService: PokemonService,
    public tableService: TableService
  ) {}

  ngOnInit() {
    this.filteredData = this.filterControl.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      switchMap(name => (name ? this.pokemonService.search(name) : of([])))
    )
  }

  private navigateToPokemonDetail(pokemon: Resource) {
    const id = this.extractId(pokemon.url)
    if (!id) return

    this.router.navigate(['/pokemon', id])
  }

  onSearchResultClick(pokemon: Resource) {
    this.navigateToPokemonDetail(pokemon)
  }

  private async listPokemon(offset = 0) {
    try {
      this.loading = true
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

  onRowClick(pokemon: Resource) {
    this.navigateToPokemonDetail(pokemon)
  }
}
