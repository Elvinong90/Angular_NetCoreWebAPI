import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Loader } from 'src/app/Helper/Loader';
import { ProductDTO } from 'src/app/DTO/IProduct';

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
    private httpClient: HttpClient,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.getProducts();
  }

  initializeForm() {
    this.dataForm = this.formBuilder.group({
      ID: [''],
    });
  }

  getProducts() {}
}
