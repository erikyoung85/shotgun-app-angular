import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { metaReducers } from './meta.reducer';
import { reducers } from './root.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GroupEffects } from './group/store/effects/group.effects';
import { ShotgunPickerEffects } from './shotgun-picker/store/effects/shotgun-picker.effects';
import { ShotgunPickerModule } from './shotgun-picker/shotgun-picker.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        StoreModule.forRoot(reducers, {
            metaReducers: metaReducers,
        }),
        EffectsModule.forRoot([
            GroupEffects,
            ShotgunPickerEffects,
        ]),
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ShotgunPickerModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
