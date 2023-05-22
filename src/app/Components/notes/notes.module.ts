import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';
import { SidebarMenuComponent } from '../sidebar-menu/sidebar-menu.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [NotesComponent, SidebarMenuComponent, CardComponent],
  imports: [CommonModule, NotesRoutingModule, SharedModule],
})
export class NotesModule {}
