export const shotgunPickerFeatureKey = 'shotgunPickerState';

export interface ShotgunPickerState {
    allPeople: Person[];
    carSeatsSelection: CarSeatsSelection;
}

export interface Person {
    id: number;
    name: string;
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
    personId: number | undefined;
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