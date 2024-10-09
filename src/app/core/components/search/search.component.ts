import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { FavoriteService, Character } from '../../../shared/services/favorites.service';
import { RickMortyApiService } from '../../../shared/services/rick-morty-api.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchQuery = '';
  characters: Character[] = [];
  hasError: boolean = false;
  constructor(
    private rickMortyService: RickMortyApiService,
    private favoriteService: FavoriteService,
    private router: Router
  ){}

  ngOnInit(){
    this.onSearch();
  }


  onSearch() {
    this.rickMortyService.getCharacter(this.searchQuery)
      .pipe(
        catchError(error => {
          if (error.status === 404) {
            this.hasError = true;
            this.characters = [];
          }
          return of(null);
        })
      )
      .subscribe((response: any) => {
        if (response) {
          this.characters = response.results;
          this.hasError = false;
        }
      });
  }

  toggleFavorite(character: Character) {
    this.favoriteService.toggleFavorite(character);
  }

  favorites() {
    this.router.navigate(['/favorites']);
  }

}
