import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzListModule } from 'ng-zorro-antd/list'
import { NzTagModule } from 'ng-zorro-antd/tag'

import { SpinnerComponent } from '@shared/components/spinner/spinner.component'

import { PokeDetailRoutingModule } from './poke-detail-routing.module'
import { PokeDetailComponent } from './poke-detail.component'

@NgModule({
  declarations: [PokeDetailComponent],
  imports: [
    CommonModule,
    NzGridModule,
    NzListModule,
    NzTagModule,
    SpinnerComponent,
    PokeDetailRoutingModule
  ]
})
export class PokeDetailModule {}
