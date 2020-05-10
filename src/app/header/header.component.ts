import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: ` <nav class="navbar is-dark">
    <!-- logo -->
    <div class="navbar-brand">
      <a class="navbar-item">
        <img src="./assets/headerimage.png" alt="Header Image">
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
  styles: [`.active { background-color: lightgray; }`]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
