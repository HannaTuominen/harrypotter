import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, } from '@angular/core';
import { Character } from './characters-character';

@Component({
  selector: 'app-view-detail',
  template: `<h2>{{character.id}}</h2>
<!--  <p>date IS: {{character.name}} </p>-->
  <button (click)="back()" href="">Back</button>`
})
export class CharactersDetailComponent implements OnInit {
  character: Character = {id: undefined, /*name: ''*/};
  characters: Character[] = [];
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: HttpClient) {}


  back() {
    this.router.navigate(['characters', {id: this.character.id}]);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const id = params.id;
      this.http.get<Character>('https://w3qa5ydb4l.execute-api.eu-west-1.amazonaws.com/prod/finnishCoronaData').subscribe(jsonObject => {
        this.characters = this.savecharacters(jsonObject);
        this.character = this.characters[id - 1];
      });
    });
  }

  savecharacters(response) {
    return response.confirmed;
  }
}
