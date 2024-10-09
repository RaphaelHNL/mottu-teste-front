import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Character, FavoriteService } from '../../../shared/services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
  favoriteCharacters: Character[] = [];

  constructor(
    private favoriteService: FavoriteService,
    private router: Router
  ) {
    this.favoriteService.favoriteCharacters$.subscribe(favorites => {
      this.favoriteCharacters = favorites;
    });
  }

  navigatePage(){
    this.router.navigate(['/search']);
  }
  
  removeFavorite(character: Character) {
    this.favoriteService.toggleFavorite(character);
  }

}
