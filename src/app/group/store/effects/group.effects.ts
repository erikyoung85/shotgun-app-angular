import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { catchError, map, of, switchMap, take, tap } from "rxjs";
import * as groupActions from '../actions/group.actions';
import * as groupSelectors from '../selectors/group.selectors';
import { GroupService } from "../../services/group.service";
import { isNotNil } from "src/app/shared/utils/is-not-nil";
import * as routerSelectors from 'src/app/routing/store/selectors/routing.selectors';
import { Router } from "@angular/router";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { GroupNotFoundAction, GroupNotFoundComponent } from "../../components/group-not-found/group-not-found.component";
import { AddNewGroupComponent } from "../../components/add-new-group/add-new-group.component";

@Injectable()
export class GroupEffects {
    constructor(
        private actions$: Actions, 
        private store: Store, 
        private groupService: GroupService,
        private router: Router,
        public matDialog: MatDialog,
    ) {}

    fetchGroup$ = createEffect(() =>
        this.actions$.pipe(
            ofType(groupActions.FetchGroup),
            concatLatestFrom(() => [this.store.select(routerSelectors.selectGroupId)]),
            switchMap(([, groupId]) => {
                if (groupId !== undefined) {
                    return this.groupService.getGroup(groupId).pipe(
                        map((group) => groupActions.FetchGroupSuccess({ group })),
                        catchError((errMsg) => of(groupActions.FetchGroupFailure({ errMsg })))
                    )
                } else {
                    return of(groupActions.FetchGroupFailure({ errMsg: 'No group id provided' }))
                }
            })
        ),
    )

    addNewGroup$ = createEffect(() =>
        this.actions$.pipe(
            ofType(groupActions.AddNewGroup),
            switchMap((action) => {
                return this.groupService.createGroup(action.groupName).pipe(
                    map((group) => groupActions.AddNewGroupSuccess({ group })),
                    catchError((errMsg) => of(groupActions.AddNewGroupFailure({ errMsg })))
                )
            })
        ),
    )
    addNewGroupSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(groupActions.AddNewGroupSuccess),
            map((action) => {
                this.router.navigate([], { queryParams: { groupId: action.group.id } });
            })
        ),
        { dispatch: false }
    )
    addNewGroupFailure$ = createEffect(() =>
        this.actions$.pipe(
            ofType(groupActions.AddNewGroupFailure),
            map(() => {
                return groupActions.OpenGroupNotFoundModal();
            })
        ),
    )

    addPersonToGroup$ = createEffect(() =>
        this.actions$.pipe(
            ofType(groupActions.AddPersonToGroup),
            concatLatestFrom(() => this.store.select(groupSelectors.selectGroup).pipe(isNotNil())),
            switchMap(([action, group]) => {
                return this.groupService.addPersonToGroup(group?.id, action.personName).pipe(
                    map((person) => groupActions.AddPersonToGroupSuccess({ person })),
                    catchError((errMsg) => of(groupActions.AddPersonToGroupFailure({ errMsg })))
                )
            })
        ),
    )

    editPerson$ = createEffect(() =>
        this.actions$.pipe(
            ofType(groupActions.EditPerson),
            concatLatestFrom(() => this.store.select(groupSelectors.selectGroup).pipe(isNotNil())),
            switchMap(([action, group]) => {
                return this.groupService.editPerson(group?.id, action.person).pipe(
                    map((person) => groupActions.EditPersonSuccess({ person })),
                    catchError((errMsg) => of(groupActions.EditPersonFailure({ errMsg })))
                )
            })
        ),
    )

    deletePersonFromGroup$ = createEffect(() =>
        this.actions$.pipe(
            ofType(groupActions.DeletePersonFromGroup),
            concatLatestFrom(() => this.store.select(groupSelectors.selectGroup).pipe(isNotNil())),
            switchMap(([action, group]) => {
                return this.groupService.deletePersonFromGroup(group.id, action.personId).pipe(
                    map(() => {
                        const newPersonDict = { ...group.personDict };
                        delete newPersonDict[action.personId];
                        return groupActions.DeletePersonFromGroupSuccess({ personDict: newPersonDict })
                    }),
                    catchError((errMsg) => of(groupActions.DeletePersonFromGroupFailure({ errMsg })))
                )
            })
        ),
    )

    setGroupName$ = createEffect(() =>
        this.actions$.pipe(
            ofType(groupActions.SetGroupName),
            concatLatestFrom(() => this.store.select(groupSelectors.selectGroup).pipe(isNotNil())),
            switchMap(([action, group]) => {
                return this.groupService.setGroupName(group.id, action.name).pipe(
                    map((name) => groupActions.SetGroupNameSuccess({ name })),
                    catchError((errMsg) => of(groupActions.SetGroupNameFailure({ errMsg })))
                )
            })
        ),
    )

    openGroupNotFoundModal$ = createEffect(() =>
        this.actions$.pipe(
            ofType(groupActions.OpenGroupNotFoundModal),
            tap(() => {
                let dialogRef: MatDialogRef<GroupNotFoundComponent, any>;
                dialogRef = this.matDialog.open(GroupNotFoundComponent);

                dialogRef.componentInstance.chosenAction.pipe(take(1)).subscribe((chosenAction) => {
                    dialogRef.close();

                    if (chosenAction === GroupNotFoundAction.TRY_AGAIN) {
                        this.router.navigate([]);
                    }
                    else if (chosenAction === GroupNotFoundAction.CREATE_NEW_GROUP) {
                        this.store.dispatch(groupActions.OpenCreateNewGroupModal());
                    }
                })
            })
        ),
        { dispatch: false }
    )

    openCreateNewGroupModal$ = createEffect(() =>
        this.actions$.pipe(
            ofType(groupActions.OpenCreateNewGroupModal),
            tap(() => {
                let dialogRef: MatDialogRef<AddNewGroupComponent, any>;
                dialogRef = this.matDialog.open(AddNewGroupComponent);

                dialogRef.componentInstance.newGroupName.pipe(take(1)).subscribe((newGroupName) => {
                    if (newGroupName) {
                        this.store.dispatch(groupActions.AddNewGroup({ groupName: newGroupName }));
                    }

                    dialogRef.close();
                })
            })
        ),
        { dispatch: false }
    )
}