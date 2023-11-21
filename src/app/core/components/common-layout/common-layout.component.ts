import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as routerSelectors from 'src/app/routing/store/selectors/routing.selectors'

@Component({
    selector: 'common-layout',
    templateUrl: './common-layout.component.html',
    styleUrls: ['./common-layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonLayoutComponent implements OnInit {
    constructor(private store: Store, private router: Router) { }

    tabOptions = [
        {
            label: 'Picker',
            url: '/'
        },
        {
            label: 'Settings',
            url: '/settings'
        }
    ];

    activeRoute$ = this.store.select(routerSelectors.selectCurrentRoute);

    ngOnInit(): void {
        this.activeRoute$.subscribe(activeRoute => {
            console.log('new active route: ', activeRoute);
        })
    }

    onTabClick(url: string) {
        this.router.navigate([url])
    }
}
