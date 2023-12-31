import { createAction, props } from "@ngrx/store";
import { Group, Person } from "../state/group.state";

export const FetchGroup = createAction(
    '[Group] Fetch Group',
);
export const FetchGroupSuccess = createAction(
    '[Group] Fetch Group Success',
    props<{ group: Group }>(),
);
export const FetchGroupFailure = createAction(
    '[Group] Fetch Group Failure',
    props<{ errMsg: string }>(),
);

export const AddNewGroup = createAction(
    '[Group] Add New Group',
    props<{ groupName: string }>(),
);
export const AddNewGroupSuccess = createAction(
    '[Group] Add New Group Success',
    props<{ group: Group }>(),
);
export const AddNewGroupFailure = createAction(
    '[Group] Add New Group Failure',
    props<{ errMsg: string }>(),
);

export const AddPersonToGroup = createAction(
    '[Group] Add person to group',
    props<{ personName: string }>(),
);
export const AddPersonToGroupSuccess = createAction(
    '[Group] Add person to group Success',
    props<{ person: Person }>(),
);
export const AddPersonToGroupFailure = createAction(
    '[Group] Add person to group Failure',
    props<{ errMsg: string }>(),
);

export const EditPerson = createAction(
    '[Group] Edit person',
    props<{ person: Person }>(),
);
export const EditPersonSuccess = createAction(
    '[Group] Edit person Success',
    props<{ person: Person }>(),
);
export const EditPersonFailure = createAction(
    '[Group] Edit person Failure',
    props<{ errMsg: string }>(),
);

export const DeletePersonFromGroup = createAction(
    '[Group] Delete person from group',
    props<{ personId: number }>(),
);
export const DeletePersonFromGroupSuccess = createAction(
    '[Group] Delete person from group Success',
    props<{ personDict: { [personId: number]: Person } }>(),
);
export const DeletePersonFromGroupFailure = createAction(
    '[Group] Delete person from group Failure',
    props<{ errMsg: string }>(),
);

export const SetGroupName = createAction(
    '[Group] Set group name',
    props<{ name: string }>(),
);
export const SetGroupNameSuccess = createAction(
    '[Group] Set group name Success',
    props<{ name: string }>(),
);
export const SetGroupNameFailure = createAction(
    '[Group] Set group name Failure',
    props<{ errMsg: string }>(),
);

export const SetIsPersonInCar = createAction(
    '[Group] Set is person in car',
    props<{ personId: number, isInCar: boolean }>(),
);

export const OpenGroupNotFoundModal = createAction(
    '[Group] Open Group Not Found Modal',
);
export const OpenCreateNewGroupModal = createAction(
    '[Group] Open Create New Group Modal',
);
