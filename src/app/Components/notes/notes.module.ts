import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { SidebarMenuComponent } from '../sidebar-menu/sidebar-menu.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NotesComponent,
    SidebarMenuComponent,
    CardComponent,
    HomeComponent,
  ],
  imports: [CommonModule, NotesRoutingModule, SharedModule, ReactiveFormsModule],
})
export class NotesModule {}
