import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as shotgunPickerSelectors from '../../store/selectors/shotgun-picker.selectors';
import * as groupSelectors from 'src/app/group/store/selectors/group.selectors';
import { Person } from 'src/app/group/store/state/group.state';


@Component({
    selector: 'app-choose-passengers',
    templateUrl: './choose-passengers.component.html',
})
export class ChoosePassengersComponent implements OnInit {
    constructor(private store: Store) {}

    displayedColumns = ['id', 'name', 'include'];

    allPeople$ = this.store.select(groupSelectors.selectAllPeople);

    ngOnInit(): void {
    }

    onToggleRow(person: Person) {}
}
