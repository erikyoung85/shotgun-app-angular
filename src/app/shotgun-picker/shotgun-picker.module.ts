import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShotgunPickerComponent } from './components/shotgun-picker/shotgun-picker.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ShotgunPickerEffects } from './store/effects/shotgun-picker.effects';
import { shotgunPickerReducer } from './store/reducers/shotgun-picker.reducer';
import { shotgunPickerFeatureKey } from './store/state/shotgun-picker.state';
import { CarSeatDropComponent } from './components/car-seat-drop/car-seat-drop.component';
import { SharedModule } from '../shared/shared.module';
import { ChoosePassengersComponent } from './components/choose-passengers/choose-passengers.component';
import { ShotgunPickerContainerComponent } from './components/shotgun-picker-container/shotgun-picker-container.component';

@NgModule({
  declarations: [ShotgunPickerComponent, CarSeatDropComponent, ChoosePassengersComponent, ShotgunPickerContainerComponent],
  exports: [ShotgunPickerComponent, ShotgunPickerContainerComponent],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(shotgunPickerFeatureKey, shotgunPickerReducer),
    EffectsModule.forFeature([ShotgunPickerEffects]),
  ],
})
export class ShotgunPickerModule { }
