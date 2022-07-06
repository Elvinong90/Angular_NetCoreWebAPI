import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layouts/layout.module';

import { CustomerComponent } from './modules/customer/customer.component';
import { CustomerFormComponent } from './modules/customer/customer-form/customer-form.component';
import { ProductComponent } from './modules/product/product.component';
import { ProductFormComponent } from './modules/product/product-form/product-form.component';
import { TransactionComponent } from './modules/transaction/transaction.component';

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
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
