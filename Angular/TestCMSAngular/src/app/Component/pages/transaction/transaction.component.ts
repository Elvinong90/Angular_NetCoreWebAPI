import { Component, OnInit } from '@angular/core';
import { ModuleType } from 'src/app/Enum/EnumModule';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})
export class TransactionComponent implements OnInit {
  Module = ModuleType.Transaction;

  constructor() {}

  ngOnInit(): void {}
}
