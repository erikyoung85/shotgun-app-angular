import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { catchError, map, of, switchMap } from "rxjs";
import * as groupActions from '../actions/group.actions';
import * as groupSelectors from '../selectors/group.selectors';
import { GroupService } from "../../services/group.service";
import { isNotNil } from "src/app/shared/utils/is-not-nil";

@Injectable()
export class GroupEffects {
    constructor(private actions$: Actions, private store: Store, private groupService: GroupService) {}

    fetchGroup$ = createEffect(() =>
        this.actions$.pipe(
            ofType(groupActions.FetchGroup),
            switchMap((action) => {
                return this.groupService.getGroup(action.groupId).pipe(
                    map((group) => groupActions.FetchGroupSuccess({ group })),
                    catchError((errMsg) => of(groupActions.FetchGroupFailure({ errMsg })))
                )
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
}