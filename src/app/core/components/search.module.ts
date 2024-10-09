import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { SearchRoutingModule } from './search-routing.module';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
@NgModule({
    declarations: [
        SearchComponent,
    ],
    imports: [
        CommonModule,
        SearchRoutingModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule
    ],
    providers: []
})
export class SearchModule { }