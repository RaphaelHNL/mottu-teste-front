import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './favorites.component';

const routes: Routes = [
  { path: '', component: FavoritesComponent },  // Mude o path para vazio
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class FavoritesRoutingModule { }
