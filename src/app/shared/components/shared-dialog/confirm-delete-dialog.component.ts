import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'confirm-delete-dialog',
    templateUrl: './confirm-delete-dialog.component.html',
    styleUrls: ['./confirm-delete-dialog.component.scss'],
})
export class ConfirmDeleteDialogComponent implements OnInit {
    @Output() confirmation = new EventEmitter<boolean>();

    constructor() {}

    ngOnInit(): void {}

    public onDeleteClick(): void {
        this.confirmation.emit(true);
    }

    public onCancelClick(): void {
        this.confirmation.emit(false);
    }
}
