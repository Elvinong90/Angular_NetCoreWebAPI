import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

import { TopbarComponent } from './layouts/topbar/topbar.component';
import { NotfoundComponent } from './layouts/notfound/notfound.component';

import { LoaderComponent } from './components/loader/loader.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { DialogHeaderComponent } from './components/dialogs/dialog-header/dialog-header.component';
import { DialogFooterComponent } from './components/dialogs/dialog-footer/dialog-footer.component';
import { AddButtonComponent } from './components/buttons/add-button/add-button.component';

@NgModule({
  declarations: [
    TopbarComponent,
    NotfoundComponent,
    LoaderComponent,
    SnackbarComponent,
    DialogHeaderComponent,
    DialogFooterComponent,
    AddButtonComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
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
    MatProgressBarModule,
    MatProgressSpinnerModule,
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
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    TopbarComponent,
    NotfoundComponent,
    MatDialogModule,
    MatSnackBarModule,
    MatIconModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    LoaderComponent,
    SnackbarComponent,
    DialogHeaderComponent,
    DialogFooterComponent,
    AddButtonComponent,
  ],
  entryComponents: [],
})
export class SharedModule {}
