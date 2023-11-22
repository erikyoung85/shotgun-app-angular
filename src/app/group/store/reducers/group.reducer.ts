import { createReducer, on } from "@ngrx/store";
import { INITIAL_GROUP_STATE } from "../state/group.initial-state";
import * as groupActions from '../actions/group.actions';
import { GroupState } from "../state/group.state";


export const groupReducer = createReducer(INITIAL_GROUP_STATE,
    on(groupActions.FetchGroup, (state, action): GroupState => {

        return {
            ...state,
            group: undefined
        }
    }),
    on(groupActions.FetchGroupSuccess, (state, action): GroupState => {
        return {
            ...state,
            group: action.group
        }
    }),
    on(groupActions.FetchGroupFailure, (state): GroupState => {
        return {
            ...state,
            group: undefined
        }
    }),

    on(groupActions.AddPersonToGroupSuccess, (state, action): GroupState => {
        return {
            ...state,
            group: state.group && {
                ...state.group,
                personDict: {
                    ...state.group.personDict,
                    [action.person.id]: action.person,
                }
            }
        }
    }),

    on(groupActions.DeletePersonFromGroupSuccess, (state, action): GroupState => {
        return {
            ...state,
            group: state.group && {
                ...state.group,
                personDict: action.personDict,
            }
        }
    }),

    on(groupActions.SetIsPersonInCar, (state, action): GroupState => {
        return {
            ...state,
            group: state.group && {
                ...state.group,
                personDict: {
                    ...state.group.personDict,
                    [action.personId]: {
                        ...state.group.personDict[action.personId],
                        isInCar: action.isInCar,
                    }
                }
            }
        }
    }),
)
