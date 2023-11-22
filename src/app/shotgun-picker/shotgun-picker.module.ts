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
import { ShotgunPickerContainerComponent } from './components/shotgun-picker-container/shotgun-picker-container.component';
import { GroupModule } from '../group/group.module';

@NgModule({
  declarations: [ShotgunPickerComponent, CarSeatDropComponent, ShotgunPickerContainerComponent],
  exports: [ShotgunPickerComponent, ShotgunPickerContainerComponent],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(shotgunPickerFeatureKey, shotgunPickerReducer),
    EffectsModule.forFeature([ShotgunPickerEffects]),
    GroupModule,
  ],
})
export class ShotgunPickerModule { }
