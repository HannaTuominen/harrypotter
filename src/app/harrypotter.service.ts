import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Character} from './characters/characters-character';

@Injectable({
  providedIn: 'root'
})
export class HarryPotterService {
  private http: HttpClient;
  key = '$2a$10$tE9Q/PpSuP7rQLFkrB2IOOcl.0ptM34qLwotYCBjL/p9DIL.o4pMK';

  constructor(http: HttpClient) {
    this.http = http;
  }

  fetchHouses(callBackFunction) {
    // create params to get all houses
    const params = new HttpParams().set('key', this.key);
    this.http.get('https://www.potterapi.com/v1/houses/', {responseType: 'json', params})
      .subscribe(response => callBackFunction(response));
  }
  fetchHouseById(houseId, callBackFunction) {
    const params = new HttpParams().set('key', this.key);
    this.http.get<Character>('https://www.potterapi.com/v1/houses/' + houseId, {responseType: 'json', params})
      .subscribe(response => callBackFunction(response));
  }
  fetchCharacters(callBackFunction) {
    const params = new HttpParams().set('key', this.key);
    this.http.get('https://www.potterapi.com/v1/characters/', {responseType: 'json', params})
      .subscribe(response => callBackFunction(response));
  }

  fetchSpells(callBackFunction) {
    const params = new HttpParams().set('key', this.key);
    this.http.get('https://www.potterapi.com/v1/spells/', {responseType: 'json', params})
      .subscribe(response => callBackFunction(response));
  }
  fetchSpellsById(spellId, callBackFunction) {
    const params = new HttpParams().set('key', this.key);
    this.http.get('https://www.potterapi.com/v1/spells/', {responseType: 'json', params})
      .subscribe(response => callBackFunction(response));
  }

  fetchCharactersById(id, callBackFunction) {
    const params = new HttpParams().set('key', this.key);
    this.http.get('https://www.potterapi.com/v1/characters/' + id, {responseType: 'json', params})
      .subscribe(response => callBackFunction(response));
  }

  fetchCharactersByHouse(house, callBackFunction) {
    const params = new HttpParams().set('key', this.key).set('house', house);
    this.http.get<Character>('https://www.potterapi.com/v1/characters/', {responseType: 'json', params})
      .subscribe(response => callBackFunction(response));
  }
}
