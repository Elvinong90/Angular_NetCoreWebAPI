import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { CustomerComponent } from './pages/customer/customer.component';
import { CustomerFormComponent } from './pages/customer/customer-form/customer-form.component';

import { CustomerRoutingModule } from './customer-routing.module';

@NgModule({
  declarations: [CustomerComponent, CustomerFormComponent],
  imports: [CommonModule, SharedModule, CustomerRoutingModule],
})
export class CustomerModule {}
