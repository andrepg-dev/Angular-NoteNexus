import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MenuBarComponent } from '../Components/menu-bar/menu-bar.component';

@NgModule({
  declarations: [MenuBarComponent],
  imports: [CommonModule],
  exports: [MenuBarComponent],
})
export class SharedModule {}
