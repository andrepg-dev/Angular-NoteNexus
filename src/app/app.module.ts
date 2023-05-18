import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// HTTP Client
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './Components/initialization/home/home.component';
import { LoginComponent } from './Components/initialization/login/login.component';
import { MenuBarComponent } from './Components/menu-bar/menu-bar.component';
import { RegisterComponent } from './Components/initialization/register/register.component';
import { ServicesComponent } from './Components/initialization/services/services.component';
import { RoutingModule } from './routing/routing.module';
import { InitializationComponent } from './Components/initialization/initialization.component';
import { NotesComponent } from './Components/notes/notes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuBarComponent,
    LoginComponent,
    ServicesComponent,
    LoginComponent,
    RegisterComponent,
    InitializationComponent,
    NotesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
