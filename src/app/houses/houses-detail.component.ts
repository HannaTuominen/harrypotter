import { Router, ActivatedRoute, Params } from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Component, Input, OnInit, } from '@angular/core';
import { House } from './houses-house';
import { HarryPotterService } from '../services/harrypotter.service';

@Component({
  selector: 'app-house-view-detail',
  template: `<h2>{{house.name}}</h2>
  <p>Founder: {{house.founder}}</p>
  <p>Head of House: {{house.headOfHouse}}</p>
  <p>Mascot: {{house.mascot}}</p>
  <p>School: {{house.school}}</p>
  <p>Colors:</p><ul><li *ngFor="let color of house.colors">{{color}}</li></ul>
  <p>values:</p><ul><li *ngFor="let value of house.values">{{value}}</li></ul>
  <p>Members:</p><ul><li *ngFor="let member of house.members">{{member.name}}</li></ul>
  `
})
export class HousesDetailComponent implements OnInit {
  house: House = {_id: '', colors: [], founder: '', headOfHouse: '', mascot: '', name: '', school: '', values: [], members: []};
  @Input() houseId: string;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: HttpClient,
              private harryPotterService: HarryPotterService) {}

  ngOnInit() {
      const id = this.houseId;
      this.harryPotterService.fetchHouseById(id, (jsonObject) => {
        this.house = jsonObject[0];
    });
  }
}
