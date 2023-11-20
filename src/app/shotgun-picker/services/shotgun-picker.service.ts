import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Person } from '../store/state/shotgun-picker.state';

@Injectable({
    providedIn: 'root'
})
export class ShotgunPickerService {

    constructor(private http: HttpClient) { }

    getPeople(): Observable<Person[]> {
        const url = `/api/people`;
        return this.http.get<Person[]>(url);
    }
}
