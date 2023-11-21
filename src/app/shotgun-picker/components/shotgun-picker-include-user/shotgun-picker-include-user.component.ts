import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as shotgunPickerSelectors from '../../store/selectors/shotgun-picker.selectors';
import { Passenger } from '../../store/state/shotgun-picker.state';


@Component({
    selector: 'app-shotgun-picker-include-user',
    templateUrl: './shotgun-picker-include-user.component.html',
})
export class ShotgunPickerIncludeUserComponent implements OnInit {
    constructor(private store: Store) {}

    displayedColumns = ['id', 'name', 'isInCar'];

    allPassengers$ = this.store.select(shotgunPickerSelectors.selectAllPassengers);

    ngOnInit(): void {
    }

    onToggleRow(passenger: Passenger) {}
}
