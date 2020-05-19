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
  currentTheme: string;

  constructor(private router: Router, private harryPotterService: HarryPotterService,
              public overlayContainer: OverlayContainer, private http: HttpClient) { }

  version: Version;
  @HostBinding('class') componentCssClass;

  ngOnInit() {
    this.getVersion();
  }

  getVersion() {
    this.http.get<Version>('/api/version')
      .subscribe(data => {
        this.version = data;
      });
  }
  onSetTheme(theme) {
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
  }


}
