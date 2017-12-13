import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MainModule,
    SharedModule
  ],
  declarations: [MainComponent],
  exports: [MainComponent]
})
export class MainModule { }
