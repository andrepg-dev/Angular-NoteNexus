import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './notes.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomeComponent } from './home/home.component';
import { TrashComponent } from './trash/trash.component';

const routes: Routes = [
  {
    path: '',
    component: NotesComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'favorites', component: FavoritesComponent },
      { path: 'trash', component: TrashComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesRoutingModule {}
