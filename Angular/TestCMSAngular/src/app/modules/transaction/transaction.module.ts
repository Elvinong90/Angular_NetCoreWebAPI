import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { TransactionComponent } from './pages/transaction/transaction.component';

import { TransactionRoutingModule } from './transaction-routing.module';

@NgModule({
  declarations: [TransactionComponent],
  imports: [CommonModule, SharedModule, TransactionRoutingModule],
})
export class TransactionModule {}
