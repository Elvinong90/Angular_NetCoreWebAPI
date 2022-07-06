import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { ProductComponent } from './pages/product/product.component';
import { ProductFormComponent } from './pages/product/product-form/product-form.component';

import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [ProductComponent, ProductFormComponent],
  imports: [CommonModule, SharedModule, ProductRoutingModule],
})
export class ProductModule {}
