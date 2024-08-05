import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

import { Pokemon } from 'pokeapi-js-wrapper'

import { PokemonService } from '@features/services/pokemon.service'
import { TOTAL_POKEMONS, TYPE_COLORS } from '@shared/utils/constants'

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrl: './poke-detail.component.css'
})
export class PokeDetailComponent implements OnInit {
  canGoAhead = false
  canGoBack = false
  error = false
  loading = true
  pokemon?: Pokemon
  total = TOTAL_POKEMONS
  typeColors = TYPE_COLORS

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(async params => {
      const id = params['id']

      try {
        this.pokemon = await this.pokemonService.get(id)
        this.canGoBack = this.pokemon.id > 1
        this.canGoAhead = this.pokemon.id < this.total
        this.playCry(this.pokemon)
        this.loading = false
      } catch (error) {
        this.error = true
        this.loading = false
      }
    })
  }

  goBack() {
    this.router.navigate(['/pokemon'])
  }

  prev() {
    if (this.pokemon && this.pokemon.id > 1) {
      this.router.navigate(['/pokemon', this.pokemon.id - 1])
    }
  }

  next() {
    if (this.pokemon && this.pokemon.id < this.total) {
      this.router.navigate(['/pokemon', this.pokemon.id + 1])
    }
  }

  playCry(pokemon: Pokemon) {
    const audio = new Audio(pokemon['cries'].legacy || pokemon['cries'].latest)
    audio.volume = 0.1
    audio.play()
  }

  formatId(id: number) {
    return id.toString().padStart(4, '0')
  }
}
