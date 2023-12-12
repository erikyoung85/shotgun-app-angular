import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
    selector: 'add-new-group',
    templateUrl: './add-new-group.component.html',
    styleUrls: ['./add-new-group.component.scss'],
})
export class AddNewGroupComponent {
    @Output() newGroupName = new EventEmitter<string | null>();

    formControl = new FormControl<string>('');

    constructor(private store: Store) {}

    public onSaveClick(): void {
        this.newGroupName.emit(this.formControl.value);
    }

    public onCancelClick(): void {
        this.newGroupName.emit(null);
    }
}
