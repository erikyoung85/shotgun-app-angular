import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { NgMaterialModule } from '../ng-material.module';



@NgModule({
  declarations: [
    IconButtonComponent,
  ],
  exports: [
    IconButtonComponent,
    NgMaterialModule,
  ],
  imports: [
    CommonModule,
    NgMaterialModule,
  ]
})
export class SharedModule { }
