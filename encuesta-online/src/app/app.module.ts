import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppCommonsModule } from './commons/commons.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CuestionarioComponent } from './encuesta/cuestionario/cuestionario.component';
import { InicioComponent } from './encuesta/inicio/inicio.component';
import { LoginComponent } from './encuesta/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CuestionarioComponent,
    InicioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppCommonsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
