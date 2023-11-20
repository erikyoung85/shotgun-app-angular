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
    driverPerson$ = this.store.select(shotgunPickerSelectors.selectDriverPerson);
    shotgunPerson$ = this.store.select(shotgunPickerSelectors.selectShotgunPerson);
    leftNutPerson$ = this.store.select(shotgunPickerSelectors.selectLeftNutPerson);
    middlePerson$ = this.store.select(shotgunPickerSelectors.selectMiddlePerson);
    rightNutPerson$ = this.store.select(shotgunPickerSelectors.selectRightNutPerson);
    leftBackPerson$ = this.store.select(shotgunPickerSelectors.selectBackLeftPerson);
    rightBackPerson$ = this.store.select(shotgunPickerSelectors.selectBackRightPerson);

    items = ['Carrots', 'Tomatoes', 'Onions', 'Apples', 'Avocados'];
    selected = ['Oranges'];

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
        console.log('new ' + seat + ': ', newPerson);
        const selections = {
            [seat]: newPerson?.id
        }

        const oldSeat = newPerson?.seat;
        if (oldSeat !== undefined) {
            selections[oldSeat] = undefined;
        }
        
        this.store.dispatch(shotgunPickerActions.SetCarSeatSelection({ selections}));
    }

    ngOnInit(): void {
        this.allPeople$.subscribe((person) => {
            console.log('people: ', person);
        })

        this.store.dispatch(shotgunPickerActions.FetchAllPeople());
    }
}
