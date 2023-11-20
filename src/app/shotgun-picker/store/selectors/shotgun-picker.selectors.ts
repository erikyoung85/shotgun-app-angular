import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ShotgunPickerState, shotgunPickerFeatureKey } from "../state/shotgun-picker.state";

export const selectShotgunPickerState = createFeatureSelector<ShotgunPickerState>(shotgunPickerFeatureKey);

export const selectAllPeople = createSelector(selectShotgunPickerState, (state) => {
    return state.allPeople
});
export const selectSelectedPeopleIds = createSelector(selectShotgunPickerState, (state) => state.selectedPeopleIds);

export const selectSelectedPeople = createSelector(
    selectAllPeople, 
    selectSelectedPeopleIds,
    (allPeople, selectedPeopleIds) => {
        return allPeople.filter(person => selectedPeopleIds.includes(person.id));
    }
);

