import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as shotgunPickerSelectors from '../../store/selectors/shotgun-picker.selectors';
import * as shotgunPickerActions from '../../store/actions/shotgun-picker.actions';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Person, Seat } from '../../store/state/shotgun-picker.state';

@Component({
    selector: 'app-shotgun-picker',
    templateUrl: './shotgun-picker.component.html',
    styleUrls: ['./shotgun-picker.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShotgunPickerComponent implements OnInit {
    Seat = Seat;
    constructor(private store: Store) { }

    allPeople$ = this.store.select(shotgunPickerSelectors.selectAllPeople);

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

    items = ['Carrots', 'Tomatoes', 'Onions', 'Apples', 'Avocados'];
    selected = ['Oranges'];

    ngOnInit(): void {
        this.allPeople$.subscribe((person) => {
            console.log('people: ', person);
        })

        this.store.dispatch(shotgunPickerActions.FetchAllPeople());
    }

    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex,
            );
        }
    }

    dropInList(event: CdkDragDrop<string[]>) {
        if (event.previousContainer !== event.container) {
            transferArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex,
            );
        }
    }

    onSeatChange(seat: Seat, newPerson: Person | undefined) {
        const oldSeat = newPerson?.carSeat?.seat;
        if (oldSeat !== undefined) {
            this.store.dispatch(shotgunPickerActions.SetSeatPersonIdSelection({ seat: oldSeat, personId: undefined }));
        }
        
        this.store.dispatch(shotgunPickerActions.SetSeatPersonIdSelection({ 
            seat, 
            personId: newPerson?.id, 
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
