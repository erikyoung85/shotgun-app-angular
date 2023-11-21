import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { groupFeatureKey } from './store/state/group.state';
import { GroupEffects } from './store/effects/group.effects';
import { groupReducer } from './store/reducers/group.reducer';

@NgModule({
  declarations: [],
  exports: [],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(groupFeatureKey, groupReducer),
    EffectsModule.forFeature([GroupEffects]),
  ],
})
export class GroupModule { }
