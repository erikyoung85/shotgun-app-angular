import { createAction, props } from "@ngrx/store";
import { CarSeatsSelection, Person, Seat } from "../state/shotgun-picker.state";

export const FetchAllPeople = createAction('[Shotgun Picker] Get All People');
export const FetchAllPeopleSuccess = createAction(
    '[Shotgun Picker] Get All People Success',
    props<{ people: Person[] }>(),
);
export const FetchAllPeopleFailure = createAction(
    '[Shotgun Picker] Get All People Failure',
    props<{ errMsg: string }>(),
);

export const SetSeatPersonIdSelection = createAction(
    '[Shotgun Picker] Set personId for seat',
    props<{ seat: Seat, personId: number | undefined }>(),
);
export const SetIsSeatDisabled = createAction(
    '[Shotgun Picker] Set seat is disabled',
    props<{ seat: Seat, isDisabled: boolean }>(),
);

export const RandomPickSeatsForPeople = createAction(
    '[Shotgun Picker] Randomly pick seats for people',
);
