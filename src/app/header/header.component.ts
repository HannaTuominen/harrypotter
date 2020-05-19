import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HarryPotterService} from '../services/harrypotter.service';
@Component({
  selector: 'app-header',
  template: `<!-- menu -->
    <mat-toolbar color="primary">
      <!-- logo -->
      <div class="navbar-brand">
        <img src="./assets/headerimage.png" alt="Header Image" width="100%" class="pointer" (click)="redirect()">
      </div>
      <mat-toolbar-row>
        <span class="menu-spacer-left">
        </span>
        <span class="menu-items">
          <button mat-button
                  *ngFor="let link of navLinks"
                  [routerLink]="link.path"
                  routerLinkActive ="active">
            {{link.label}}
          </button>
        </span>
        <span class="menu-spacer-right">
        </span>
        <span class="theme">
            <mat-select placeholder="Theme">
              <mat-option *ngFor="let house of houses" [value]="house.name">
                {{house.name}}
              </mat-option>
            </mat-select>
          </span>
      </mat-toolbar-row>

    </mat-toolbar>`,
  styles: [`
    .active {
    background-color: #9a1c1f;
  }
  .pointer {
    cursor: pointer;
    display: block;
  }
  .menu-spacer-left {
    flex-grow: 3
  }
  .menu-spacer-right {
    flex-grow: 2
  }
  .mat-tab-link {
    color: white;
  }
  .navbar-brand {
    padding: 0;
    margin: 0;
  }

  mat-toolbar-row {
    height: 50px;
  }
  .mat-button {
    height: 100%;
    padding-left: 30px;
    padding-right: 30px;
  }
  .theme {
    flex-grow: 0.5
  }`]
})
export class HeaderComponent implements OnInit {
  navLinks = [
    {label: 'Houses', path: 'houses'},
    {label: 'Characters', path: 'characters'},
    {label: 'Spells', path: 'spells'}
  ];
  houses = [];
  constructor(private router: Router, private harryPotterService: HarryPotterService) { }

  ngOnInit(): void {
    this.harryPotterService.fetchHouses((result) => {
      this.houses = result;
    });
  }
  redirect() {
    this.router.navigate(['./']);
  }

}
