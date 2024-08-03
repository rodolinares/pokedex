import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzTableModule } from 'ng-zorro-antd/table'

import { PokeListRoutingModule } from './poke-list-routing.module'
import { PokeListComponent } from './poke-list.component'

@NgModule({
  declarations: [PokeListComponent],
  imports: [CommonModule, NzButtonModule, NzTableModule, PokeListRoutingModule]
})
export class PokeListModule {}
