import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as routerSelectors from 'src/app/routing/store/selectors/routing.selectors'
import * as groupSelectors from 'src/app/group/store/selectors/group.selectors';

@Component({
    selector: 'app-shotgun-picker-container',
    templateUrl: './shotgun-picker-container.component.html',
    styleUrls: ['./shotgun-picker-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShotgunPickerContainerComponent implements OnInit {
    constructor(private store: Store) { }

    isGroupLoading$ = this.store.select(groupSelectors.selectGroupIsLoading);
    activeRoute$ = this.store.select(routerSelectors.selectCurrentRoute);

    ngOnInit(): void {
        this.activeRoute$.subscribe(activeRoute => {
            console.log('new active route: ', activeRoute);
        })
    }
}
