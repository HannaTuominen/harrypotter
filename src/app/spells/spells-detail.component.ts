import { Router, ActivatedRoute, Params } from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Component, OnInit, } from '@angular/core';
import { Spell } from './spells-spell';
import {HarryPotterService} from '../harrypotter.service';

@Component({
  selector: 'app-view-detail',
  template: `<h2>{{spell.spell}}</h2>
  <p>effect: {{spell.effect}}</p>
  <p>type: {{spell.type}}</p>
  <button (click)="back()" href="">Back</button>`
})
export class SpellsDetailComponent implements OnInit {
  spell: Spell = {_id: '', spell: '', effect: '', type: ''};
  spells: Spell[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: HttpClient, private harryPotterService: HarryPotterService) {}

  back() {
    this.router.navigate(['spells', {id: this.spell._id}]);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((paramss: Params) => {
      const id = paramss.id;
      this.harryPotterService.fetchSpellsById(id, (jsonObject) => {
        this.spell = jsonObject[0];
      });
    });
  }
}
