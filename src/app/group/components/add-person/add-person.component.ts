import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import * as groupSelectors from 'src/app/group/store/selectors/group.selectors';

@Component({
    selector: 'add-person',
    templateUrl: './add-person.component.html',
    styleUrls: ['./add-person.component.scss'],
})
export class AddPersonComponent implements OnInit {
    @Output() newPersonName = new EventEmitter<string | null>();

    formControl = new FormControl<string>('');

    constructor(private store: Store) {}

    ngOnInit(): void {
    }

    public onAddClick(): void {
        this.newPersonName.emit(this.formControl.value);
    }

    public onCancelClick(): void {
        this.newPersonName.emit(null);
    }
}
