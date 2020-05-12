import { Component, OnInit } from '@angular/core';
import { House } from './houses-house';
import { ActivatedRoute, Params } from '@angular/router';
import { HarryPotterService } from '../services/harrypotter.service';

@Component({
  selector: 'app-houses',
  template: `
    <mat-accordion>
      <mat-expansion-panel *ngFor="let house of houses" (opened)="panelOpenState = true" (closed)="panelOpenState = false">
        <mat-expansion-panel-header >
          <mat-panel-title>
            <b class="titleheader">{{house.name}}</b>
          </mat-panel-title>
          <mat-panel-description>
          </mat-panel-description>
        </mat-expansion-panel-header>
        <app-house-view-detail [houseId]=house._id></app-house-view-detail>
      </mat-expansion-panel>
    </mat-accordion>
  `,
  styles: ['.selected { background-color: lightgray;} .titleheader { font-size: 18px}']
})
export class HousesComponent implements OnInit {
  panelOpenState = false;
  houses: House[] = [];

  constructor(private activatedRoute: ActivatedRoute, private harryPotterService: HarryPotterService) { }

  ngOnInit() {
    this.harryPotterService.fetchHouses((result) => {
      this.houses = result;
    });
  }
}
