import { Component, OnInit } from '@angular/core';
import { Character } from './characters-character';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-characters',
  template: `<h1>characters</h1>
  <ul>
    <li *ngFor="let character of characters" [class.selected]="character.id == selectedId">
      <a routerLink="{{character.id}}">ID = {{character.id}}</a>
    </li>
  </ul>`,
  styles: ['.selected { background-color: lightgray;}']
})
export class CharactersComponent implements OnInit {

  characters: Character[] = [];

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }
  selectedId: number;

  ngOnInit() {

    this.activatedRoute.params.subscribe((params: Params) => {
      const id = params.id;
      this.selectedId = id;
    });

    this.http.get('https://w3qa5ydb4l.execute-api.eu-west-1.amazonaws.com/prod/finnishCoronaData')
      .subscribe(response => this.savecharacters(response));
  }

  savecharacters(response) {
    this.characters = response.confirmed;
  }
}
