import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, debounceTime, of } from 'rxjs';
import { FavoriteService, Character } from '../../../shared/services/favorites.service';
import { RickMortyApiService } from '../../../shared/services/rick-morty-api.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchQuery: string = '';
  characters: Character[] = [];
  hasError: boolean = false;
  searchControl = new FormControl('');
  constructor(
    private rickMortyService: RickMortyApiService,
    private favoriteService: FavoriteService,
    private router: Router
  ){}

  ngOnInit(){
    this.onSearch();
    this.searchControl.valueChanges.pipe(
      debounceTime(300)
    ).subscribe((query: any) => {
      this.searchQuery = query;
      this.onSearch();  
    });
    this.getFavoritesCharacters();
  }


  onSearch() {
    this.rickMortyService.getCharacter(this.searchQuery)
      .pipe(
        catchError(error => {
          this.hasError = true;
          console.error('Erro ao buscar personagens:', error); 
          return of(null);
        })
      )
      .subscribe((response: any) => {
        if (response && Array.isArray(response.results)) {
          this.characters = response.results;
          this.getFavoritesCharacters();
          this.hasError = false;
        } else {
          this.hasError = true;
        }
      });
  }


   updateFavoriteStatus(favoriteCharacters: Character[]) {
    this.characters.forEach(character => {
      character.isFavorite = favoriteCharacters.some(fav => fav.id === character.id);
    });
  }

  getFavoritesCharacters(){
    this.favoriteService.favoriteCharacters$.subscribe(favorites => {
      this.updateFavoriteStatus(favorites);
    });
  }

  toggleFavorite(character: Character) {
    this.favoriteService.toggleFavorite(character);
  }


}
