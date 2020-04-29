import { Router, ActivatedRoute, Params } from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Component, OnInit, } from '@angular/core';
import { House } from './houses-house';

@Component({
  selector: 'app-view-detail',
  template: `<h2>{{house.name}}</h2>
  <p>Founder: {{house.founder}}</p>
  <p>Head of House: {{house.headOfHouse}}</p>
  <p>Mascot: {{house.mascot}}</p>
  <p>School: {{house.school}}</p>
  <p>Colors:</p><ul><li *ngFor="let house of houses">{{house.colors}}</li></ul>
  <p>values:</p><ul><li *ngFor="let house of houses">{{house.values}}</li></ul>
  <p>Members:</p><ul><li *ngFor="let house of houses">{{house.members}}</li></ul>
  <button (click)="back()" href="">Back</button>`
})
export class HousesDetailComponent implements OnInit {
  house: House = {_id: '', colors: [], founder: '', headOfHouse: '', mascot: '', name: '', school: '', values: [], members: []};
  houses: House[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: HttpClient) {}

  back() {
    this.router.navigate(['houses', {id: this.house._id}]);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((paramss: Params) => {
      const id = paramss.id;

      // API key
      const key = '$2a$10$tE9Q/PpSuP7rQLFkrB2IOOcl.0ptM34qLwotYCBjL/p9DIL.o4pMK';

      // create params to get all houses
      const params = new HttpParams().set('key', key);
      this.http.get<House>('https://www.potterapi.com/v1/houses/', {responseType: 'json', params}).subscribe(jsonObject => {
        this.houses = this.saveCharacters(jsonObject);
        this.house = this.houses.filter(character => {
          return character._id === id;
        })[0];
      });
    });
  }

  saveCharacters(response) {
    console.log(response)
    return response;
  }
}
