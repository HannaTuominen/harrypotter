import { Router, ActivatedRoute, Params } from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Component, OnInit, } from '@angular/core';
import { Spell } from './spells-spell';

@Component({
  selector: 'app-view-detail',
  template: `<h2>{{spell._id}}</h2>
  <button (click)="back()" href="">Back</button>`
})
export class SpellsDetailComponent implements OnInit {
  spell: Spell = {_id: ''};
  spells: Spell[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: HttpClient) {}

  back() {
    this.router.navigate(['spells', {id: this.spell._id}]);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((paramss: Params) => {
      const id = paramss.id;

      // API key
      const key = '$2a$10$tE9Q/PpSuP7rQLFkrB2IOOcl.0ptM34qLwotYCBjL/p9DIL.o4pMK';

      // create params to get all spells
      const params = new HttpParams().set('key', key);
      this.http.get<Spell>('https://www.potterapi.com/v1/spells/', {responseType: 'json', params}).subscribe(jsonObject => {
        this.spells = this.saveCharacters(jsonObject);
        this.spell = this.spells.filter(spell => {
          return spell._id === id;
        })[0];
      });
    });
  }

  saveCharacters(response) {
    console.log(response)
    return response;
  }
}
