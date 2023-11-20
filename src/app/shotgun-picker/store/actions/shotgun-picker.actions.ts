import { createAction, props } from "@ngrx/store";
import { Person } from "../../models/person";

export const FetchAllPeople = createAction('[Shotgun Picker] Get All People');
export const FetchAllPeopleSuccess = createAction(
    '[Shotgun Picker] Get All People Success',
    props<{ people: Person[] }>(),
);
export const FetchAllPeopleFailure = createAction(
    '[Shotgun Picker] Get All People Failure',
    props<{ errMsg: string }>(),
);