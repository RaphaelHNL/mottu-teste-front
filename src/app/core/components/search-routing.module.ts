import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';



const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'search', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class SearchRoutingModule { }
