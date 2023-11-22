import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { ShotgunPickerContainerComponent } from './shotgun-picker/components/shotgun-picker-container/shotgun-picker-container.component';

const routes: Routes = [
    {
        path: '',
        component: ShotgunPickerContainerComponent
    },
];


@NgModule({
    imports: [
        StoreRouterConnectingModule.forRoot(),
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
