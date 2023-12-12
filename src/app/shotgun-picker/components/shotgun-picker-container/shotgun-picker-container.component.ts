import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as routerSelectors from 'src/app/routing/store/selectors/routing.selectors'
import * as groupSelectors from 'src/app/group/store/selectors/group.selectors';
import * as groupActions from 'src/app/group/store/actions/group.actions';
import * as localStorageActions from 'src/app/core/store/local-storage/actions/local-storage.actions';
import * as localStorageSelectors from 'src/app/core/store/local-storage/selectors/local-storage.selectors';
import { Subscription, combineLatest, take } from 'rxjs';
import { Router } from '@angular/router';
import { concatLatestFrom } from '@ngrx/effects';

enum TabIdx {
    SHOTGUN = 0,
    GROUP = 1,
    LEADERBOARD = 1,
}

@Component({
    selector: 'app-shotgun-picker-container',
    templateUrl: './shotgun-picker-container.component.html',
    styleUrls: ['./shotgun-picker-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShotgunPickerContainerComponent implements OnInit, OnDestroy {
    subscriptions: Subscription = new Subscription();
    constructor(private store: Store, private router: Router) { }

    selectedTabIdx: TabIdx = TabIdx.SHOTGUN;

    group$ = this.store.select(groupSelectors.selectGroup);
    isGroupLoading$ = this.store.select(groupSelectors.selectGroupIsLoading);

    activeRoute$ = this.store.select(routerSelectors.selectCurrentRoute);
    selectedGroupId$ = this.store.select(routerSelectors.selectGroupId);

    ngOnInit(): void {
        this.subscriptions.add(
            this.selectedGroupId$.pipe(
                concatLatestFrom(() => this.store.select(localStorageSelectors.selectGroupIds))
            ).subscribe(([selectedGroupId, groupIds]) => {
                if (selectedGroupId === undefined) {
                    if (groupIds.length === 0) {
                        this.selectedTabIdx = TabIdx.GROUP;
                        this.store.dispatch(groupActions.OpenGroupNotFoundModal())
                    } 
                    else {
                        this.router.navigate([], { queryParams: { groupId: groupIds[0] } });
                    }

                    return;
                }
    
    
                if (!groupIds.includes(selectedGroupId)) {
                    this.store.dispatch(localStorageActions.LocalStorageAddGroupId({ groupId: selectedGroupId }))
                }
    
                this.store.dispatch(groupActions.FetchGroup());
            })
        )
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }
}
