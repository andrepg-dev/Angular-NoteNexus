import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AuthenticationComponent } from './Components/initialization/authentication/authentication.component';
import { HomeComponent } from './Components/initialization/home/home.component';
import { InitializationComponent } from './Components/initialization/initialization.component';
import { ServicesComponent } from './Components/initialization/services/services.component';
import { AppComponent } from './app.component';

// HTTP Client
import { HttpClientModule } from '@angular/common/http';

// Forms module & Routing module
import { ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from './routing/routing.module';

// Cookie service
import { CookieService } from 'ngx-cookie-service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthenticationComponent,
    ServicesComponent,
    InitializationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RoutingModule,
    SharedModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
