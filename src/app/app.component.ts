import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-header class="header"></app-header>

  <div class="wrapper">
    <router-outlet></router-outlet>
    <div class="push"></div>
  </div>
  <app-footer class="footer"></app-footer>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Harry Potter';
}
