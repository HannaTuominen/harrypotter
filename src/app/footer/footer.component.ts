import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
    <div class="container">
      <div class="content">
        <p class="api-link">
          Made by Hanna Tuominen
        </p>
        <p class="api-link">
          This site uses the <a href="https://www.potterapi.com/">Potter API</a>
        </p>
      </div>
    </div>
    </footer>
  `,
  styles: [`.menu-spacer {flex-grow: 1} .footer { background-color: #86162a;} .api-link {margin: 0 10px 0 0; text-align: end; color: #c2c3c4} a { color: #c2c3c4}`]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
