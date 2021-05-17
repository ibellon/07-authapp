import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { PreciosComponent } from './components/precios/precios.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProtegidaComponent,
    PreciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-r6r2v-hi.us.auth0.com',
      clientId: 'vbHNRSfj3T6XszACPH5DFe91eH8jPW0i'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
