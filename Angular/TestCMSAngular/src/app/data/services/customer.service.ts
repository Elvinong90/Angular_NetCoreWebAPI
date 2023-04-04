import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerDTO, CustomerDetailDTO } from '../schema/customer.model';
import { GenericObject } from 'src/app/shared/models/common.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private WebAddress = environment.WebAddress;

  constructor(private http: HttpClient) {}

  getCustomers() {
    return this.http.get<CustomerDTO[]>(this.WebAddress + '/api/customers');
  }

  addCustomer(model: CustomerDetailDTO) {
    return this.http.post<GenericObject>(
      this.WebAddress + '/api/customers',
      model
    );
  }

  updateCustomer(ID: string, model: CustomerDetailDTO) {
    return this.http.put<GenericObject>(
      this.WebAddress + '/api/customers/' + ID,
      model
    );
  }

  deleteCustomer(ID: string) {
    return this.http.delete<GenericObject>(
      this.WebAddress + '/api/customers/' + ID
    );
  }
}
