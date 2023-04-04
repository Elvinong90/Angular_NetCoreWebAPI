import { Component, OnInit, Inject } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
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
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
})
export class CustomerFormComponent implements OnInit {
  dataForm!: UntypedFormGroup;
  FormAction = FormAction;

  constructor(
    public dialogRef: MatDialogRef<CustomerFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogPassData,
    private formBuilder: UntypedFormBuilder,
    private loaderService: LoaderService,
    private snackbarService: SnackbarService,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.initializeForm();

    if (this.data.formaction === FormAction.Update) {
      this.loadFormData();
    }
  }

  initializeForm() {
    this.dataForm = this.formBuilder.group({
      CustomerID: ['', [Validators.required]],
      FullName: ['', [Validators.required]],
      IDType: ['', [Validators.required]],
      IDNo: ['', [Validators.required]],
    });
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
      customerID: this.dataForm.get('CustomerID')?.value,
      fullName: this.dataForm.get('FullName')?.value,
      idType: this.dataForm.get('IDType')?.value,
      idNo: this.dataForm.get('IDNo')?.value,
    };

    const postAction: Observable<GenericObject> =
      this.data.formaction === FormAction.Add
        ? this.customerService.addCustomer(model)
        : this.customerService.updateCustomer(this.data.content.id, model);

    postAction.subscribe({
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

    this.customerService.deleteCustomer(this.data.content.id).subscribe({
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
