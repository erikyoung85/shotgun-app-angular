import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person, GroupId } from '../store/state/group.state';
import { Params } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class GroupService {

    constructor(private http: HttpClient) { }

    getAllPeopleForGroup(groupId: GroupId): Observable<Person[]> {
        const url = `/api/group/allPeople`;
        const params: Params = {
            groupId: groupId
        }
        return this.http.get<Person[]>(url, { params });
    }
}
