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
  error = false
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
      this.error = true
      this.loading = false
    }
  }

  formatId(id: number) {
    return id.toString().padStart(4, '0')
  }
}
