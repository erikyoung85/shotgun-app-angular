import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';


@Component({
    selector: 'app-group-container',
    templateUrl: './group-container.component.html',
})
export class GroupContainerComponent implements OnInit {
    constructor(private store: Store) {}

    ngOnInit(): void {
    }
}
