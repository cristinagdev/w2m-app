import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Hero } from '../interfaces/hero.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private API_URL = environment.apiUrl;
  constructor(private _httpClient: HttpClient) { }

  getListHeroes() : Observable<Hero[]> {
    return this._httpClient.get<Hero[]>(`${this.API_URL}/heroes?_page=1&_limit=10`)
  }

  getHero(id: number): Observable<Hero>{
    return this._httpClient.get<Hero>(`${this.API_URL}/heroes/${id}`)
  }

  editHero(id: number, editHero: Hero): Observable <Hero> {
    return this._httpClient.put<Hero>(`${this.API_URL}/heroes/${id}`, editHero)
  }

  deleteHero(id: number): Observable<Hero> {
    return this._httpClient.delete<Hero>(`${this.API_URL}/heroes/${id}`)
  }

  createHero(hero: Hero): Observable<Hero>{
    return this._httpClient.post<Hero>(`${this.API_URL}/heroes`,hero)
  }

  searchHero(param: string) {
    return this._httpClient.get<Hero[]>(`${this.API_URL}/heroes?name_like=${param}`)
  }

}
