import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { lastValueFrom } from 'rxjs'

import { Resource } from '@features/models/resource.model'
import { PokemonService } from '@features/services/pokemon.service'

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.css'
})
export class PokeListComponent implements OnInit {
  loading = true
  pokeData: Resource[] = []

  constructor(
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  async ngOnInit() {
    try {
      const response = await lastValueFrom(this.pokemonService.list())
      this.pokeData = response.results
      this.loading = false
    } catch (error) {
      this.loading = false
      // TODO: Add error message
    }
  }

  extractId(url: string) {
    const urlObj = new URL(url)
    const pathname = urlObj.pathname
    const match = pathname.match(/\/(\d+)\/$/)
    return match ? match[1] : null
  }

  onRowClick(pokemon: Resource) {
    const id = this.extractId(pokemon.url)
    this.router.navigate(['/pokemon', id])
  }
}
