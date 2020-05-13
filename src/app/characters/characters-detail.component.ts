import { Router, ActivatedRoute, Params } from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Component, Input, OnInit, } from '@angular/core';
import { Character } from './characters-character';
import {HarryPotterService} from '../services/harrypotter.service';

@Component({
  selector: 'app-viewcharacter-detail',
  template: `
    <div *ngIf="currentUrl != '/characters'; else welcome">
        <h2>{{character.name}}</h2>
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
    </div>
  <ng-template #welcome>
    <h1>WELCOME TO CHARACTERS </h1>
  </ng-template>`
})
export class CharactersDetailComponent implements OnInit {
  @Input() currentUrl: string;
  character: Character = {_id: '', name: '', bloodStatus: '', deathEater: undefined,
    dumbledoresArmy: undefined, house: 'unknown', ministryOfMagic: undefined, orderOfThePhoenix: undefined, role: '',
    school: 'unknown', alias: '', animagus: '', boggart: '', patronus: '', species: '', wand: ''};

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: HttpClient,
              private harryPotterService: HarryPotterService) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((paramss: Params) => {
      const id = paramss.id;
      this.harryPotterService.fetchCharactersById(id, (jsonObject) => {
        this.character = jsonObject;
      });
      console.log('CHANGING CHARACTER DETAIL' + this.currentUrl);
    });
  }

}
