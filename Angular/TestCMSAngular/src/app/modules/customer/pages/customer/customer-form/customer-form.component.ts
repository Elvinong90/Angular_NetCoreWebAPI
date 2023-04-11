import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import {
  LoaderService,
  LoadingIndicator,
} from 'src/app/shared/services/loader.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { CustomerService } from 'src/app/data/services/customer.service';
import {
  CustomerDTO,
  CustomerDetailDTO,
} from 'src/app/data/schema/customer.model';
import {
  DialogPassData,
  GenericObject,
} from 'src/app/shared/models/common.model';
import { FormAction } from 'src/app/shared/enum/common.enum';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
})
export class CustomerFormComponent implements OnInit, OnDestroy {
  dataForm = new FormGroup({
    CustomerID: new FormControl('', [Validators.required]),
    FullName: new FormControl('', [Validators.required]),
    IDType: new FormControl('', [Validators.required]),
    IDNo: new FormControl('', [Validators.required]),
  });

  FormAction = FormAction;
  destroyed = new Subject<void>();

  constructor(
    public dialogRef: MatDialogRef<CustomerFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogPassData,
    private loaderService: LoaderService,
    private snackbarService: SnackbarService,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    if (this.data.formaction === FormAction.Update) {
      this.loadFormData();
    }
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

  loadFormData() {
    const content: CustomerDTO = this.data.content;

    this.dataForm?.setValue({
      CustomerID: content.detail.customerID,
      FullName: content.detail.fullName,
      IDType: content.detail.idType,
      IDNo: content.detail.idNo,
    });
  }

  onError(control: string, error: string) {
    return this.dataForm!.get(control)?.hasError(error);
  }

  submitForm() {
    if (!this.dataForm.valid) {
      return;
    }

    this.loaderService.overrideLoading(LoadingIndicator.SUBMIT_MODAL);

    var model: CustomerDetailDTO = {
      customerID: this.dataForm.value.CustomerID!,
      fullName: this.dataForm.value.FullName!,
      idType: this.dataForm.value.IDType!,
      idNo: this.dataForm.value.IDNo!,
    };

    const postAction: Observable<GenericObject> =
      this.data.formaction === FormAction.Add
        ? this.customerService.addCustomer(model)
        : this.customerService.updateCustomer(this.data.content.id, model);

    postAction.pipe(takeUntil(this.destroyed)).subscribe({
      next: (data) => {
        if (data.status) {
          this.snackbarService.showSuccessSnackbar(data.message);
          this.dialogRef.close(true);
        } else {
          this.snackbarService.showWarningSnackbar(data.message);
        }
      },
      error: () => {
        this.snackbarService.showErrorSnackbar();
      },
    });
  }

  deleteCustomer() {
    this.loaderService.overrideLoading(LoadingIndicator.SUBMIT_MODAL);

    this.customerService
      .deleteCustomer(this.data.content.id)
      .pipe(takeUntil(this.destroyed))
      .subscribe({
        next: (data) => {
          if (data.status) {
            this.snackbarService.showSuccessSnackbar(data.message);
            this.dialogRef.close(true);
          } else {
            this.snackbarService.showWarningSnackbar(data.message);
          }
        },
        error: () => {
          this.snackbarService.showErrorSnackbar();
        },
      });
  }
}
