import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { catchError, map, of, switchMap } from "rxjs";
import * as shotgunPickerActions from '../actions/shotgun-picker.actions';
import * as shotgunPickerSelectors from '../selectors/shotgun-picker.selectors';
import * as groupSelectors from 'src/app/group/store/selectors/group.selectors';
import { ShotgunPickerService } from "../../services/shotgun-picker.service";


@Injectable()
export class ShotgunPickerEffects {
    constructor(private actions$: Actions, private store: Store, private shotgunPickerService: ShotgunPickerService) {}

    fetchAllPeople$ = createEffect(() =>
        this.actions$.pipe(
            ofType(shotgunPickerActions.InitPassengers),
            concatLatestFrom(() => [this.store.select(groupSelectors.selectGroupId)]),
            switchMap(([, groupId]) => {
                return this.shotgunPickerService.getSelectedPersonIdsForGroup(groupId).pipe(
                    map((personIds) => shotgunPickerActions.InitPassengersSuccess({ personIds })),
                    catchError((errMsg) => of(shotgunPickerActions.InitPassengersFailure({ errMsg })))
                )
            })
        ),
    )

    randomPickSeatsForPeople$ = createEffect(() =>
        this.actions$.pipe(
            ofType(shotgunPickerActions.RandomPickSeatsForPeople),
            concatLatestFrom(() => [
                this.store.select(shotgunPickerSelectors.selectAvailablePassengers),
                this.store.select(shotgunPickerSelectors.selectAvailableSeats),
            ]),
            switchMap(([, availablePassengers, availableSeats]) => {
                const actions: Action[] = [];
                const availablePassengersMut = [...availablePassengers]

                for (const seatSelection of availableSeats) {
                    if (availablePassengersMut.length === 0) break;

                    const passenger = this.randomPop(availablePassengersMut);
                    actions.push(shotgunPickerActions.SetSeatPassengerIdSelection({ 
                        seat: seatSelection.seat, 
                        passengerId: passenger?.id,
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