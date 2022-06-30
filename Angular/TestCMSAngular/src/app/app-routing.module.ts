import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerComponent } from './Component/customer/customer.component';
import { ProductComponent } from './Component/product/product.component';
import { TransactionComponent } from './Component/transaction/transaction.component';
import { NotfoundComponent } from './Component/notfound/notfound.component';

const routes: Routes = [
  { path: '', component: CustomerComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product', component: TransactionComponent },
  { path: '*', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
