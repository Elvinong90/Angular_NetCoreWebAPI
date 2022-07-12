import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackbar: MatSnackBar) {}

  showSuccessSnackbar(message: string) {
    this.snackbar.openFromComponent(SnackbarComponent, {
      data: message,
      duration: 4000,
      verticalPosition: 'bottom',
      horizontalPosition: 'right',
      panelClass: ['bg-success'],
    });
  }

  showWarningSnackbar(message: string) {
    this.snackbar.openFromComponent(SnackbarComponent, {
      data: message,
      duration: 4000,
      verticalPosition: 'bottom',
      horizontalPosition: 'right',
      panelClass: ['bg-warning'],
    });
  }

  showErrorSnackbar(message: string = '') {
    const defaultMsg = 'Internal Server Error';

    this.snackbar.openFromComponent(SnackbarComponent, {
      data: message ? message : defaultMsg,
      duration: 4000,
      verticalPosition: 'bottom',
      horizontalPosition: 'right',
      panelClass: ['bg-danger'],
    });
  }
}
