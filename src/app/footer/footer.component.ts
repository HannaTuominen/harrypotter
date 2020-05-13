import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <mat-toolbar color="primary">
        <div class="menu-spacer"></div>
        <div class="texts">
          <div>
            <span class="api-link">
              Made by Hanna Tuominen
            </span>
          </div>
          <div>
          <span class="api-link">
            This site uses the <a href="https://www.potterapi.com/">Potter API</a>
          </span>
            </div>
        </div>
    </mat-toolbar>
  `,
  styles: [`
  mat-toolbar {padding:0; height:50px; line-height:15px;}
  .menu-spacer {flex-grow: 1}
  .api-link {margin-right:10px; text-align: end; color: white; font-size:small; padding: 0;}
  a { color: #c2c3c4}`]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
