import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Loader } from 'src/app/Helper/Loader';
import { customerDTO } from 'src/app/DTO/ICustomer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  ListOfCustomer: customerDTO[] = [];
  DataSource = new MatTableDataSource<customerDTO>([]);

  dataForm: FormGroup | undefined;

  constructor(
    private httpClient: HttpClient,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.getCustomers();
  }

  initializeForm() {
    this.dataForm = this.formBuilder.group({
      ID: [''],
    });
  }

  getCustomers() {}
}
