import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";
import { ShotgunPickerService } from "../../services/shotgun-picker.service";
import { Injectable } from "@angular/core";
import { catchError, map, of, switchMap } from "rxjs";
import * as shotgunPickerActions from '../actions/shotgun-picker.actions';
import * as shotgunPickerSelectors from '../selectors/shotgun-picker.selectors';
import { Seat } from "../state/shotgun-picker.state";


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

    randomPickSeatsForPeople$ = createEffect(() =>
        this.actions$.pipe(
            ofType(shotgunPickerActions.RandomPickSeatsForPeople),
            concatLatestFrom(() => [
                this.store.select(shotgunPickerSelectors.selectAvailablePeople),
                this.store.select(shotgunPickerSelectors.selectAvailableSeats),
            ]),
            switchMap(([, availablePeople, availableSeats]) => {
                const actions: Action[] = [];
                const availablePeopleMut = [...availablePeople]

                for (const seatSelection of availableSeats) {
                    if (availablePeopleMut.length === 0) break;

                    const person = this.randomPop(availablePeopleMut);
                    actions.push(shotgunPickerActions.SetSeatPersonIdSelection({ 
                        seat: seatSelection.seat, 
                        personId: person?.id,
                        isSetByUser: false,
                    }));
                }

                return actions;
            })
        ),
    )

    randomPop<T>(array: T[]): T | undefined {
        if (array.length === 0) {
            return;
        }

        const randomIndex = Math.floor(Math.random() * array.length);
        return array.splice(randomIndex, 1)[0];
    }
}