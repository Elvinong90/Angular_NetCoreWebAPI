import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductDTO } from '../DTO/IProduct';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductServices {
  private WebAddress = environment.WebAddress;

  constructor(private httpClient: HttpClient) {}

  getProducts() {
    return this.httpClient.get<ProductDTO[]>(this.WebAddress + '/api/product');
  }

  addProduct() {}

  updateProduct() {}

  deleteProduct() {}
}
