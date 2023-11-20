import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../../models/person';
import { Store } from '@ngrx/store';
import * as shotgunPickerSelectors from '../../store/selectors/shotgun-picker.selectors';
import * as shotgunPickerActions from '../../store/actions/shotgun-picker.actions';


@Component({
    selector: 'app-shotgun-picker-include-user',
    templateUrl: './shotgun-picker-include-user.component.html',
})
export class ShotgunPickerIncludeUserComponent implements OnInit {
    constructor(private store: Store) {}

    allPeople$ = this.store.select(shotgunPickerSelectors.selectAllPeople);
    selectedPeople$ = this.store.select(shotgunPickerSelectors.selectSelectedPeople);

    ngOnInit(): void {
    }
}
