import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as groupSelectors from 'src/app/group/store/selectors/group.selectors';
import * as groupActions from 'src/app/group/store/actions/group.actions';
import { Person } from 'src/app/group/store/state/group.state';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDeleteDialogComponent } from 'src/app/shared/components/shared-dialog/confirm-delete-dialog.component';
import { AddPersonComponent } from '../add-person/add-person.component';


@Component({
    selector: 'app-group-table',
    templateUrl: './group-table.component.html',
})
export class GroupTableComponent implements OnInit {
    constructor(private store: Store, public matDialog: MatDialog) {}

    displayedColumns = ['id', 'name', 'isInCar', 'delete'];

    allPeople$ = this.store.select(groupSelectors.selectAllPeople);

    ngOnInit(): void {
    }

    onToggleRow(person: Person) {
        this.store.dispatch(groupActions.SetIsPersonInCar({ personId: person.id, isInCar: !person.isInCar }))
    }

    onAddNewPerson() {
        let dialogRef: MatDialogRef<AddPersonComponent, any>;
        dialogRef = this.matDialog.open(AddPersonComponent);

        dialogRef.componentInstance.newPersonName.subscribe((newPersonName: string) => {
            if (newPersonName !== null) {
                console.log('new person name: ', newPersonName);
                this.store.dispatch(groupActions.AddPersonToGroup({ personName: newPersonName }));
            }

            dialogRef.close();
        });
    }

    onDeletePerson(person: Person) {
        let dialogRef: MatDialogRef<ConfirmDeleteDialogComponent, any>;

        dialogRef = this.matDialog.open(ConfirmDeleteDialogComponent);

        dialogRef.componentInstance.confirmation.subscribe((confirmation: boolean) => {
            if (confirmation) {
                console.log('delete person: ', person);
            }

            dialogRef.close();
        });
    }
}
