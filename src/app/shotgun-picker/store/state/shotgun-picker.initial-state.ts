import { CarSeatsSelection, Seat, ShotgunPickerState } from "./shotgun-picker.state";

export const INITIAL_CAR_SEATS_SELECTION: CarSeatsSelection = {
    [Seat.DRIVER]: {
        seat: Seat.DRIVER,
        personId: undefined,
        isSetByUser: false,
        isDisabled: false,
    },
    [Seat.SHOTGUN]: {
        seat: Seat.SHOTGUN,
        personId: undefined,
        isSetByUser: false,
        isDisabled: false,
    },
    [Seat.LEFT_NUT]: {
        seat: Seat.LEFT_NUT,
        personId: undefined,
        isSetByUser: false,
        isDisabled: false,
    },
    [Seat.RIGHT_NUT]: {
        seat: Seat.RIGHT_NUT,
        personId: undefined,
        isSetByUser: false,
        isDisabled: false,
    },
    [Seat.MIDDLE]: {
        seat: Seat.MIDDLE,
        personId: undefined,
        isSetByUser: false,
        isDisabled: false,
    },
    [Seat.LEFT_BACK]: {
        seat: Seat.LEFT_BACK,
        personId: undefined,
        isSetByUser: false,
        isDisabled: false,
    },
    [Seat.RIGHT_BACK]: {
        seat: Seat.RIGHT_BACK,
        personId: undefined,
        isSetByUser: false,
        isDisabled: false,
    },
}

export const INITIAL_SHOTGUN_PICKER_STATE: ShotgunPickerState = {
    allPeople: [],
    carSeatsSelection: INITIAL_CAR_SEATS_SELECTION,
}