import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../Components/initialization/home/home.component';
import { InitializationComponent } from '../Components/initialization/initialization.component';
import { ServicesComponent } from '../Components/initialization/services/services.component';
import { AuthenticationComponent } from '../Components/initialization/authentication/authentication.component';
import { AuthenticationGuard } from '../guards/authentication.guard';

const routes: Routes = [
  {
    path: '',
    component: InitializationComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'authentication', component: AuthenticationComponent },
    ],
  },
  {
    path: 'notes',
    canActivate: [AuthenticationGuard],
    loadChildren: () =>
      import('../Components/notes/notes.module').then((m) => m.NotesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
