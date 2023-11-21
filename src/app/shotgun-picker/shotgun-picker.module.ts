import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShotgunPickerComponent } from './components/shotgun-picker/shotgun-picker.component';
import { ShotgunPickerIncludeUserComponent } from './components/shotgun-picker-include-user/shotgun-picker-include-user.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ShotgunPickerEffects } from './store/effects/shotgun-picker.effects';
import { shotgunPickerReducer } from './store/reducers/shotgun-picker.reducer';
import { shotgunPickerFeatureKey } from './store/state/shotgun-picker.state';
import { CarSeatDropComponent } from './components/car-seat-drop/car-seat-drop.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ShotgunPickerComponent, ShotgunPickerIncludeUserComponent, CarSeatDropComponent],
  exports: [ShotgunPickerComponent],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(shotgunPickerFeatureKey, shotgunPickerReducer),
    EffectsModule.forFeature([ShotgunPickerEffects]),
  ],
})
export class ShotgunPickerModule { }
