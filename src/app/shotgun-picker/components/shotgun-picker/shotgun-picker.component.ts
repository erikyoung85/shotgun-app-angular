import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as shotgunPickerSelectors from '../../store/selectors/shotgun-picker.selectors';
import * as shotgunPickerActions from '../../store/actions/shotgun-picker.actions';
import * as groupActions from 'src/app/group/store/actions/group.actions';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Passenger, Seat } from '../../store/state/shotgun-picker.state';

@Component({
    selector: 'app-shotgun-picker',
    templateUrl: './shotgun-picker.component.html',
    styleUrls: ['./shotgun-picker.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShotgunPickerComponent implements OnInit {
    Seat = Seat;
    constructor(private store: Store) { }

    availablePassengers$ = this.store.select(shotgunPickerSelectors.selectAvailablePassengers);

    driverSeat$ = this.store.select(shotgunPickerSelectors.selectDriverSeat);
    driverPerson$ = this.store.select(shotgunPickerSelectors.selectDriverPerson);

    shotgunSeat$ = this.store.select(shotgunPickerSelectors.selectShotgunSeat);
    shotgunPerson$ = this.store.select(shotgunPickerSelectors.selectShotgunPerson);

    leftNutSeat$ = this.store.select(shotgunPickerSelectors.selectLeftNutSeat);
    leftNutPerson$ = this.store.select(shotgunPickerSelectors.selectLeftNutPerson);

    middleSeat$ = this.store.select(shotgunPickerSelectors.selectMiddleSeat);
    middlePerson$ = this.store.select(shotgunPickerSelectors.selectMiddlePerson);

    rightNutSeat$ = this.store.select(shotgunPickerSelectors.selectRightNutSeat);
    rightNutPerson$ = this.store.select(shotgunPickerSelectors.selectRightNutPerson);

    leftBackSeat$ = this.store.select(shotgunPickerSelectors.selectLeftBackSeat);
    leftBackPerson$ = this.store.select(shotgunPickerSelectors.selectLeftBackPerson);

    rightBackSeat$ = this.store.select(shotgunPickerSelectors.selectRightBackSeat);
    rightBackPerson$ = this.store.select(shotgunPickerSelectors.selectRightBackPerson);

    ngOnInit(): void {
        this.store.dispatch(shotgunPickerActions.InitPassengers());
    }

    onDropToRemove(event: CdkDragDrop<Passenger[] | null>) {
        const oldSeat = event.previousContainer.data?.[event.previousIndex]?.carSeat?.seat;
        if (oldSeat !== undefined) {
            this.store.dispatch(shotgunPickerActions.SetSeatPassengerIdSelection({ seat: oldSeat, passengerId: undefined }));
        }
    }

    onSeatChange(seat: Seat, newPassenger: Passenger | undefined) {
        const oldSeat = newPassenger?.carSeat?.seat;
        if (oldSeat !== undefined) {
            this.store.dispatch(shotgunPickerActions.SetSeatPassengerIdSelection({ seat: oldSeat, passengerId: undefined }));
        }
        
        this.store.dispatch(shotgunPickerActions.SetSeatPassengerIdSelection({ 
            seat, 
            passengerId: newPassenger?.id, 
            isSetByUser: true 
        }));
    }

    onSeatDisableChange(seat: Seat, isDisabled: boolean) {        
        this.store.dispatch(shotgunPickerActions.SetIsSeatDisabled({ seat, isDisabled }));
    }

    onPickSeats() {
        this.store.dispatch(shotgunPickerActions.RandomPickSeatsForPeople({ clearRandomSelections: true }));
    }

    onClearSeats() {
        this.store.dispatch(shotgunPickerActions.ClearSeats());

    }
}
