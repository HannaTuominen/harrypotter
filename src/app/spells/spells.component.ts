import { Component, OnInit } from '@angular/core';
import { Spell } from './spells-spell';
import {HttpClient, HttpParams} from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';


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

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }
  selectedId: number;

  ngOnInit() {

    this.activatedRoute.params.subscribe((paramss: Params) => {
      const id = paramss.id;
      console.log(id);
      this.selectedId = id;
    });
    // API key
    const key = '$2a$10$tE9Q/PpSuP7rQLFkrB2IOOcl.0ptM34qLwotYCBjL/p9DIL.o4pMK';

    // create params to get all spells
    const params = new HttpParams().set('key', key);

    this.http.get('https://www.potterapi.com/v1/spells/', {responseType: 'json', params})
      .subscribe(response => this.saveCharacters(response));
  }

  saveCharacters(response) {
    console.log(response)
    this.spells = response;
  }
}
