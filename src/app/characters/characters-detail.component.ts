import { Router, ActivatedRoute, Params } from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Component, Input, OnInit, } from '@angular/core';
import { Character } from './characters-character';
import {HarryPotterService} from '../services/harrypotter.service';

@Component({
  selector: 'app-viewcharacter-detail',
  template: `
    <div *ngIf="currentUrl != '/characters'; else welcome">
      <div>
        <h1>{{character.name}}</h1>
        <div>
          <b>Order of the Phoenix:</b>
          <ng-container *ngIf="character.orderOfThePhoenix; else OOTPfalse">
            <ng-container>
              <img src="../../assets/true.png">
            </ng-container>
          </ng-container>
          <ng-template #OOTPfalse>
            <ng-container *ngIf="!character.orderOfThePhoenix; else question" class="images">
              <img src="../../assets/false.png">
            </ng-container>
          </ng-template>
        </div>
        <div>
          <b>Ministry of Magic:</b>
          <ng-container *ngIf="character.ministryOfMagic; else momfalse">
            <img src="../../assets/true.png">
          </ng-container>
          <ng-template #momfalse>
            <ng-container *ngIf="!character.ministryOfMagic; else question">
              <img src="../../assets/false.png">
            </ng-container>
          </ng-template>
        </div>
        <div>
          <b>Blood Status:</b>
          <ng-container *ngIf="character.bloodStatus; else question">
            {{character.bloodStatus}}
          </ng-container>
        </div>
        <div>
          <b>Death Eater:</b>
          <ng-container *ngIf="character.deathEater; else defalse">
            <img src="../../assets/true.png">
          </ng-container>
          <ng-template #defalse>
            <ng-container *ngIf="!character.deathEater; else question">
              <img src="../../assets/false.png">
            </ng-container>
          </ng-template>
        </div>
        <div>
          <b>Dumbledores Army:</b>
          <ng-container *ngIf="character.dumbledoresArmy; else dafalse">
            <img src="../../assets/true.png">
          </ng-container>
          <ng-template #dafalse>
            <ng-container *ngIf="!character.dumbledoresArmy; else question">
              <img src="../../assets/false.png">
            </ng-container>
          </ng-template>
        </div>
        <div>
          <b>Role:</b>
          <ng-container *ngIf="character.role; else question">
            {{character.role}}
          </ng-container>
        </div>
        <div>
          <b>House:</b>
          <ng-container *ngIf="character.house; else question">
            {{character.house}}
          </ng-container>
        </div>
        <div>
          <b>School:</b>
          <ng-container *ngIf="character.school; else question">
            {{character.school}}
          </ng-container>
        </div>
        <div>
          <b>Alias:</b>
          <ng-container *ngIf="character.alias; else question">
            {{character.alias}}
          </ng-container>
        </div>
        <div>
          <b>Animagus:</b>
          <ng-container *ngIf="character.animagus; else question">
            {{character.animagus}}
          </ng-container>
        </div>
        <div>
          <b>Boggart:</b>
          <ng-container *ngIf="character.boggart; else question">
            {{character.boggart}}
          </ng-container>
        </div>
        <div>
          <b>Patronus:</b>
          <ng-container *ngIf="character.patronus; else question">
            {{character.patronus}}
          </ng-container>
        </div>
        <div>
          <b>Species:</b>
          <ng-container  *ngIf="character.species; else question">
            {{character.species}}
          </ng-container>
        </div>
        <div>
          <b>Wand:</b>
          <ng-container *ngIf="character.wand; else question">
            {{character.wand}}
          </ng-container>
        </div>
        <ng-template #question >
          <img src="../../assets/questionmark.png">
        </ng-template>
      </div>
    </div>
  <ng-template #welcome>
    <h1>CHARACTERS</h1>
    <div class="container">
      <div class="infoText">
        <p>There are currently {{this.amountOfCharacters}} notable characters in total.</p>
        <p>Each of the characters have information about their status in the Order of Phoenix, Ministry of Magic, their blood status,
          if they are a death eater or if they belong to Dumbpledore's army or not. Each character also has a role,
          house they belong to and the school they went to and a possible alias, animagus, boggart,
          patrous, species and their wand type if they are known information.</p>
        <p>These characters are part of the Harry Potter universe and are mentioned in some
          place in the world of books and movies and other media.</p>
      </div>
      <div class="helpBox">
        <h3>Some of the information is displayed via images as follow:</h3>
        <img src="../../assets/questionmark.png"> <p>Unknown information</p>
        <img src="../../assets/true.png"> <p>True, is part of X</p>
        <img src="../../assets/false.png"> <p>False, is not part of X</p>
      </div>
    </div>
  </ng-template>`,
  styles: [`.helpBox {border: 1px solid black; width: fit-content; margin: 10px; padding:10px; float:right;} .infoText {width:70%} .container {display: flex}`]
})
export class CharactersDetailComponent implements OnInit {
  @Input() currentUrl: string;
  character: Character = {_id: '', name: '', bloodStatus: '', deathEater: undefined,
    dumbledoresArmy: undefined, house: '', ministryOfMagic: undefined, orderOfThePhoenix: undefined, role: '',
    school: '', alias: '', animagus: '', boggart: '', patronus: '', species: '', wand: ''
  };
  amountOfCharacters: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: HttpClient,
              private harryPotterService: HarryPotterService) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((paramss: Params) => {
      const id = paramss.id;
      this.harryPotterService.fetchCharactersById(id, (jsonObject) => {
        this.character = jsonObject;
      });
      this.harryPotterService.fetchCharacters((results) => {
        this.amountOfCharacters = results.length;
      });
      console.log('CHANGING CHARACTER DETAIL' + this.currentUrl);
      console.log(typeof(this.character.orderOfThePhoenix) + this.character.orderOfThePhoenix);
    });
  }

}
