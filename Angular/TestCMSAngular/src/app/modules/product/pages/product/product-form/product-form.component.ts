import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  LoaderService,
  LoadingIndicator,
} from 'src/app/shared/services/loader.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
import { Action } from 'rxjs/internal/scheduler/Action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  dataForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ProductFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogPassData,
    private formBuilder: FormBuilder,
    private loaderService: LoaderService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.initializeForm();

    if (this.data.formaction === FormAction.Update) {
      this.loadFormData();
    }
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

    postAction.subscribe({
      next: (data) => {
        if (data.status) {
          this.dialogRef.close(true);
        }
      },
      error: () => {},
    });
  }
}
