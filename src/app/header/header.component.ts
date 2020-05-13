import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-header',
  template: `<!-- menu -->
    <mat-toolbar color="primary">
      <!-- logo -->
      <div class="navbar-brand">
        <img src="./assets/headerimage.png" alt="Header Image" width="100%" class="pointer" (click)="redirect()">
      </div>
      <mat-toolbar-row>
        <span class="menu-spacer"></span>
          <button mat-button
             *ngFor="let link of navLinks"
             [routerLink]="link.path"
             routerLinkActive ="active">
            {{link.label}}
          </button>
        <span class="menu-spacer"></span>
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
  .menu-spacer {
    flex-grow: 1
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
  `]
})
export class HeaderComponent implements OnInit {
  navLinks = [
    {label: 'Houses', path: 'houses'},
    {label: 'Characters', path: 'characters'},
    {label: 'Spells', path: 'spells'}
  ];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  redirect() {
    this.router.navigate(['./']);
  }

}
