import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { ArrowLeftOutline } from '@ant-design/icons-angular/icons'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzListModule } from 'ng-zorro-antd/list'
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzTagModule } from 'ng-zorro-antd/tag'

import { SpinnerComponent } from '@shared/components/spinner/spinner.component'

import { PokeDetailRoutingModule } from './poke-detail-routing.module'
import { PokeDetailComponent } from './poke-detail.component'

const icons = [ArrowLeftOutline]

@NgModule({
  declarations: [PokeDetailComponent],
  imports: [
    CommonModule,
    NzButtonModule,
    NzGridModule,
    NzIconModule.forChild(icons),
    NzListModule,
    NzPageHeaderModule,
    NzSpaceModule,
    NzTagModule,
    SpinnerComponent,
    PokeDetailRoutingModule
  ]
})
export class PokeDetailModule {}
