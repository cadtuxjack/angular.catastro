import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  sName: string;
  constructor() { }

  ngOnInit() {
    this.sName = 'Pepe';
  }
btnBorrar(oEv) {
  console.log(oEv);
  this.sName = null;
}
}
