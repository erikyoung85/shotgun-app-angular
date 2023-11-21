import { createReducer, on } from "@ngrx/store";
import { INITIAL_SHOTGUN_PICKER_STATE } from "../state/shotgun-picker.initial-state";
import * as shotgunPickerActions from '../actions/shotgun-picker.actions';
import { Seat, ShotgunPickerState } from "../state/shotgun-picker.state";


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

    on(shotgunPickerActions.ClearSeats, (state): ShotgunPickerState => {
        return {
            ...state,
            carSeatsSelection: INITIAL_SHOTGUN_PICKER_STATE.carSeatsSelection,
        }
    }),

    on(shotgunPickerActions.SetSeatPersonIdSelection, (state, action): ShotgunPickerState => {
        return {
            ...state,
            carSeatsSelection: {
                ...state.carSeatsSelection,
                [action.seat]: {
                    ...state.carSeatsSelection[action.seat],
                    personId: action.personId,
                    isSetByUser: action.isSetByUser ?? false,
                }
            },
        }
    }),

    on(shotgunPickerActions.SetIsSeatDisabled, (state, action): ShotgunPickerState => {
        return {
            ...state,
            carSeatsSelection: {
                ...state.carSeatsSelection,
                [action.seat]: {
                    ...state.carSeatsSelection[action.seat],
                    isDisabled: action.isDisabled,
                }
            },
        }
    }),

    on(shotgunPickerActions.RandomPickSeatsForPeople, (state, action): ShotgunPickerState => {
        const carSeatsSelection = {...state.carSeatsSelection};

        if (action.clearRandomSelections) {
            Object.values(Seat).forEach(seat => {
                const carSeat = carSeatsSelection[seat];
                if (!carSeat.isSetByUser) {
                    carSeatsSelection[seat] = {
                        ...carSeatsSelection[seat],
                        personId: undefined,
                        isSetByUser: false,
                    }
                }
            })
        }
        return {
            ...state,
            carSeatsSelection: carSeatsSelection,
        }
    }),
)
