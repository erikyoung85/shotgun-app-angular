import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CdkTreeModule } from '@angular/cdk/tree';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatChipsModule } from '@angular/material/chips';
import { LayoutModule } from '@angular/cdk/layout';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LetDirective, PushPipe } from '@ngrx/component';

@NgModule({
    imports: [
        CdkTreeModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatSelectModule,
        MatSidenavModule,
        MatOptionModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatTreeModule,
        MatTabsModule,
        MatCardModule,
        MatChipsModule,
        MatDividerModule,
        MatDatepickerModule,
        MatTableModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        MatDialogModule,
        MatNativeDateModule,
        MatBadgeModule,
        MatProgressBarModule,
        MatSortModule,
        MatListModule,
        MatCheckboxModule,
        MatTooltipModule,
        MatMenuModule,
        MatRadioModule,
        LayoutModule,
        MatExpansionModule,
        MatSnackBarModule,
        DragDropModule,
        LetDirective, 
        PushPipe, 
    ],
    exports: [
        CdkTreeModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatSelectModule,
        MatSidenavModule,
        MatOptionModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatTreeModule,
        MatTabsModule,
        MatCardModule,
        MatChipsModule,
        MatDividerModule,
        MatDatepickerModule,
        MatTableModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        MatDialogModule,
        MatNativeDateModule,
        MatBadgeModule,
        MatProgressBarModule,
        MatSortModule,
        MatListModule,
        MatCheckboxModule,
        MatTooltipModule,
        MatMenuModule,
        MatRadioModule,
        LayoutModule,
        MatExpansionModule,
        MatSnackBarModule,
        DragDropModule,
        LetDirective, 
        PushPipe, 
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NgMaterialModule {}

/**  Copyright 2021 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
