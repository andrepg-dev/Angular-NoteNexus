import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuBarComponent } from '../Components/menu-bar/menu-bar.component';

@NgModule({
  declarations: [MenuBarComponent],
  imports: [CommonModule],
  exports: [MenuBarComponent],
})
export class SharedModule {}
