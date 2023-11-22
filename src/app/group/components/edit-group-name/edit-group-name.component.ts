import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import * as groupSelectors from 'src/app/group/store/selectors/group.selectors';

@Component({
    selector: 'edit-group-name',
    templateUrl: './edit-group-name.component.html',
    styleUrls: ['./edit-group-name.component.scss'],
})
export class EditGroupNameComponent implements OnInit {
    @Output() newGroupName = new EventEmitter<string | null>();

    groupName$ = this.store.select(groupSelectors.selectGroupName)
    formControl = new FormControl<string>('');

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.groupName$.pipe(take(1)).subscribe((groupName) => {
            this.formControl.setValue(groupName);
        })
    }

    public onSaveClick(): void {
        this.newGroupName.emit(this.formControl.value);
    }

    public onCancelClick(): void {
        this.newGroupName.emit(null);
    }
}
