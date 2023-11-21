import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CommonLayoutComponent } from './core/components/common-layout/common-layout.component';
import { ShotgunPickerComponent } from './shotgun-picker/components/shotgun-picker/shotgun-picker.component';

const routes: Routes = [
    {
        path: '',
        component: CommonLayoutComponent
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
