import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;  
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];  
  url: string;
  created: string;  

  isFavorite?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private favoriteCharacters = new BehaviorSubject<Character[]>([]);
  favoriteCharacters$ = this.favoriteCharacters.asObservable();

  constructor() {}

  toggleFavorite(character: Character) {
    let currentFavorites = this.favoriteCharacters.getValue();
    const existingFavorite = currentFavorites.find(fav => fav.id === character.id);
  
    if (existingFavorite) {
      // Remove dos favoritos se já estiver
      currentFavorites = currentFavorites.filter(fav => fav.id !== character.id);
      character.isFavorite = false;  // Marca como não favoritado
    } else {
      // Adiciona aos favoritos
      currentFavorites.push(character);
      character.isFavorite = true;  // Marca como favoritado
    }
  
    this.favoriteCharacters.next(currentFavorites);
  }


  getFavoriteCount() {
    return this.favoriteCharacters.getValue().length;
  }
}
