import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMapComponent } from './components/custom-map/custom-map.component';



@NgModule({
  declarations: [CustomMapComponent],
  imports: [
    CommonModule
  ],
  exports: [CustomMapComponent]
})
export class CustomMapModule { }
