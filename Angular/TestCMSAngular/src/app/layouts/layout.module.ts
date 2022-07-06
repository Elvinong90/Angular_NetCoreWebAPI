import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopbarComponent } from './topbar/topbar.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [TopbarComponent, NotfoundComponent],
  imports: [CommonModule],
  exports: [TopbarComponent, NotfoundComponent],
})
export class LayoutModule {}
