import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import {
  LoaderService,
  LoadingIndicator,
} from 'src/app/shared/services/loader.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { ProductService } from 'src/app/data/services/product.service';
import {
  ProductDTO,
  ProductDetailDTO,
} from 'src/app/data/schema/product.model';
import {
  DialogPassData,
  GenericObject,
} from 'src/app/shared/models/common.model';
import { FormAction } from 'src/app/shared/enum/common.enum';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit, OnDestroy {
  dataForm!: UntypedFormGroup;
  FormAction = FormAction;

  destroyed = new Subject<void>();

  constructor(
    public dialogRef: MatDialogRef<ProductFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogPassData,
    private formBuilder: UntypedFormBuilder,
    private loaderService: LoaderService,
    private snackbarService: SnackbarService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.initializeForm();

    if (this.data.formaction === FormAction.Update) {
      this.loadFormData();
    }
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

  initializeForm() {
    this.dataForm = this.formBuilder.group({
      ProductNo: ['', [Validators.required]],
      Description: ['', [Validators.required]],
      Price: [0, [Validators.required]],
    });
  }

  loadFormData() {
    const content: ProductDTO = this.data.content;

    this.dataForm?.setValue({
      ProductNo: content.detail.productNo,
      Description: content.detail.description,
      Price: content.detail.price,
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

    var model: ProductDetailDTO = {
      productNo: this.dataForm.get('ProductNo')?.value,
      description: this.dataForm.get('Description')?.value,
      price: this.dataForm.get('Price')?.value,
    };

    const postAction: Observable<GenericObject> =
      this.data.formaction === FormAction.Add
        ? this.productService.addProduct(model)
        : this.productService.updateProduct(this.data.content.id, model);

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

  deleteProduct() {
    this.loaderService.overrideLoading(LoadingIndicator.SUBMIT_MODAL);

    this.productService
      .deleteProduct(this.data.content.id)
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
