import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-header></app-header>
<!--  <nav>-->
<!--    <a routerLink="/characters" routerLinkActive="active">Characters</a> |-->
<!--    <a routerLink="/houses" routerLinkActive="active">Houses</a> |-->
<!--    <a routerLink="/spells" routerLinkActive="active">Spells</a>-->
<!--  </nav>-->
  <div>
    <router-outlet></router-outlet>
  </div>
  <app-footer></app-footer>`,
  styles: [`.active { background-color: lightgray; }`]
})
export class AppComponent {
  title = 'Harry Potter';
}
