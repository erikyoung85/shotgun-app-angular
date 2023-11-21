import { createReducer, on } from "@ngrx/store";
import { INITIAL_GROUP_STATE } from "../state/group.initial-state";
import * as groupActions from '../actions/group.actions';
import { GroupState } from "../state/group.state";


export const groupReducer = createReducer(INITIAL_GROUP_STATE,
    on(groupActions.FetchAllPeopleFailure, (state): GroupState => {
        return {
            ...state,
            allPeople: [],
        }
    }),
    on(groupActions.FetchAllPeopleSuccess, (state, action): GroupState => {
        return {
            ...state,
            allPeople: action.people,
        }
    }),
    on(groupActions.FetchAllPeopleFailure, (state): GroupState => {
        return {
            ...state,
            allPeople: [],
        }
    }),
)
