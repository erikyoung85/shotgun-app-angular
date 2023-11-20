import { Seat, ShotgunPickerState } from "./shotgun-picker.state";


export const INITIAL_SHOTGUN_PICKER_STATE: ShotgunPickerState = {
    allPeople: [],
    carSeatsSelection: {
        [Seat.DRIVER]: undefined,
        [Seat.SHOTGUN]: undefined,
        [Seat.LEFT_NUT]: undefined,
        [Seat.MIDDLE]: undefined,
        [Seat.RIGHT_NUT]: undefined,
        [Seat.LEFT_BACK]: undefined,
        [Seat.RIGHT_BACK]: undefined,
    },
}