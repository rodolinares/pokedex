import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { path: '', redirectTo: 'pokemon', pathMatch: 'full' },
  {
    path: 'pokemon/:id',
    loadChildren: () =>
      import('./features/modules/poke-detail/poke-detail.module').then(
        m => m.PokeDetailModule
      )
  },
  {
    path: 'pokemon',
    loadChildren: () =>
      import('./features/modules/poke-list/poke-list.module').then(
        m => m.PokeListModule
      )
  },
  { path: '**', redirectTo: 'pokemon' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
