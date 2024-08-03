import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { SpinnerComponent } from '@shared/components/spinner/spinner.component'

import { PokeDetailRoutingModule } from './poke-detail-routing.module'
import { PokeDetailComponent } from './poke-detail.component'

@NgModule({
  declarations: [PokeDetailComponent],
  imports: [CommonModule, SpinnerComponent, PokeDetailRoutingModule]
})
export class PokeDetailModule {}
