export const shotgunPickerFeatureKey = 'shotgunPickerState';

export interface ShotgunPickerState {
    allPeople: Person[];
    carSeatsSelection: CarSeatsSelection;
}

export interface Person {
    id: number;
    name: string;
    seat?: Seat | undefined;
}

export interface CarSeatsSelection {
    [Seat.DRIVER]: SeatSelection;
    [Seat.SHOTGUN]: SeatSelection;
    [Seat.LEFT_NUT]: SeatSelection;
    [Seat.MIDDLE]: SeatSelection;
    [Seat.RIGHT_NUT]: SeatSelection;
    [Seat.LEFT_BACK]: SeatSelection;
    [Seat.RIGHT_BACK]: SeatSelection;
}

export interface SeatSelection {
    personId: number | undefined;
    isDisabled: boolean;
}

export enum Seat {
    DRIVER = 'driverSeat',
    SHOTGUN = 'shotgunSeat',
    LEFT_NUT = 'leftNutSeat',
    MIDDLE = 'middleSeat',
    RIGHT_NUT = 'rightNutSeat',
    LEFT_BACK = 'leftBackSeat',
    RIGHT_BACK = 'rightBackSeat',
}