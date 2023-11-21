import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShotgunPickerModule } from './shotgun-picker/shotgun-picker.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { metaReducers } from './meta.reducer';
import { reducers } from './root.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { GroupModule } from './group/group.module';

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
        BrowserAnimationsModule,
        SharedModule,
        GroupModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
