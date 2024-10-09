import { Component } from '@angular/core';
import { RickMortyApiService } from './shared/services/rick-morty-api.service';
import { FavoriteService } from './shared/services/favorites.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mottu-challenge';
  count: number = 0;
  constructor(
    private favoriteService: FavoriteService,
    private router: Router
  ){}

  ngOnInit() {
    this.favoriteService.favoriteCharacters$.subscribe(favorites => {
      this.count = favorites.length;
    });
  }


  navigatePage(page: string){
    this.router.navigate([page]);
  }

  isActive(route: string): boolean {
    return this.router.url.includes(route);
  }
}
