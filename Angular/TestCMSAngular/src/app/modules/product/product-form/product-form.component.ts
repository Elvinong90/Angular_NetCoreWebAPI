import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from 'src/app/data/services/product.service';
import { ProductDTO } from 'src/app/data/schema/product.model';
import { DialogPassData } from 'src/app/shared/model/common.model';
import { FormAction } from 'src/app/shared/enum/common.enum';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  dataForm: FormGroup | undefined;

  constructor(
    public dialogRef: MatDialogRef<ProductFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogPassData,
    private formBuilder: FormBuilder,
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
      Price: ['', [Validators.required]],
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
}
