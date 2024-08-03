import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { lastValueFrom } from 'rxjs'

import { Pokemon } from '@features/models/pokemon-list.model'
import { PokemonService } from '@features/services/pokemon.service'

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.css'
})
export class PokeListComponent implements OnInit {
  pokeData: Pokemon[] = []

  constructor(
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  async ngOnInit() {
    const response = await lastValueFrom(this.pokemonService.list())
    this.pokeData = response.results
  }

  private extractId(url: string): string | null {
    const urlObj = new URL(url)
    const pathname = urlObj.pathname
    const match = pathname.match(/\/(\d+)\/$/)
    return match ? match[1] : null
  }

  onRowClick(pokemon: Pokemon) {
    const id = this.extractId(pokemon.url)
    this.router.navigate(['/pokemon', id])
  }
}
