import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { catchError, map, of, switchMap } from "rxjs";
import * as groupActions from '../actions/group.actions';
import * as groupSelectors from '../selectors/group.selectors';
import { GroupService } from "../../services/group.service";
import { isNotNil } from "src/app/shared/utils/is-not-nil";
import * as routerSelectors from 'src/app/routing/store/selectors/routing.selectors';

@Injectable()
export class GroupEffects {
    constructor(private actions$: Actions, private store: Store, private groupService: GroupService) {}

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
                    return [];
                }
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
}