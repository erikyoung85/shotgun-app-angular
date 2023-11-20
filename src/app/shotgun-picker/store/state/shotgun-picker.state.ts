export const shotgunPickerFeatureKey = 'shotgunPickerState';

export interface ShotgunPickerState {
    allPeople: Person[];
    carSeatsSelection: CarSeatsSelection;
}

export interface Person {
    id: number;
    name: string;
}

export interface CarSeatsSelection {
    [Seat.DRIVER]: number | undefined;
    [Seat.SHOTGUN]: number | undefined;
    [Seat.LEFT_NUT]: number | undefined;
    [Seat.MIDDLE]: number | undefined;
    [Seat.RIGHT_NUT]: number | undefined;
    [Seat.LEFT_BACK]: number | undefined;
    [Seat.RIGHT_BACK]: number | undefined;
}

export enum Seat {
    DRIVER = 'driver',
    SHOTGUN = 'shotgun',
    LEFT_NUT = 'leftNut',
    MIDDLE = 'middle',
    RIGHT_NUT = 'rightNut',
    LEFT_BACK = 'leftBack',
    RIGHT_BACK = 'rightBack',
}