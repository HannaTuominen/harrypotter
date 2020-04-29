import { Component, OnInit } from '@angular/core';
import { Character } from './characters-character';
import {HttpClient, HttpParams} from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-characters',
  template: `<h1>Characters</h1>
  <ul>
    <li *ngFor="let character of characters" [class.selected]="character._id == selectedId">
      <a routerLink="{{character._id}}">Name = {{character.name}}</a>
    </li>
  </ul>`,
  styles: ['.selected { background-color: lightgray;}']
})
export class CharactersComponent implements OnInit {

   characters: Character[] = [];

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }
  selectedId: number;

   fetchAllCharacters() {}

  ngOnInit() {

    this.activatedRoute.params.subscribe((paramss: Params) => {
      const id = paramss.id;
      console.log(id);
      this.selectedId = id;
    });
    // API key
    const key = '$2a$10$tE9Q/PpSuP7rQLFkrB2IOOcl.0ptM34qLwotYCBjL/p9DIL.o4pMK';

    // create params to get all Harry Potter characters in the Slytherin house
    const params = new HttpParams().set('key', key);
    // .set('house', 'Slytherin'); // Create new HttpParams

    this.http.get('https://www.potterapi.com/v1/characters/', {responseType: 'json', params})
      .subscribe(response => this.saveCharacters(response));
  }

  saveCharacters(response) {
    this.characters = response;
  }
}
