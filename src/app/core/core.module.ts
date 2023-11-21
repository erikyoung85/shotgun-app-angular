import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CommonLayoutComponent } from './components/common-layout/common-layout.component';
import { ShotgunPickerModule } from '../shotgun-picker/shotgun-picker.module';

@NgModule({
    declarations: [CommonLayoutComponent],
    exports: [CommonLayoutComponent],
    imports: [
        CommonModule,
        SharedModule,
        ShotgunPickerModule
    ],
})
export class CoreModule { }
  