import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { EditGroupNameComponent } from '../edit-group-name/edit-group-name.component';
import * as groupSelectors from 'src/app/group/store/selectors/group.selectors';
import * as groupActions from 'src/app/group/store/actions/group.actions';

@Component({
    selector: 'app-group-container',
    templateUrl: './group-container.component.html',
})
export class GroupContainerComponent implements OnInit {
    constructor(private store: Store, public matDialog: MatDialog) {}

    groupName$ = this.store.select(groupSelectors.selectGroupName);
    group$ = this.store.select(groupSelectors.selectGroup);

    ngOnInit(): void {
        this.group$.subscribe(group => {
            console.log('group: ', group);
        })
    }

    onEditGroupNameClick() {
        let dialogRef: MatDialogRef<EditGroupNameComponent, any>;
        dialogRef = this.matDialog.open(EditGroupNameComponent);

        dialogRef.componentInstance.newGroupName.subscribe((newGroupName) => {
            if (newGroupName !== null) {
                this.store.dispatch(groupActions.SetGroupName({ name: newGroupName }));
            }

            dialogRef.close();
        });
    }
}
