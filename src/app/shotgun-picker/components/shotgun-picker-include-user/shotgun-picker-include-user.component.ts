import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as shotgunPickerSelectors from '../../store/selectors/shotgun-picker.selectors';
import { Person } from '../../store/state/shotgun-picker.state';


@Component({
    selector: 'app-shotgun-picker-include-user',
    templateUrl: './shotgun-picker-include-user.component.html',
})
export class ShotgunPickerIncludeUserComponent implements OnInit {
    constructor(private store: Store) {}

    displayedColumns = ['id', 'name', 'isInCar'];

    allPeople$ = this.store.select(shotgunPickerSelectors.selectAllPeople);

    ngOnInit(): void {
    }

    onToggleRow(person: Person) {}
}
