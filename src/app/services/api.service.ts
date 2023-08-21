import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterResponse } from '../models/interfaces/character-response.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = "https://rickandmortyapi.com/api/character";

  constructor(private http: HttpClient) { }

  getCharacters = (): Observable<CharacterResponse> => {
    return this.http.get<CharacterResponse>(this.url);
  }
}
