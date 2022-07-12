import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductDTO, ProductDetailDTO } from '../schema/product.model';
import { GenericObject } from 'src/app/shared/models/common.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private WebAddress = environment.WebAddress;

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<ProductDTO[]>(this.WebAddress + '/api/product');
  }

  addProduct(model: ProductDetailDTO) {
    return this.http.post<GenericObject>(
      this.WebAddress + '/api/product',
      model
    );
  }

  updateProduct(ID: string, model: ProductDetailDTO) {
    return this.http.put<GenericObject>(
      this.WebAddress + '/api/product/' + ID,
      model
    );
  }

  deleteProduct(ID: string) {
    return this.http.delete<GenericObject>(
      this.WebAddress + '/api/product/' + ID
    );
  }
}
