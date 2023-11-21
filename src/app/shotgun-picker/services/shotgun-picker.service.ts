import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GroupId } from 'src/app/group/store/state/group.state';

@Injectable({
    providedIn: 'root'
})
export class ShotgunPickerService {

    constructor(private http: HttpClient) { }

    getSelectedPersonIdsForGroup(groupId: GroupId): Observable<number[]> {
        return of([1, 2, 3, 4]);
    }
}
