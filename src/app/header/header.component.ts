import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  template: ` <nav class="navbar is-dark">
    <!-- logo -->
    <div class="navbar-brand">
      <a class="navbar-item">
        <img src="./assets/headerimage.png" alt="Header Image" width="100%" class="pointer" (click)="redirect()">
      </a>
    </div>
    <!-- menu -->
    <div class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" routerLink="characters" routerLinkActive="active">Characters</a>
        <a class="navbar-item" routerLink="houses" routerLinkActive="active">Houses</a>
        <a class="navbar-item" routerLink="spells" routerLinkActive="active">Spells</a>
      </div>
    </div>
  </nav>`,
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
