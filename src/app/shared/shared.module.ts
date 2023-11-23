import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { NgMaterialModule } from './ng-material.module';
import { LetDirective, PushPipe } from '@ngrx/component';
import { ConfirmDeleteDialogComponent } from './components/shared-dialog/confirm-delete-dialog.component';
import { LoaderDirective } from './directives/loading-overlay/loading-overlay.directive';

@NgModule({
    declarations: [
        IconButtonComponent,
        ConfirmDeleteDialogComponent,
        LoaderDirective,
    ],
    exports: [
        IconButtonComponent,
        NgMaterialModule,
        LetDirective, 
        PushPipe, 
        ConfirmDeleteDialogComponent,
        LoaderDirective,
    ],
    imports: [
        CommonModule,
        NgMaterialModule,
    ]
})
export class SharedModule { }
