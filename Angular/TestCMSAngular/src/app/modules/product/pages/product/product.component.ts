import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { finalize } from 'rxjs';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { ProductService } from 'src/app/data/services/product.service';
import { ProductDTO } from 'src/app/data/schema/product.model';
import {
  StatusObject,
  DialogPassData,
} from 'src/app/shared/models/common.model';
import { ModuleType } from 'src/app/shared/enum/module.enum';
import { FormAction } from 'src/app/shared/enum/common.enum';
import { ProductFormComponent } from './product-form/product-form.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, AfterViewInit {
  Module = ModuleType.Product;

  displayedColumns = ['productNo', 'description', 'price', 'action'];
  dataSource = new MatTableDataSource<ProductDTO>([]);
  listofData: ProductDTO[] = [];
  singleData: ProductDTO | undefined;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private dialog: MatDialog,
    private loaderService: LoaderService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (data, column): string => {
      if (column === 'productNo') return data.detail.productNo;
      if (column === 'description') return data.detail.description;
      if (column === 'price') return data.detail.price.toFixed(2);

      var columnValue = data[column as keyof ProductDTO] as string;
      return columnValue;
    };
  }

  getProducts() {
    this.loaderService.startLoading();

    this.productService
      .getProducts()
      .pipe(
        finalize(() => {
          this.loaderService.hideLoading();
        })
      )
      .subscribe({
        next: (data) => {
          this.dataSource.data = this.listofData = data;
        },
        error: () => {},
      });
  }

  getProductData(id: string) {
    this.singleData = this.listofData.find((item) => item.id === id);
  }

  openNewModal() {
    let dialogRef = this.dialog.open(ProductFormComponent, {
      data: {
        formaction: FormAction.Add,
      },
    });
  }

  openEditModal(id: string) {
    this.getProductData(id);

    if (this.singleData) {
      const passData: DialogPassData = {
        formaction: FormAction.Add,
        content: this.singleData,
      };

      let dialogRef = this.dialog.open(ProductFormComponent, {
        data: passData,
      });
    }
  }

  openDeleteModal(id: string) {
    this.getProductData(id);

    if (this.singleData) {
      const passData: DialogPassData = {
        formaction: FormAction.Delete,
      };
    }
  }
}
