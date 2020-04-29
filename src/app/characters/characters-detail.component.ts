import { Router, ActivatedRoute, Params } from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Component, OnInit, } from '@angular/core';
import { Character } from './characters-character';

@Component({
  selector: 'app-view-detail',
  template: `<h2>{{character.name}}</h2>
  <p>Order of the Phoenix: {{character.orderOfThePhoenix}}</p>
  <p> Ministry of Magic: {{character.ministryOfMagic}}</p>
  <p> Blood Status: {{character.bloodStatus}}</p>
  <p>Death Eater: {{character.deathEater}}</p>
  <p>Dumbledores Army: {{character.dumbledoresArmy}}</p>
  <p>Role: {{character.role}}</p>
  <p>House: {{character.house}}</p>
  <p>School: {{character.school}}</p>
<!--  <p>date IS: {{character.name}} </p>-->
  <button (click)="back()" href="">Back</button>`
})
export class CharactersDetailComponent implements OnInit {
  character: Character = {_id: '', name: '', bloodStatus: '', deathEater: undefined,
    dumbledoresArmy: undefined, house: 'unknown', ministryOfMagic: undefined, orderOfThePhoenix: undefined, role: '', school: 'unknown'};
  characters: Character[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: HttpClient) {}

  back() {
    this.router.navigate(['characters', {id: this.character._id}]);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((paramss: Params) => {
      const id = paramss.id;

      // API key
      const key = '$2a$10$tE9Q/PpSuP7rQLFkrB2IOOcl.0ptM34qLwotYCBjL/p9DIL.o4pMK';

      // create params to get all Harry Potter characters in the Slytherin house
      const params = new HttpParams().set('key', key);
      // .set('house', 'Slytherin'); // Create new HttpParams
      this.http.get<Character>('https://www.potterapi.com/v1/characters/', {responseType: 'json', params}).subscribe(jsonObject => {
        this.characters = this.saveCharacters(jsonObject);
        this.character = this.characters.filter(character => {
          return character._id === id;
        })[0];
      });
    });
  }

  saveCharacters(response) {
    console.log(response)
    return response;
  }
}
