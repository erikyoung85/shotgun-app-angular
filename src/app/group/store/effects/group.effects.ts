import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { catchError, map, of, switchMap } from "rxjs";
import * as groupActions from '../actions/group.actions';
import * as groupSelectors from '../selectors/group.selectors';
import { GroupService } from "../../services/group.service";


@Injectable()
export class GroupEffects {
    constructor(private actions$: Actions, private store: Store, private groupService: GroupService) {}

    fetchAllPeople$ = createEffect(() =>
        this.actions$.pipe(
            ofType(groupActions.FetchAllPeopleForGroup),
            concatLatestFrom(() => [this.store.select(groupSelectors.selectGroupId)]),
            switchMap(([, groupId]) => {
                return this.groupService.getAllPeopleForGroup(groupId).pipe(
                    map((people) => groupActions.FetchAllPeopleSuccess({ people })),
                    catchError((errMsg) => of(groupActions.FetchAllPeopleFailure({ errMsg })))
                )
            })
        ),
    )
}