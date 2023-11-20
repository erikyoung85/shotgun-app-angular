import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";
import { ShotgunPickerService } from "../../services/shotgun-picker.service";
import { Injectable } from "@angular/core";
import * as shotgunPickerActions from '../actions/shotgun-picker.actions';
import { catchError, map, of, switchMap } from "rxjs";


@Injectable()
export class ShotgunPickerEffects {
    constructor(private actions$: Actions, private store: Store, private shotgunPickerService: ShotgunPickerService) {}

    fetchAllPeople$ = createEffect(() =>
        this.actions$.pipe(
            ofType(shotgunPickerActions.FetchAllPeople),
            switchMap(() => {
                return this.shotgunPickerService.getPeople().pipe(
                    map((people) => shotgunPickerActions.FetchAllPeopleSuccess({ people })),
                    catchError((errMsg) => of(shotgunPickerActions.FetchAllPeopleFailure({ errMsg })))
                )
            })
        ),
    )
}