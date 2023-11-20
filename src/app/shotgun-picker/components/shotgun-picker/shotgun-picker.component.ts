import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ShotgunPickerService } from '../../services/shotgun-picker.service';
import { Store } from '@ngrx/store';
import * as shotgunPickerSelectors from '../../store/selectors/shotgun-picker.selectors';
import * as shotgunPickerActions from '../../store/actions/shotgun-picker.actions';

@Component({
    selector: 'app-shotgun-picker',
    templateUrl: './shotgun-picker.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShotgunPickerComponent implements OnInit {
    constructor(private store: Store,private shotgunPickerService: ShotgunPickerService) { }

    allPeople$ = this.store.select(shotgunPickerSelectors.selectAllPeople);

    ngOnInit(): void {
        this.allPeople$.subscribe((person) => {
            console.log('people: ', person);
        })

        this.store.dispatch(shotgunPickerActions.FetchAllPeople());

    }
}
