import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TopbarComponent } from './Component/topbar/topbar.component';
import { NotfoundComponent } from './Component/notfound/notfound.component';
import { CustomerComponent } from './Component/customer/customer.component';
import { ProductComponent } from './Component/product/product.component';
import { TransactionComponent } from './Component/transaction/transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    NotfoundComponent,
    CustomerComponent,
    ProductComponent,
    TransactionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
