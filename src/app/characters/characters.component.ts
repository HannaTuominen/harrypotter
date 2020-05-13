import { Component, OnInit } from '@angular/core';
import { Character } from './characters-character';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { HarryPotterService} from '../services/harrypotter.service';

@Component({
  selector: 'app-characters',
  template: `
  <mat-drawer-container class="example-container" autosize>
    <mat-drawer #drawer class="example-sidenav" mode="side">
      <h1>Characters</h1>
<!--      <p *ngIf="showFiller">Lorem, ipsum dolor sit amet consectetur.</p>-->
<!--      <button (click)="showFiller = !showFiller" mat-raised-button>-->
<!--        Toggle extra text-->
<!--      </button>-->
      <ul>
        <li *ngFor="let character of characters" [class.selected]="character._id == selectedId">
          <Button (click)="newUrl(character._id)">{{character.name}}</Button>
        </li>
      </ul>
    </mat-drawer>
    <div class="example-sidenav-content">
      <button type="button" mat-button (click)="drawer.toggle()">
        Toggle sidenav
      </button>
      <app-viewcharacter-detail></app-viewcharacter-detail>
    </div>

  </mat-drawer-container>
  `,

  styles: [`.selected { background-color: lightgray;}
  .example-container {
    width: 100%;
    height: 100vh;
    /*border: 1px solid rgba(0, 0, 0, 0.5);*/
  }

  .example-sidenav-content {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
  }

  .example-sidenav {
    padding: 20px;
  }`]
})
export class CharactersComponent implements OnInit {
  showFiller = false;
  characters: Character[] = [];
  selectedId: number;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private harryPotterService: HarryPotterService) { }

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
