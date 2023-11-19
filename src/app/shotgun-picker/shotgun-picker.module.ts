import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShotgunPickerComponent } from './components/shotgun-picker/shotgun-picker.component';
import { NgMaterialModule } from '../ng-material.module';



@NgModule({
  declarations: [ShotgunPickerComponent],
  exports: [ShotgunPickerComponent],
  imports: [
    CommonModule,
    NgMaterialModule
  ],
})
export class ShotgunPickerModule { }
