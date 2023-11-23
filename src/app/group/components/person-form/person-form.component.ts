import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, ValidationErrors, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, map, take } from 'rxjs';
import * as groupSelectors from 'src/app/group/store/selectors/group.selectors';
import { Person } from '../../store/state/group.state';

@Component({
    selector: 'person-form',
    templateUrl: './person-form.component.html',
    styleUrls: ['./person-form.component.scss'],
})
export class PersonFormComponent implements OnInit {
    @Input() person: Person = { groupId: 0, id: 0, name: '', isInCar: true };
    @Output() newPersonEmitter = new EventEmitter<Person | null>();

    formControl!: FormControl<string | null>;;

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.formControl = new FormControl(
            this.person?.name ?? '', 
            [Validators.required], 
            [this.validateUniquePersonName()]
        )
    }

    public onSaveClick(): void {
        if (this.formControl.invalid) return;
        
        const newPerson: Person = {
            ...this.person,
            name: this.formControl.value ?? '',
        };
        this.newPersonEmitter.emit(newPerson);
    }

    public onCancelClick(): void {
        this.newPersonEmitter.emit(null);
    }

    private validateUniquePersonName(): AsyncValidatorFn {
        return (control: AbstractControl<string>): Observable<ValidationErrors | null> => {
            return this.store.select(groupSelectors.selectAllPeople).pipe(
                take(1),
                map((people) => {
                    let error = null;
                    if (people.some((person) => person.name !== this.person.name && person.name === control.value)) {
                        error = { uniqueName: { value: control.value } };
                    }
                    return error;
                })
            )
        };
    }
}
