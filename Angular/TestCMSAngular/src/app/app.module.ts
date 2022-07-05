import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './Component/shared/shared.module';
import { AppComponent } from './app.component';

import { CustomerComponent } from './Component/pages/customer/customer.component';
import { CustomerFormComponent } from './Component/pages/customer/customer-form/customer-form.component';
import { ProductComponent } from './Component/pages/product/product.component';
import { ProductFormComponent } from './Component/pages/product/product-form/product-form.component';
import { TransactionComponent } from './Component/pages/transaction/transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerFormComponent,
    ProductComponent,
    ProductFormComponent,
    TransactionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
