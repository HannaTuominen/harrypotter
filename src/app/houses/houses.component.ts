import { Component, OnInit } from '@angular/core';
import { House } from './houses-house';
import {HttpClient, HttpParams} from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-houses',
  template: `<h1>houses</h1>
  <ul>
    <li *ngFor="let house of houses" [class.selected]="house._id == selectedId">
      <a routerLink="{{house._id}}">{{house.name}}</a>
    </li>
  </ul>`,
  styles: ['.selected { background-color: lightgray;}']
})
export class HousesComponent implements OnInit {

  houses: House[] = [];

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

    // create params to get all houses
    const params = new HttpParams().set('key', key);

    this.http.get('https://www.potterapi.com/v1/houses/', {responseType: 'json', params})
      .subscribe(response => this.savehouses(response));
  }

  savehouses(response) {
    this.houses = response;
  }
}
