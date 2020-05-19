import { Router, ActivatedRoute, Params } from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Component, Input, OnInit, } from '@angular/core';
import { House } from './houses-house';
import { HarryPotterService } from '../services/harrypotter.service';

@Component({
  selector: 'app-house-view-detail',
  template: `<div class="container">
    <div>
      <p><b>Founder:</b> {{house.founder}}</p>
      <p><b>Head of House:</b> {{house.headOfHouse}}</p>
      <p><b>Mascot:</b> {{house.mascot}}</p>
      <p><b>School:</b> {{house.school}}</p>
      <p><b>Colors:</b>  {{house.name}} use these colors to identify themselves.</p>
      <ul class="list"><li *ngFor="let color of house.colors">{{color}}</li></ul>
      <p><b>values:</b>  {{house.name}} values these qualities in their members.</p>
      <ul class="list"><li *ngFor="let value of house.values">{{value}}</li></ul>
      <p><b>Members:</b> There are currently {{house.members.length}} notable members listed.</p>
      <ul class="list"><li *ngFor="let member of house.members">
        <a href="characters;id={{member._id}}">{{member.name}}</a>
      </li></ul>
    </div>
    <div><img class="image" src="../../assets/{{house.name}}.png" alt="house logo"></div>
  </div>
  `,
  styles: [`.list {list-style: none} .container {display: flex}
  @media only screen and (max-width: 480px) {
    .image {
      width: 100%
    }
  }`]
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
