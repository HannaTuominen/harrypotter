import {Router} from '@angular/router';
import {HarryPotterService} from './services/harrypotter.service';
import {OverlayContainer} from '@angular/cdk/overlay';
import {HttpClient} from '@angular/common/http';
import {Component, HostBinding, OnInit, Version} from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
  <app-header class="header" (changeTheme)="onSetTheme($event)"></app-header>

  <div class="content">
    <div class="content-inside">
        <router-outlet></router-outlet>
    </div>
  </div>
  <app-footer class="footer"></app-footer>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Harry Potter';

  constructor(private router: Router, private harryPotterService: HarryPotterService,
              public overlayContainer: OverlayContainer, private http: HttpClient) { }

  @HostBinding('class') componentCssClass;


  onSetTheme(theme) {
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
  }


}
