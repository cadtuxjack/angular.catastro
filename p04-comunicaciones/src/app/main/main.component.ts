import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
  <div class="container alto">
    <div class="row">
      <div class="col">
      <app-padre></app-padre>
      <app-hijo></app-hijo>
      </div>

    </div>
  </div>
  `,
  styles: [
    '.alto {min-height: 15rem }']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
