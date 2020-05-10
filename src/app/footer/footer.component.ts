import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
    <div class="container">
    <div class="content has-text-centered">
      <p>
        Made by Hanna Tuominen
      </p>
    </div>
    </div>
    </footer>
  `,
  styleUrls: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
