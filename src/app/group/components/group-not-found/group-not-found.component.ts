import { Component, EventEmitter, Output } from '@angular/core';

export enum GroupNotFoundAction {
    TRY_AGAIN = 'TRY AGAIN',
    CREATE_NEW_GROUP = 'CREATE NEW GROUP',
}

@Component({
    selector: 'group-not-found',
    templateUrl: './group-not-found.component.html',
    styleUrls: ['./group-not-found.component.scss'],
})
export class GroupNotFoundComponent {
    @Output() chosenAction = new EventEmitter<GroupNotFoundAction>();

    public onTryAgainClick(): void {
        this.chosenAction.emit(GroupNotFoundAction.TRY_AGAIN);
    }

    public onNewGroupClick(): void {
        this.chosenAction.emit(GroupNotFoundAction.CREATE_NEW_GROUP);
    }
}
