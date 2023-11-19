import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Person } from '../models/person';

@Injectable({
    providedIn: 'root'
})
export class ShotgunPickerService {

    constructor(private http: HttpClient) { }

    getPeople(): Observable<HttpResponse<Person[]>> {
        const url = `/api/people`;
        return this.http.get<HttpResponse<Person[]>>(url)
    }
}
