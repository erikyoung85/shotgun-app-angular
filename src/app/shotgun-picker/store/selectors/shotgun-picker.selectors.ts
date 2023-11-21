import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Person, Seat, ShotgunPickerState, shotgunPickerFeatureKey } from "../state/shotgun-picker.state";

export const selectShotgunPickerState = createFeatureSelector<ShotgunPickerState>(shotgunPickerFeatureKey);

export const selectCarSeatsSelection = createSelector(selectShotgunPickerState, (state) => {
    return state.carSeatsSelection
});

export const selectAllCarSeats = createSelector(selectCarSeatsSelection, (carSeatsSelection) => {
    return Object.values(Seat).map(carSeat => carSeatsSelection[carSeat]);
});
export const selectAllPeople = createSelector(selectShotgunPickerState, selectAllCarSeats, (state, allCarSeats): Person[] => {
    return state.allPeople.map(person => {
        const currSeat = allCarSeats.find((carSeat) => carSeat.personId === person.id);
        
        return <Person>{
            ...person,
            carSeat: currSeat,
        }
    })
});

export const selectAvailablePeople = createSelector(selectAllPeople, (allPeople) => {
    return allPeople.filter(person => person.carSeat === undefined);
});
export const selectAvailableSeats = createSelector(selectAllCarSeats, (allCarSeats) => {
    return allCarSeats.filter(carSeat => carSeat.personId === undefined && !carSeat.isDisabled);
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
    (carSeat) => carSeat.personId
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
    (carSeat) => carSeat.personId
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
    (carSeat) => carSeat.personId
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
    (carSeat) => carSeat.personId
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
    (carSeat) => carSeat.personId
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
    (carSeat) => carSeat.personId
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
    (carSeat) => carSeat.personId
);
export const selectRightBackPerson = createSelector(
    selectPersonDict, 
    selectRightBackPersonId,
    (personDict, personId) => {
        return personId ? personDict[personId] : undefined;
    }
);
