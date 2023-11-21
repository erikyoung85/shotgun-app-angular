import { CarSeatsSelection, Seat, ShotgunPickerState } from "./shotgun-picker.state";

export const INITIAL_CAR_SEATS_SELECTION: CarSeatsSelection = {
    [Seat.DRIVER]: {
        seat: Seat.DRIVER,
        passengerId: undefined,
        isSetByUser: false,
        isDisabled: false,
    },
    [Seat.SHOTGUN]: {
        seat: Seat.SHOTGUN,
        passengerId: undefined,
        isSetByUser: false,
        isDisabled: false,
    },
    [Seat.LEFT_NUT]: {
        seat: Seat.LEFT_NUT,
        passengerId: undefined,
        isSetByUser: false,
        isDisabled: false,
    },
    [Seat.RIGHT_NUT]: {
        seat: Seat.RIGHT_NUT,
        passengerId: undefined,
        isSetByUser: false,
        isDisabled: false,
    },
    [Seat.MIDDLE]: {
        seat: Seat.MIDDLE,
        passengerId: undefined,
        isSetByUser: false,
        isDisabled: false,
    },
    [Seat.LEFT_BACK]: {
        seat: Seat.LEFT_BACK,
        passengerId: undefined,
        isSetByUser: false,
        isDisabled: false,
    },
    [Seat.RIGHT_BACK]: {
        seat: Seat.RIGHT_BACK,
        passengerId: undefined,
        isSetByUser: false,
        isDisabled: false,
    },
}

export const INITIAL_SHOTGUN_PICKER_STATE: ShotgunPickerState = {
    selectedPersonIds: [],
    carSeatsSelection: INITIAL_CAR_SEATS_SELECTION,
}