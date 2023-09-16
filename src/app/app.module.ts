import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegesterComponent } from './regester/regester.component';
import { AdhomeComponent } from './adhome/adhome.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    RegesterComponent,
    LoginComponent,
    HomeComponent,
    RegesterComponent,
    AdhomeComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
