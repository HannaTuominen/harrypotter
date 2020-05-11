import { Component, OnInit } from '@angular/core';
import { Spell } from './spells-spell';
import { ActivatedRoute, Params } from '@angular/router';
import { HarryPotterService} from '../services/harrypotter.service';

@Component({
  selector: 'app-spells',
  template: `<h1>Spells</h1>
  <ul>
    <li *ngFor="let spell of spells" [class.selected]="spell._id == selectedId">
      <a routerLink="{{spell._id}}">{{spell.spell}}</a>
    </li>
  </ul>`,
  styles: ['.selected { background-color: lightgray;}']
})
export class SpellsComponent implements OnInit {

  spells: Spell[] = [];

  constructor(private activatedRoute: ActivatedRoute, private harryPotterService: HarryPotterService) { }
  selectedId: number;

  ngOnInit() {

    this.activatedRoute.params.subscribe((paramss: Params) => {
      const id = paramss.id;
      console.log(id);
      this.selectedId = id;
    });

    this.harryPotterService.fetchSpells((result) => {
      this.spells = result;
    });
  }
}
