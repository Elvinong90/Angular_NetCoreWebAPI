import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CustomerDTO } from 'src/app/data/schema/customer.model';
import { ModuleType } from 'src/app/shared/enum/module.enum';

import { CustomerFormComponent } from './customer-form/customer-form.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  Module = ModuleType.Customer;

  dataSource = new MatTableDataSource<CustomerDTO>([]);
  listofData: CustomerDTO[] = [];
  singleData: CustomerDTO | undefined;

  constructor() {}

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {}
}