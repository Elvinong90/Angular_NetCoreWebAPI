import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

import { TopbarComponent } from './topbar/topbar.component';
import { LayoutComponent } from './layout/layout.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [TopbarComponent, LayoutComponent, NotfoundComponent],
  imports: [BrowserModule, MatTableModule, MatButtonModule],
  providers: [],
  bootstrap: [],
  exports: [
    TopbarComponent,
    LayoutComponent,
    NotfoundComponent,
    MatTableModule,
    MatButtonModule,
  ],
})
export class SharedModule {}
