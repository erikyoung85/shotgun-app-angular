import { Component, OnInit } from '@angular/core';
import { ShotgunPickerService } from '../../services/shotgun-picker.service';

@Component({
    selector: 'app-shotgun-picker',
    templateUrl: './shotgun-picker.component.html',
})
export class ShotgunPickerComponent implements OnInit {
    
    constructor(private shotgunPickerService: ShotgunPickerService) { }

    ngOnInit(): void {
        this.shotgunPickerService.getPeople().subscribe((person) => {
            console.log('people: ', person);
        })
    }
}
