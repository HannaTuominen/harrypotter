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
        <span class="menu-spacer"></span>
        <div>
          <a mat-button [routerLink]="'characters'" routerLinkActive="active">Characters</a>
          <a mat-button [routerLink]="'houses'" routerLinkActive="active">Houses</a>
          <a mat-button [routerLink]="'spells'" routerLinkActive="active">Spells</a>
        </div>
        <span class="menu-spacer"></span>
      </mat-toolbar-row>

    </mat-toolbar>`,
  styles: [`.active { background-color: #86162a; } .pointer {cursor: pointer} .menu-spacer {flex-grow: 1}`]
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  redirect() {
    this.router.navigate(['./']);
  }

}
