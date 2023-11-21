import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { NgMaterialModule } from './ng-material.module';
import { LetDirective, PushPipe } from '@ngrx/component';

@NgModule({
    declarations: [
        IconButtonComponent,
    ],
    exports: [
        IconButtonComponent,
        NgMaterialModule,
        LetDirective, 
        PushPipe, 
    ],
    imports: [
        CommonModule,
        NgMaterialModule,
    ]
})
export class SharedModule { }
