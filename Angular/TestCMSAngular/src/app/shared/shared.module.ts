import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LayoutModule } from '../layouts/layout.module';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

import { LoaderComponent } from './components/loader/loader.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { DialogComponent } from './components/dialogs/dialog/dialog.component';
import { DialogHeaderComponent } from './components/dialogs/dialog-header/dialog-header.component';
import { DialogFooterComponent } from './components/dialogs/dialog-footer/dialog-footer.component';

@NgModule({
  declarations: [
    LoaderComponent,
    SnackbarComponent,
    DialogComponent,
    DialogHeaderComponent,
    DialogFooterComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatDialogModule,
    MatSnackBarModule,
    MatIconModule,
  ],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {
        hasBackdrop: true,
        direction: 'ltr',
        width: '50%',
      },
    },
  ],
  bootstrap: [],
  exports: [
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatDialogModule,
    MatSnackBarModule,
    MatIconModule,
    LoaderComponent,
    SnackbarComponent,
    DialogComponent,
    DialogHeaderComponent,
    DialogFooterComponent,
  ],
  entryComponents: [DialogComponent],
})
export class SharedModule {}
