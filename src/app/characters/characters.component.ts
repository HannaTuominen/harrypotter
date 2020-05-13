import { Component, OnInit } from '@angular/core';
import { Character } from './characters-character';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { HarryPotterService} from '../services/harrypotter.service';

@Component({
  selector: 'app-characters',
  template: `
  <mat-drawer-container class="example-container" autosize>
    <mat-drawer #drawer class="example-sidenav" mode="side" [opened]="true">
      <div class="characters">
        <div class="char-header">
          <h1>Characters</h1>
        </div>
      <div class="char-btn" (click)="showFiller = false">
        <button type="button" class="mat-button-toggle" (click)="drawer.toggle()">
          <span class="material-icons" mat-button >
          keyboard_arrow_left
          </span>
        </button>
      </div>
      </div>
      <ul class="character-list">
        <li *ngFor="let character of characters" [class.selected]="character._id == selectedId">
          <button mat-button color="primary" (click)="newUrl(character._id)">{{character.name}}</button>
        </li>
      </ul>
    </mat-drawer>
    <div class="example-sidenav-content">
      <div *ngIf="!showFiller" (click)="showFiller = true">
        <button type="button" class="mat-button-toggle" (click)="drawer.toggle()">
        <span class="material-icons" mat-button >
        keyboard_arrow_right
        </span>
        </button>
      </div>
      <div>
        <app-viewcharacter-detail [currentUrl]="this.router.url"></app-viewcharacter-detail>
      </div>
    </div>

  </mat-drawer-container>
  `,

  styles: [`
  .example-container {
    width: 100%;
    height: 100vh;
    /*border: 1px solid rgba(0, 0, 0, 0.5);*/
  }

  .example-sidenav-content {
    display: flex;
    height: 100%;
    margin-left: 10px;
    /*align-items: center;*/
    /*justify-content: center;*/
  }

  .example-sidenav {
    padding: 10px;
    overflow: hidden;
  }
  .character-list {
    list-style-type: none;
  }
  .characters {
    display: flex;
  }
  .char-header {
    flex-grow: 1;
    margin-right: 5px;
  }
  .char-btn {
    flex-grow: 1;
    margin-right: 5px;
  }`]
})
export class CharactersComponent implements OnInit {
  showFiller = true;
  characters: Character[] = [];
  selectedId: number;
  constructor(public router: Router, private activatedRoute: ActivatedRoute, private harryPotterService: HarryPotterService) { }

  newUrl(charId) {
    this.router.navigate(['characters', {id: charId}]);
  }

  ngOnInit() {

  this.activatedRoute.params.subscribe((paramss: Params) => {
    const id = paramss.id;
    this.selectedId = id;
  });

  this.harryPotterService.fetchCharacters((result) => {
    this.characters = result;
  });
  }

}
