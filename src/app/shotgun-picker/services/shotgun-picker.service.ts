import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ShotgunPickerService {

    constructor(private http: HttpClient) { }

    getSelectedPersonIdsForGroup(groupId: number): Observable<number[]> {
        return of([1, 2, 3, 4]);
    }
}
