import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Passenger, Seat, ShotgunPickerState, shotgunPickerFeatureKey } from "../state/shotgun-picker.state";
import * as groupSelectors from 'src/app/group/store/selectors/group.selectors';

export const selectShotgunPickerState = createFeatureSelector<ShotgunPickerState>(shotgunPickerFeatureKey);

export const selectSelectedPersonIds = createSelector(selectShotgunPickerState, (state) => {
    return state.selectedPersonIds
});
export const selectCarSeatsSelection = createSelector(selectShotgunPickerState, (state) => {
    return state.carSeatsSelection
});

export const selectAllCarSeats = createSelector(selectCarSeatsSelection, (carSeatsSelection) => {
    return Object.values(Seat).map(carSeat => carSeatsSelection[carSeat]);
});

export const selectAllPassengers = createSelector(
    groupSelectors.selectPersonDict,
    selectSelectedPersonIds, 
    selectAllCarSeats, 
    (personDict, selectedPersonIds, allCarSeats): Passenger[] => {
        const selectedPeople = selectedPersonIds.map(personId => 
            personDict[personId]
        ).filter(person => person !== undefined);

        return selectedPeople.map(person => {
            const currSeat = allCarSeats.find((carSeat) => carSeat.passengerId === person.id);
            return <Passenger>{
                ...person,
                carSeat: currSeat,
            }
        })
    }
);

export const selectPassengerDict = createSelector(selectAllPassengers, (allPassengers) => {
    const passengerDict: {[personId: number]: Passenger} = {};
    allPassengers.forEach(passenger => passengerDict[passenger.id] = passenger);
    return passengerDict;
})

export const selectAvailablePassengers = createSelector(selectAllPassengers, (allPassengers) => {
    return allPassengers.filter(passenger => passenger.carSeat === undefined);
});
export const selectAvailableSeats = createSelector(selectAllCarSeats, (allCarSeats) => {
    return allCarSeats.filter(carSeat => carSeat.passengerId === undefined && !carSeat.isDisabled);
});

export const selectDriverSeat = createSelector(selectCarSeatsSelection,
    (carSeatsSelection) => carSeatsSelection[Seat.DRIVER]
);
export const selectDriverPassengerId = createSelector(selectDriverSeat,
    (carSeat) => carSeat.passengerId
);
export const selectDriverPerson = createSelector(
    selectPassengerDict, 
    selectDriverPassengerId,
    (passengerDict, passengerId) => {
        return passengerId ? passengerDict[passengerId] : undefined;
    }
);

export const selectShotgunSeat = createSelector(selectCarSeatsSelection,
    (carSeatsSelection) => carSeatsSelection[Seat.SHOTGUN]
);
export const selectShotgunPassengerId = createSelector(selectShotgunSeat,
    (carSeat) => carSeat.passengerId
);
export const selectShotgunPerson = createSelector(
    selectPassengerDict, 
    selectShotgunPassengerId,
    (passengerDict, passengerId) => {
        return passengerId ? passengerDict[passengerId] : undefined;
    }
);

export const selectLeftNutSeat = createSelector(selectCarSeatsSelection,
    (carSeatsSelection) => carSeatsSelection[Seat.LEFT_NUT]
);
export const selectLeftNutPassengerId = createSelector(selectLeftNutSeat,
    (carSeat) => carSeat.passengerId
);
export const selectLeftNutPerson = createSelector(
    selectPassengerDict, 
    selectLeftNutPassengerId,
    (passengerDict, passengerId) => {
        return passengerId ? passengerDict[passengerId] : undefined;
    }
);

export const selectMiddleSeat = createSelector(selectCarSeatsSelection,
    (carSeatsSelection) => carSeatsSelection[Seat.MIDDLE]
);
export const selectMiddlePassengerId = createSelector(selectMiddleSeat,
    (carSeat) => carSeat.passengerId
);
export const selectMiddlePerson = createSelector(
    selectPassengerDict, 
    selectMiddlePassengerId,
    (passengerDict, passengerId) => {
        return passengerId ? passengerDict[passengerId] : undefined;
    }
);

export const selectRightNutSeat = createSelector(selectCarSeatsSelection,
    (carSeatsSelection) => carSeatsSelection[Seat.RIGHT_NUT]
);
export const selectRightNutPassengerId = createSelector(selectRightNutSeat,
    (carSeat) => carSeat.passengerId
);
export const selectRightNutPerson = createSelector(
    selectPassengerDict, 
    selectRightNutPassengerId,
    (passengerDict, passengerId) => {
        return passengerId ? passengerDict[passengerId] : undefined;
    }
);

export const selectLeftBackSeat = createSelector(selectCarSeatsSelection,
    (carSeatsSelection) => carSeatsSelection[Seat.LEFT_BACK]
);
export const selectLeftBackPassengerId = createSelector(selectLeftBackSeat,
    (carSeat) => carSeat.passengerId
);
export const selectLeftBackPerson = createSelector(
    selectPassengerDict, 
    selectLeftBackPassengerId,
    (passengerDict, passengerId) => {
        return passengerId ? passengerDict[passengerId] : undefined;
    }
);

export const selectRightBackSeat = createSelector(selectCarSeatsSelection,
    (carSeatsSelection) => carSeatsSelection[Seat.RIGHT_BACK]
);
export const selectRightBackPassengerId = createSelector(selectRightBackSeat,
    (carSeat) => carSeat.passengerId
);
export const selectRightBackPerson = createSelector(
    selectPassengerDict, 
    selectRightBackPassengerId,
    (passengerDict, passengerId) => {
        return passengerId ? passengerDict[passengerId] : undefined;
    }
);
