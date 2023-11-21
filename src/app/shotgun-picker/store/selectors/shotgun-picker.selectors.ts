import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Person, Seat, ShotgunPickerState, shotgunPickerFeatureKey } from "../state/shotgun-picker.state";

export const selectShotgunPickerState = createFeatureSelector<ShotgunPickerState>(shotgunPickerFeatureKey);

export const selectCarSeatsSelection = createSelector(selectShotgunPickerState, (state) => {
    return state.carSeatsSelection
});
export const selectAllPeople = createSelector(selectShotgunPickerState, (state): Person[] => {
    return state.allPeople.map(person => {
        const currSeat = Object.keys(state.carSeatsSelection).find(
            (seat) => state.carSeatsSelection[seat as Seat].personId === person.id
        );
        
        return {
            ...person,
            seat: currSeat as Seat,
        }
    })
});

export const selectPersonDict = createSelector(selectAllPeople, (allPeople) => {
    const personDict: {[personId: number]: Person} = {};
    allPeople.forEach(person => {
        personDict[person.id] = person;
    })
    return personDict;
});

export const selectDriverSeat = createSelector(selectCarSeatsSelection,
    (carSeatsSelection) => carSeatsSelection[Seat.DRIVER]
);
export const selectDriverPersonId = createSelector(selectDriverSeat,
    (seat) => seat.personId
);
export const selectDriverPerson = createSelector(
    selectPersonDict, 
    selectDriverPersonId,
    (personDict, personId) => {
        return personId ? personDict[personId] : undefined;
    }
);

export const selectShotgunSeat = createSelector(selectCarSeatsSelection,
    (carSeatsSelection) => carSeatsSelection[Seat.SHOTGUN]
);
export const selectShotgunPersonId = createSelector(selectShotgunSeat,
    (seat) => seat.personId
);
export const selectShotgunPerson = createSelector(
    selectPersonDict, 
    selectShotgunPersonId,
    (personDict, personId) => {
        return personId ? personDict[personId] : undefined;
    }
);

export const selectLeftNutSeat = createSelector(selectCarSeatsSelection,
    (carSeatsSelection) => carSeatsSelection[Seat.LEFT_NUT]
);
export const selectLeftNutPersonId = createSelector(selectLeftNutSeat,
    (seat) => seat.personId
);
export const selectLeftNutPerson = createSelector(
    selectPersonDict, 
    selectLeftNutPersonId,
    (personDict, personId) => {
        return personId ? personDict[personId] : undefined;
    }
);

export const selectMiddleSeat = createSelector(selectCarSeatsSelection,
    (carSeatsSelection) => carSeatsSelection[Seat.MIDDLE]
);
export const selectMiddlePersonId = createSelector(selectMiddleSeat,
    (seat) => seat.personId
);
export const selectMiddlePerson = createSelector(
    selectPersonDict, 
    selectMiddlePersonId,
    (personDict, personId) => {
        return personId ? personDict[personId] : undefined;
    }
);

export const selectRightNutSeat = createSelector(selectCarSeatsSelection,
    (carSeatsSelection) => carSeatsSelection[Seat.RIGHT_NUT]
);
export const selectRightNutPersonId = createSelector(selectRightNutSeat,
    (seat) => seat.personId
);
export const selectRightNutPerson = createSelector(
    selectPersonDict, 
    selectRightNutPersonId,
    (personDict, personId) => {
        return personId ? personDict[personId] : undefined;
    }
);

export const selectLeftBackSeat = createSelector(selectCarSeatsSelection,
    (carSeatsSelection) => carSeatsSelection[Seat.LEFT_BACK]
);
export const selectLeftBackPersonId = createSelector(selectLeftBackSeat,
    (seat) => seat.personId
);
export const selectLeftBackPerson = createSelector(
    selectPersonDict, 
    selectLeftBackPersonId,
    (personDict, personId) => {
        return personId ? personDict[personId] : undefined;
    }
);

export const selectRightBackSeat = createSelector(selectCarSeatsSelection,
    (carSeatsSelection) => carSeatsSelection[Seat.RIGHT_BACK]
);
export const selectRightBackPersonId = createSelector(selectRightBackSeat,
    (seat) => seat.personId
);
export const selectRightBackPerson = createSelector(
    selectPersonDict, 
    selectRightBackPersonId,
    (personDict, personId) => {
        return personId ? personDict[personId] : undefined;
    }
);
