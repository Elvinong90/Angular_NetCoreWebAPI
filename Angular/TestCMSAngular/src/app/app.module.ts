import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './Component/_shared/shared.module';
import { AppComponent } from './app.component';

import { CustomerComponent } from './Component/customer/customer.component';
import { CustomerFormComponent } from './Component/customer/customer-form/customer-form.component';
import { ProductComponent } from './Component/product/product.component';
import { ProductFormComponent } from './Component/product/product-form/product-form.component';
import { TransactionComponent } from './Component/transaction/transaction.component';

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
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
