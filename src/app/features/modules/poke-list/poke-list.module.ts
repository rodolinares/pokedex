import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { PokeListRoutingModule } from './poke-list-routing.module'
import { PokeListComponent } from './poke-list.component'

@NgModule({
  declarations: [PokeListComponent],
  imports: [CommonModule, PokeListRoutingModule]
})
export class PokeListModule {}
