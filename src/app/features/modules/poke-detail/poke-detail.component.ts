import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { lastValueFrom } from 'rxjs'

import { PokemonDetail } from '@features/models/pokemon-detail.model'
import { PokemonService } from '@features/services/pokemon.service'

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrl: './poke-detail.component.css'
})
export class PokeDetailComponent implements OnInit {
  loading = true
  pokemon?: PokemonDetail

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    if (!id) return

    try {
      this.pokemon = await lastValueFrom(this.pokemonService.get(id))
      this.loading = false
    } catch (error) {
      this.loading = false
      // TODO: Add error message
    }
  }
}
