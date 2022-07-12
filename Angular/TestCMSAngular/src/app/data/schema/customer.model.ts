export interface CustomerDTO {
  id: string;
  detail: CustomerDetailDTO;
}

export interface CustomerDetailDTO {
  customerID: string;
  fullName: string;
  idType: string;
  idNo: string;
}
