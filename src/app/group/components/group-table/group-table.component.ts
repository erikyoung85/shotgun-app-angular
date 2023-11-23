import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as groupSelectors from 'src/app/group/store/selectors/group.selectors';
import * as groupActions from 'src/app/group/store/actions/group.actions';
import { Person } from 'src/app/group/store/state/group.state';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDeleteDialogComponent } from 'src/app/shared/components/shared-dialog/confirm-delete-dialog.component';
import { PersonFormComponent } from '../person-form/person-form.component';


@Component({
    selector: 'app-group-table',
    templateUrl: './group-table.component.html',
})
export class GroupTableComponent implements OnInit {
    constructor(private store: Store, public matDialog: MatDialog) {}

    displayedColumns = ['name', 'isInCar', 'edit', 'delete'];

    allPeople$ = this.store.select(groupSelectors.selectAllPeople);

    ngOnInit(): void {
    }

    onToggleRow(person: Person) {
        this.store.dispatch(groupActions.SetIsPersonInCar({ personId: person.id, isInCar: !person.isInCar }))
    }

    onAddNewPerson() {
        let dialogRef: MatDialogRef<PersonFormComponent, any>;
        dialogRef = this.matDialog.open(PersonFormComponent);

        dialogRef.componentInstance.newPersonEmitter.subscribe((newPerson) => {
            if (newPerson !== null) {
                this.store.dispatch(groupActions.AddPersonToGroup({ personName: newPerson.name }));
            }

            dialogRef.close();
        });
    }

    onEditPerson(person: Person) {
        let dialogRef: MatDialogRef<PersonFormComponent, any>;
        dialogRef = this.matDialog.open(PersonFormComponent);

        dialogRef.componentInstance.person = person;

        dialogRef.componentInstance.newPersonEmitter.subscribe((newPerson) => {
            if (newPerson !== null) {
                console.log('new person: ', newPerson);
            }

            dialogRef.close();
        });
    }

    onDeletePerson(person: Person) {
        let dialogRef: MatDialogRef<ConfirmDeleteDialogComponent, any>;

        dialogRef = this.matDialog.open(ConfirmDeleteDialogComponent);

        dialogRef.componentInstance.confirmation.subscribe((confirmation: boolean) => {
            if (confirmation) {
                this.store.dispatch(groupActions.DeletePersonFromGroup({ personId: person.id }));
            }

            dialogRef.close();
        });
    }
}
