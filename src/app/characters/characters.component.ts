import { Component, OnInit } from '@angular/core';
import { Character } from './characters-character';
import { ActivatedRoute, Params } from '@angular/router';
import { HarryPotterService} from '../harrypotter.service';

@Component({
  selector: 'app-characters',
  template: `<h1>Characters</h1>
  <ul>
    <li *ngFor="let character of characters" [class.selected]="character._id == selectedId">
      <a routerLink="{{character._id}}">{{character.name}}</a>
    </li>
  </ul>`,
  styles: ['.selected { background-color: lightgray;}']
})
export class CharactersComponent implements OnInit {

   characters: Character[] = [];
   selectedId: number;
   constructor(private activatedRoute: ActivatedRoute, private harryPotterService: HarryPotterService) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe((paramss: Params) => {
      const id = paramss.id;
      console.log(id);
      this.selectedId = id;
    });

    this.harryPotterService.fetchCharacters((result) => {
      this.characters = result;
    });
  }

}
