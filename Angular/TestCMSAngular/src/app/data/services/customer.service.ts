import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerDTO } from '../schema/customer.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private WebAddress = environment.WebAddress;

  constructor(private httpClient: HttpClient) {}

  getCustomers() {
    this.httpClient.get<CustomerDTO[]>(this.WebAddress + '/api/customer');
  }

  addCustomer() {}

  updateCustomer() {}

  deleteCustomer() {}
}
