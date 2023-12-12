import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LocalStorageState, localStorageFeatureKey } from '../state/local-storage.state';

export const selectLocalStorageState = createFeatureSelector<LocalStorageState>(localStorageFeatureKey);

export const selectGroupIds = createSelector(selectLocalStorageState, (state) => state.groupIds);
