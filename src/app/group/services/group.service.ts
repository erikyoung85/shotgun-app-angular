import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Group, Person } from '../store/state/group.state';
import { GetGroupResponseDtoV1 } from '../models/GroupResponseDtoV1.interface';

@Injectable({
    providedIn: 'root'
})
export class GroupService {

    constructor(private http: HttpClient) { }

    getGroup(groupId: number): Observable<Group> {
        const url = `/api/group/getGroup`;
        const params = {
            groupId: groupId,
        }
        return this.http.get<GetGroupResponseDtoV1>(url, { params }).pipe(
            map(this.mapGroupResponseDtoV1ToGroup)
        );
    }

    createGroup(groupName: string): Observable<Group> {
        const url = `/api/group/addGroup`;
        const body = {
            groupName: groupName
        }
        return this.http.post<GetGroupResponseDtoV1>(url, body).pipe(
            map(this.mapGroupResponseDtoV1ToGroup)
        );
    }

    setGroupName(groupId: number, groupName: string): Observable<string> {
        const url = `/api/group/editGroup`;
        const body = {
            groupId: groupId,
            groupName: groupName
        }
        return this.http.post<{ name: string }>(url, { body }).pipe(
            map(res => res.name)
        );
    }

    addPersonToGroup(groupId: number, personName: string): Observable<Person> {
        const url = `/api/group/addPerson`;
        const body = {
            groupId: groupId,
            personName: personName,
        }
        return this.http.post<Person>(url, { body });
    }

    editPerson(groupId: number, person: Person): Observable<Person> {
        const url = `/api/group/editPerson`;
        const body = {
            person: person,
        }
        return this.http.post<Person>(url, { body });
    }

    deletePersonFromGroup(groupId: number, personId: number): Observable<boolean> {
        const url = `/api/group/deletePerson`;
        const body = {
            groupId: groupId,
            personId: personId,
        }
        return this.http.post<boolean>(url, { body });
    }

    private mapGroupResponseDtoV1ToGroup(groupDto: GetGroupResponseDtoV1): Group {
        const personDict: { [personId: number]: Person } = {};
        groupDto.people.forEach(personDto => {
            personDict[personDto.id] = {
                id: personDto.id,
                name: personDto.name,
                groupId: personDto.group_id,
                isInCar: true,
            };
        });

        return {
            id: groupDto.id,
            name: groupDto.name,
            personDict: personDict,
        }
    }
}
