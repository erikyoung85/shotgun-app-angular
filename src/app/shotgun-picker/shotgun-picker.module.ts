import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShotgunPickerComponent } from './components/shotgun-picker/shotgun-picker.component';
import { NgMaterialModule } from '../ng-material.module';
import { ShotgunPickerIncludeUserComponent } from './components/shotgun-picker-include-user/shotgun-picker-include-user.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ShotgunPickerEffects } from './store/effects/shotgun-picker.effects';
import { shotgunPickerReducer } from './store/reducers/shotgun-picker.reducer';
import { shotgunPickerFeatureKey } from './store/state/shotgun-picker.state';

@NgModule({
  declarations: [ShotgunPickerComponent, ShotgunPickerIncludeUserComponent],
  exports: [ShotgunPickerComponent],
  imports: [
    CommonModule,
    NgMaterialModule,
    StoreModule.forFeature(shotgunPickerFeatureKey, shotgunPickerReducer),
    EffectsModule.forFeature([ShotgunPickerEffects]),
  ],
})
export class ShotgunPickerModule { }
