import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerComponent } from './modules/customer/customer.component';
import { ProductComponent } from './modules/product/product.component';
import { TransactionComponent } from './modules/transaction/transaction.component';

const routes: Routes = [
  { path: '', component: CustomerComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'product', component: ProductComponent },
  { path: 'transaction', component: TransactionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
