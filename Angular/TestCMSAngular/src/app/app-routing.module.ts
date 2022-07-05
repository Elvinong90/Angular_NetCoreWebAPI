import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerComponent } from './Component/pages/customer/customer.component';
import { ProductComponent } from './Component/pages/product/product.component';
import { TransactionComponent } from './Component/pages/transaction/transaction.component';
import { NotfoundComponent } from './Component/shared/notfound/notfound.component';

const routes: Routes = [
  { path: '', component: CustomerComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'product', component: ProductComponent },
  { path: 'transaction', component: TransactionComponent },
  { path: '*', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
