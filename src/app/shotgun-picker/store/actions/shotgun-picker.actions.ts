import { createAction, props } from "@ngrx/store";
import { Seat } from "../state/shotgun-picker.state";

export const InitPassengers = createAction(
    '[Shotgun Picker] Init passengers',
);
export const InitPassengersSuccess = createAction(
    '[Shotgun Picker] Init passengers success',
    props<{ personIds: number[]; }>(),
);
export const InitPassengersFailure = createAction(
    '[Shotgun Picker] Init passengers failure',
    props<{ errMsg: string; }>(),
);

export const ClearSeats = createAction(
    '[Shotgun Picker] Clear car seats',
);

export const SetSeatPassengerIdSelection = createAction(
    '[Shotgun Picker] Set passengerId for seat',
    props<{ seat: Seat, passengerId: number | undefined, isSetByUser?: boolean }>(),
);

export const SetIsSeatDisabled = createAction(
    '[Shotgun Picker] Set seat is disabled',
    props<{ seat: Seat, isDisabled: boolean }>(),
);

export const RandomPickSeatsForPeople = createAction(
    '[Shotgun Picker] Randomly pick seats for people',
    props<{ clearRandomSelections: boolean }>(),
);
