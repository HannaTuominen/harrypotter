import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-header',
  template: `<!-- logo -->
    <div class="navbar-brand">
      <a class="navbar-item">
        <img src="./assets/headerimage.png" alt="Header Image" width="100%" class="pointer" (click)="redirect()">
      </a>
    </div>
    <!-- menu -->
    <mat-toolbar color="primary">
      <mat-toolbar-row>
        <h1>Harry Potter</h1>
        <span class="menu-spacer"></span>

        <div>
          <a mat-button [routerLink]="'characters'" routerLinkActive="active">Characters</a>
          <a mat-button [routerLink]="'houses'" routerLinkActive="active">Houses</a>
          <a mat-button [routerLink]="'spells'" routerLinkActive="active">Spells</a>
        </div>
      </mat-toolbar-row>

    </mat-toolbar>`,
  styles: [`.active { background-color: lightgray; } .pointer {cursor: pointer}`]
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  redirect() {
    this.router.navigate(['./']);
  }

}
