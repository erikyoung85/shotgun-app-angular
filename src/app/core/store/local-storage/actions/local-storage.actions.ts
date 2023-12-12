import { createAction, props } from '@ngrx/store';

export const LocalStorageAddGroupId = createAction(
    '[Local Storage] Add a groupId to localstorage',
    props<{ groupId: number }>(),
);
