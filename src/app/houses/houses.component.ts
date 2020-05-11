import { Component, OnInit } from '@angular/core';
import { House } from './houses-house';
import { ActivatedRoute, Params } from '@angular/router';
import { HarryPotterService } from '../services/harrypotter.service';

@Component({
  selector: 'app-houses',
  template: `
  <nav mat-tab-nav-bar>
      <a mat-tab-link
         *ngFor="let house of houses"
         [routerLink]="house._id"
         routerLinkActive #rla="routerLinkActive"
         [active]="rla.isActive">
        {{house.name}}
      </a>
  </nav>
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
