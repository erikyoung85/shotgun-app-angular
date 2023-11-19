import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShotgunPickerComponent } from './shotgun-picker/components/shotgun-picker/shotgun-picker.component';

const routes: Routes = [
    {
        path: '',
        component: ShotgunPickerComponent
    },
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
