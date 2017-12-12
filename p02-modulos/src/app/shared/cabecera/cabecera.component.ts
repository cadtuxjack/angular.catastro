import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  public sTitulo: string;
  // tslint:disable-next-line:whitespace
  constructor() {} /*Dejar solo para las dependencias*/

  ngOnInit() {
    this.sTitulo = 'Módulos en Angular';
  }

}
