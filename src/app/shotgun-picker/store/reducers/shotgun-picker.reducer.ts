import { createReducer, on } from "@ngrx/store";
import { INITIAL_SHOTGUN_PICKER_STATE } from "../state/shotgun-picker.initial-state";
import * as shotgunPickerActions from '../actions/shotgun-picker.actions';
import { ShotgunPickerState } from "../state/shotgun-picker.state";


export const shotgunPickerReducer = createReducer(INITIAL_SHOTGUN_PICKER_STATE,
    on(shotgunPickerActions.FetchAllPeople, (state): ShotgunPickerState => {
        return {
            ...state,
            allPeople: [],
        }
    }),
    on(shotgunPickerActions.FetchAllPeopleSuccess, (state, action): ShotgunPickerState => {
        return {
            ...state,
            allPeople: action.people,
        }
    }),
    on(shotgunPickerActions.FetchAllPeopleFailure, (state): ShotgunPickerState => {
        return {
            ...state,
            allPeople: [],
        }
    }),

    on(shotgunPickerActions.SetCarSeatSelection, (state, action): ShotgunPickerState => {
        return {
            ...state,
            carSeatsSelection: {
                ...state.carSeatsSelection,
                ...action.selections,
            },
        }
    }),
)
