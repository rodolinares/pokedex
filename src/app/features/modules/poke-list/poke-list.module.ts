import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { SearchOutline } from '@ant-design/icons-angular/icons'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzTableModule } from 'ng-zorro-antd/table'

import { PokeListRoutingModule } from './poke-list-routing.module'
import { PokeListComponent } from './poke-list.component'

const icons = [SearchOutline]

@NgModule({
  declarations: [PokeListComponent],
  imports: [
    CommonModule,
    NzButtonModule,
    NzIconModule.forChild(icons),
    NzTableModule,
    PokeListRoutingModule
  ]
})
export class PokeListModule {}
