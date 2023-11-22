import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { NgMaterialModule } from './ng-material.module';
import { LetDirective, PushPipe } from '@ngrx/component';
import { ConfirmDeleteDialogComponent } from './components/shared-dialog/confirm-delete-dialog.component';

@NgModule({
    declarations: [
        IconButtonComponent,
        ConfirmDeleteDialogComponent,
    ],
    exports: [
        IconButtonComponent,
        NgMaterialModule,
        LetDirective, 
        PushPipe, 
        ConfirmDeleteDialogComponent,
    ],
    imports: [
        CommonModule,
        NgMaterialModule,
    ]
})
export class SharedModule { }
