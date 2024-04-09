import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Module
import { LoginModule } from './pages/login/login.module';
import { DevicesModule } from './pages/devices/devices.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    DevicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
