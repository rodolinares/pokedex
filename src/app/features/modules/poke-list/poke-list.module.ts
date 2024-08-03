import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { NzTableModule } from 'ng-zorro-antd/table'

import { PokeListRoutingModule } from './poke-list-routing.module'
import { PokeListComponent } from './poke-list.component'

@NgModule({
  declarations: [PokeListComponent],
  imports: [CommonModule, NzTableModule, PokeListRoutingModule]
})
export class PokeListModule {}
