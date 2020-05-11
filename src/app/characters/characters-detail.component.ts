import { Router, ActivatedRoute, Params } from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Component, OnInit, } from '@angular/core';
import { Character } from './characters-character';
import {HarryPotterService} from '../services/harrypotter.service';

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
  <p>Alias: {{character.alias}}</p>
  <p>Animagus: {{character.animagus}}</p>
  <p>Boggart: {{character.boggart}}</p>
  <p>Patronus: {{character.patronus}}</p>
  <p>Species: {{character.species}}</p>
  <p>Wand: {{character.wand}}</p>
<!--  <p>date IS: {{character.name}} </p>-->
  <button (click)="back()" href="">Back</button>`
})
export class CharactersDetailComponent implements OnInit {
  character: Character = {_id: '', name: '', bloodStatus: '', deathEater: undefined,
    dumbledoresArmy: undefined, house: 'unknown', ministryOfMagic: undefined, orderOfThePhoenix: undefined, role: '',
    school: 'unknown', alias: '', animagus: '', boggart: '', patronus: '', species: '', wand: ''};

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: HttpClient,
              private harryPotterService: HarryPotterService) {}

  back() {
    this.router.navigate(['characters', {id: this.character._id}]);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((paramss: Params) => {
      const id = paramss.id;
      this.harryPotterService.fetchCharactersById(id, (jsonObject) => {
        this.character = jsonObject;
      });
    });
  }

}
