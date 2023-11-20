import { createAction, props } from "@ngrx/store";
import { CarSeatsSelection, Person } from "../state/shotgun-picker.state";

export const FetchAllPeople = createAction('[Shotgun Picker] Get All People');
export const FetchAllPeopleSuccess = createAction(
    '[Shotgun Picker] Get All People Success',
    props<{ people: Person[] }>(),
);
export const FetchAllPeopleFailure = createAction(
    '[Shotgun Picker] Get All People Failure',
    props<{ errMsg: string }>(),
);

export const SetCarSeatSelection = createAction(
    '[Shotgun Picker] Set driver id',
    props<{ selections: Partial<CarSeatsSelection> }>(),
);
