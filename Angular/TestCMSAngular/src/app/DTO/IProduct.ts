export interface ProductDTO {
  id: string;
  detail: ProductDetailDTO;
}

export interface ProductDetailDTO {
  productNo: string;
  description: string;
  price: number;
}
