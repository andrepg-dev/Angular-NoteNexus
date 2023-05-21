import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AuthenticationComponent } from './Components/initialization/authentication/authentication.component';
import { HomeComponent } from './Components/initialization/home/home.component';
import { InitializationComponent } from './Components/initialization/initialization.component';
import { ServicesComponent } from './Components/initialization/services/services.component';
import { MenuBarComponent } from './Components/menu-bar/menu-bar.component';
import { AppComponent } from './app.component';

// HTTP Client
import { HttpClientModule } from '@angular/common/http';

// Forms module & Routing module
import { ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from './routing/routing.module';

// Cookie service
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuBarComponent,
    AuthenticationComponent,
    ServicesComponent,
    InitializationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RoutingModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
