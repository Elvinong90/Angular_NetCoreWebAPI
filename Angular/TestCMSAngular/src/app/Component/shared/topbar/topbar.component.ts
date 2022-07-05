import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModuleType } from 'src/app/Enum/EnumModule';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  @Input() Module: ModuleType = ModuleType.Customer;

  ModuleType = ModuleType;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  moveToComponent(Module: ModuleType) {
    switch (Module) {
      case ModuleType.Customer:
        this.router.navigate(['/customer']);
        break;
      case ModuleType.Product:
        this.router.navigate(['/product']);
        break;
      case ModuleType.Transaction:
        this.router.navigate(['/transaction']);
        break;
      default:
        this.router.navigate(['']);
        break;
    }
  }
}
