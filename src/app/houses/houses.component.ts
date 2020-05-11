import { Component, OnInit } from '@angular/core';
import { House } from './houses-house';
import { ActivatedRoute, Params } from '@angular/router';
import { HarryPotterService } from '../services/harrypotter.service';

@Component({
  selector: 'app-houses',
  template: `
  <mat-tab-group>
<!--    <li *ngFor="let house of houses" [class.selected]="house._id == selectedId">-->
<!--      <a routerLink="{{house._id}}">{{house.name}}</a>-->
<!--    </li>-->
    <ng-container *ngFor="let house of houses" [class.selected]="house._id == selectedId">
      <mat-tab label="{{house.name}}" routerLink="{{house._id}}"> <a routerLink="{{house._id}}">{{house.name}}</a></mat-tab>
    </ng-container>
  </mat-tab-group>
<!--  <ul>-->
<!--    <li *ngFor="let house of houses" [class.selected]="house._id == selectedId">-->
<!--      <a routerLink="{{house._id}}">{{house.name}}</a>-->
<!--    </li>-->
<!--  </ul>-->
  `,
  styles: ['.selected { background-color: lightgray;}']
})
export class HousesComponent implements OnInit {

  houses: House[] = [];
  selectedId: number;

  constructor(private activatedRoute: ActivatedRoute, private harryPotterService: HarryPotterService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((paramss: Params) => {
      const id = paramss.id;
      console.log(id);
      this.selectedId = id;
    });
    this.harryPotterService.fetchHouses((result) => {
      this.houses = result;
    });
  }
}
