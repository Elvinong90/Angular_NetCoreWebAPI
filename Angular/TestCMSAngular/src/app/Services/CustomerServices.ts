import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { customerDTO } from '../DTO/ICustomer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CustomerServices {
  private WebAddress = environment.WebAddress;

  constructor(private httpClient: HttpClient) {}

  getCustomers() {
    this.httpClient.get<customerDTO[]>(this.WebAddress + '/api/customer');
  }

  addCustomer() {}

  updateCustomer() {}

  deleteCustomer() {}
}
