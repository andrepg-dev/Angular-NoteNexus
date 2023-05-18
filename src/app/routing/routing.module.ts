import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../Components/initialization/home/home.component';
import { ServicesComponent } from '../Components/initialization/services/services.component';
import { LoginComponent } from '../Components/initialization/login/login.component';
import { RegisterComponent } from '../Components/initialization/register/register.component';
import { InitializationComponent } from '../Components/initialization/initialization.component';

const routes: Routes = [
  {
    path: '',
    component: InitializationComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  {
    path: 'notes',
    loadChildren: () =>
      import('../Components/notes/notes.module').then((m) => m.NotesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
