import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { SidebarMenuComponent } from '../sidebar-menu/sidebar-menu.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FavoritesComponent } from './favorites/favorites.component';
import { TrashComponent } from './trash/trash.component';

@NgModule({
  declarations: [
    NotesComponent,
    SidebarMenuComponent,
    CardComponent,
    HomeComponent,
    FavoritesComponent,
    TrashComponent,
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class NotesModule {}
