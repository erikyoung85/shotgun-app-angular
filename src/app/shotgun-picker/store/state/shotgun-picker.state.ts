import { Person } from "src/app/group/store/state/group.state";

export const shotgunPickerFeatureKey = 'shotgunPickerState';

export interface ShotgunPickerState {
    selectedPersonIds: number[];
    carSeatsSelection: CarSeatsSelection;
}

export interface Passenger extends Person {
    carSeat?: SeatSelection | undefined;
}

export interface CarSeatsSelection {
    [Seat.DRIVER]: SeatSelection;
    [Seat.SHOTGUN]: SeatSelection;
    [Seat.LEFT_NUT]: SeatSelection;
    [Seat.RIGHT_NUT]: SeatSelection;
    [Seat.MIDDLE]: SeatSelection;
    [Seat.LEFT_BACK]: SeatSelection;
    [Seat.RIGHT_BACK]: SeatSelection;
}

export interface SeatSelection {
    seat: Seat;
    passengerId: number | undefined;
    isSetByUser: boolean;
    isDisabled: boolean;
}

export enum Seat {
    DRIVER = 'driverSeat',
    SHOTGUN = 'shotgunSeat',
    LEFT_NUT = 'leftNutSeat',
    RIGHT_NUT = 'rightNutSeat',
    MIDDLE = 'middleSeat',
    LEFT_BACK = 'leftBackSeat',
    RIGHT_BACK = 'rightBackSeat',
}