import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickMortyApiService {
  urlRickMorty = 'https://rickandmortyapi.com/api/character';
  constructor(private http: HttpClient) {}

  getCharacter(name: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.urlRickMorty}/?name=${name}`);
  }
}
