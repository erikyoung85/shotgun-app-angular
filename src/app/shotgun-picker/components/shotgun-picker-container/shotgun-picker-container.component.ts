import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as routerSelectors from 'src/app/routing/store/selectors/routing.selectors'

@Component({
    selector: 'app-shotgun-picker-container',
    templateUrl: './shotgun-picker-container.component.html',
    styleUrls: ['./shotgun-picker-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShotgunPickerContainerComponent implements OnInit {
    constructor(private store: Store, private router: Router) { }

    activeRoute$ = this.store.select(routerSelectors.selectCurrentRoute);

    ngOnInit(): void {
        this.activeRoute$.subscribe(activeRoute => {
            console.log('new active route: ', activeRoute);
        })
    }
}
