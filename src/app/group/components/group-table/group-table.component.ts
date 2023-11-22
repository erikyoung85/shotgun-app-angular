import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as groupSelectors from 'src/app/group/store/selectors/group.selectors';
import * as groupActions from 'src/app/group/store/actions/group.actions';
import { Person } from 'src/app/group/store/state/group.state';


@Component({
    selector: 'app-group-table',
    templateUrl: './group-table.component.html',
})
export class GroupTableComponent implements OnInit {
    constructor(private store: Store) {}

    displayedColumns = ['id', 'name', 'isInCar', 'delete'];

    allPeople$ = this.store.select(groupSelectors.selectAllPeople);

    ngOnInit(): void {
    }

    onToggleRow(person: Person) {
        this.store.dispatch(groupActions.SetIsPersonInCar({ personId: person.id, isInCar: !person.isInCar }))
    }

    onAddNewPerson() {
        console.log('add new person');
    }

    onDeletePerson(person: Person) {
        console.log('delete person: ', person);
    }
}
