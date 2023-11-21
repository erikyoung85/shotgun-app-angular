import { createAction, props } from "@ngrx/store";
import { Person } from "../state/group.state";

export const FetchAllPeopleForGroup = createAction('[Group] Get All People');
export const FetchAllPeopleSuccess = createAction(
    '[Group] Get All People Success',
    props<{ people: Person[] }>(),
);
export const FetchAllPeopleFailure = createAction(
    '[Group] Get All People Failure',
    props<{ errMsg: string }>(),
);
