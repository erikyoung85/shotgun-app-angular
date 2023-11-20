import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShotgunPickerModule } from './shotgun-picker/shotgun-picker.module';
import { HttpClientModule } from '@angular/common/http';
import { NgMaterialModule } from './ng-material.module';
import { StoreModule } from '@ngrx/store';
import { metaReducers } from './meta.reducer';
import { reducers } from './root.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        StoreModule.forRoot(reducers, {
            metaReducers: metaReducers,
        }),
        EffectsModule.forRoot([]),
        BrowserModule,
        AppRoutingModule,
        ShotgunPickerModule,
        HttpClientModule,
        NgMaterialModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
