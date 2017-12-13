import { Component, ViewChild , OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {
  sName: string;
  constructor() { }
@ViewChild('name') sLocal: ElementRef;

ngOnInit() {
  console.log(this.sLocal);
 }


}
