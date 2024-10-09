import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponent } from './favorites.component';

@NgModule({
    declarations: [
        FavoritesComponent
    ],
    imports: [
        CommonModule,
        FavoritesRoutingModule,
        FormsModule
    ],
    providers: []
})
export class FavoritesModule { }
