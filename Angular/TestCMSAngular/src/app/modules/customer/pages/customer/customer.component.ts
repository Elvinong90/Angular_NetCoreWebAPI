import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CustomerService } from 'src/app/data/services/customer.service';
import { CustomerDTO } from 'src/app/data/schema/customer.model';
import { DialogPassData } from 'src/app/shared/models/common.model';
import { ModuleType } from 'src/app/shared/enum/module.enum';
import { FormAction } from 'src/app/shared/enum/common.enum';
import { CustomerFormComponent } from './customer-form/customer-form.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit, AfterViewInit {
  Module = ModuleType.Customer;

  displayedColumns = ['customerID', 'fullName', 'idNo', 'action'];
  dataSource = new MatTableDataSource<CustomerDTO>([]);
  listofData: CustomerDTO[] = [];
  singleData: CustomerDTO | undefined;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private dialog: MatDialog,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (data, column): string => {
      if (column === 'customerID') return data.detail.customerID;
      if (column === 'fullName') return data.detail.fullName;
      if (column === 'idType') return data.detail.idType;
      if (column === 'idNo') return data.detail.idNo;

      var columnValue = data[column as keyof CustomerDTO] as string;
      return columnValue;
    };
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe({
      next: (data) => {
        this.dataSource.data = this.listofData = data;
      },
      error: () => {},
    });
  }

  getCustomerData(id: string) {
    this.singleData = this.listofData.find((item) => item.id === id);
  }

  openNewModal() {
    const passData: DialogPassData = {
      formaction: FormAction.Add,
    };

    let dialogRef = this.dialog.open(CustomerFormComponent, {
      data: passData,
    });

    this.getDialogResult(dialogRef);
  }

  openEditModal(id: string) {
    this.getCustomerData(id);

    if (this.singleData) {
      const passData: DialogPassData = {
        formaction: FormAction.Update,
        content: this.singleData,
      };

      let dialogRef = this.dialog.open(CustomerFormComponent, {
        data: passData,
      });

      this.getDialogResult(dialogRef);
    }
  }

  openDeleteModal(id: string) {
    this.getCustomerData(id);

    if (this.singleData) {
      const passData: DialogPassData = {
        formaction: FormAction.Delete,
        content: this.singleData,
      };

      let dialogRef = this.dialog.open(CustomerFormComponent, {
        data: passData,
      });

      this.getDialogResult(dialogRef);
    }
  }

  getDialogResult(dialogRef: MatDialogRef<any, any>) {
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getCustomers();
      }
    });
  }
}
