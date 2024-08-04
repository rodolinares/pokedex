import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

import { lastValueFrom } from 'rxjs'

import { PokemonDetail } from '@features/models/pokemon-detail.model'
import { PokemonService } from '@features/services/pokemon.service'

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
  pokemon?: PokemonDetail
  total = 10277

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(async params => {
      const id = params['id']

      try {
        this.pokemon = await lastValueFrom(this.pokemonService.get(id))
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

  playCry(pokemon: PokemonDetail) {
    const audio = new Audio(pokemon.cries.legacy)
    audio.volume = 0.1
    audio.play()
  }

  formatId(id: number) {
    return id.toString().padStart(4, '0')
  }
}
