import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShotgunPickerModule } from './shotgun-picker/shotgun-picker.module';
import { HttpClientModule } from '@angular/common/http';
import { NgMaterialModule } from './ng-material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShotgunPickerModule,
    HttpClientModule,
    NgMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
