import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Person, Seat, ShotgunPickerState, shotgunPickerFeatureKey } from "../state/shotgun-picker.state";

export const selectShotgunPickerState = createFeatureSelector<ShotgunPickerState>(shotgunPickerFeatureKey);

export const selectCarSeatsSelection = createSelector(selectShotgunPickerState, (state) => {
    return state.carSeatsSelection
});
export const selectAllPeople = createSelector(selectShotgunPickerState, (state): Person[] => {
    return state.allPeople.map(person => {
        const currSeat = Object.keys(state.carSeatsSelection).find((seat) => state.carSeatsSelection[seat as Seat] === person.id)
        return {
            ...person,
            seat: currSeat as Seat,
        }
    })
});

export const selectDriverPerson = createSelector(selectAllPeople, selectCarSeatsSelection,
    (allPeople, carSeatsSelection) => allPeople.find(person => person.id === carSeatsSelection[Seat.DRIVER])
);
export const selectShotgunPerson = createSelector(selectAllPeople, selectCarSeatsSelection,
    (allPeople, carSeatsSelection) => allPeople.find(person => person.id === carSeatsSelection[Seat.SHOTGUN])
);
export const selectLeftNutPerson = createSelector(selectAllPeople, selectCarSeatsSelection,
    (allPeople, carSeatsSelection) => allPeople.find(person => person.id === carSeatsSelection[Seat.LEFT_NUT])
);
export const selectMiddlePerson = createSelector(selectAllPeople, selectCarSeatsSelection,
    (allPeople, carSeatsSelection) => allPeople.find(person => person.id === carSeatsSelection[Seat.MIDDLE])
);
export const selectRightNutPerson = createSelector(selectAllPeople, selectCarSeatsSelection,
    (allPeople, carSeatsSelection) => allPeople.find(person => person.id === carSeatsSelection[Seat.RIGHT_NUT])
);
export const selectBackLeftPerson = createSelector(selectAllPeople, selectCarSeatsSelection,
    (allPeople, carSeatsSelection) => allPeople.find(person => person.id === carSeatsSelection[Seat.LEFT_BACK])
);
export const selectBackRightPerson = createSelector(selectAllPeople, selectCarSeatsSelection,
    (allPeople, carSeatsSelection) => allPeople.find(person => person.id === carSeatsSelection[Seat.RIGHT_BACK])
);
