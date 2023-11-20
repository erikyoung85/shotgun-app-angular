import { Person } from "../../models/person";

export const shotgunPickerFeatureKey = 'shotgunPickerState';

export interface ShotgunPickerState {
    allPeople: Person[];
    selectedPeopleIds: number[];
}