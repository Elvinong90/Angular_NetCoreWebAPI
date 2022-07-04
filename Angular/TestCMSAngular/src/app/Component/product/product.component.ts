import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Loader } from 'src/app/Helper/Loader';
import { ProductServices } from 'src/app/Services/ProductServices';
import { ProductDTO } from 'src/app/DTO/IProduct';

import { ProductFormComponent } from './product-form/product-form.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  ListOfProduct: ProductDTO[] = [];
  DataSource = new MatTableDataSource<ProductDTO>([]);

  dataForm: FormGroup | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private productServices: ProductServices
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.getProducts();
  }

  initializeForm() {
    this.dataForm = this.formBuilder.group({});
  }

  getProducts() {
    this.productServices.getProducts().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: () => {},
    });
  }
}
