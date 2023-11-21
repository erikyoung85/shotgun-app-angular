import { CarSeatsSelection, Seat, SeatSelection, ShotgunPickerState } from "./shotgun-picker.state";

export const INITIAL_CAR_SEAT: SeatSelection = {
    personId: undefined,
    isDisabled: false,
}

export const INITIAL_CAR_SEATS_SELECTION: CarSeatsSelection = {
    [Seat.DRIVER]: INITIAL_CAR_SEAT,
    [Seat.SHOTGUN]: INITIAL_CAR_SEAT,
    [Seat.LEFT_NUT]: INITIAL_CAR_SEAT,
    [Seat.MIDDLE]: INITIAL_CAR_SEAT,
    [Seat.RIGHT_NUT]: INITIAL_CAR_SEAT,
    [Seat.LEFT_BACK]: INITIAL_CAR_SEAT,
    [Seat.RIGHT_BACK]: INITIAL_CAR_SEAT,
}

export const INITIAL_SHOTGUN_PICKER_STATE: ShotgunPickerState = {
    allPeople: [],
    carSeatsSelection: INITIAL_CAR_SEATS_SELECTION,
}