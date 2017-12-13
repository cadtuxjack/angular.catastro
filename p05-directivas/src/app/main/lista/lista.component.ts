import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
 aTareas: Array<string>;
 sTareas: string;
  constructor() { }

  ngOnInit() {
    this.aTareas = [];
  }
addTareas() {
  this.aTareas.push(this.aTareas);
  this.aTareas = '';
}
}
