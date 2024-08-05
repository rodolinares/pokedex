import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

import { SearchOutline } from '@ant-design/icons-angular/icons'
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'
import { NzTableModule } from 'ng-zorro-antd/table'

import { PokeListRoutingModule } from './poke-list-routing.module'
import { PokeListComponent } from './poke-list.component'

const icons = [SearchOutline]

@NgModule({
  declarations: [PokeListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzAutocompleteModule,
    NzButtonModule,
    NzIconModule.forChild(icons),
    NzInputModule,
    NzPageHeaderModule,
    NzTableModule,
    PokeListRoutingModule
  ]
})
export class PokeListModule {}
