import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
  <nav>
    <a routerLink="/characters" routerLinkActive="active">Characters</a>
    <a routerLink="/houses" routerLinkActive="active">Houses</a>
  </nav>
  <div>
    <router-outlet></router-outlet>
  </div>`,
  styles: [`.active { background-color: lightgray; }`]
})
export class AppComponent {
  title = 'harry-potter';
}
