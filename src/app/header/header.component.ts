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
        <nav mat-tab-nav-bar>
          <a mat-tab-link
             *ngFor="let link of navLinks"
             [routerLink]="link.path"
             routerLinkActive #rla="routerLinkActive"
             [active]="rla.isActive">
            {{link.label}}
          </a>
        </nav>
        <span class="menu-spacer"></span>
      </mat-toolbar-row>

    </mat-toolbar>`,
  styles: [`.active { background-color: #86162a; } .pointer {cursor: pointer} .menu-spacer {flex-grow: 1} .mat-tab-link {color: white; }`]
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
