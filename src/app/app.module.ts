import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat'; //aqui
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; //aqui
import { environment } from '../environments/environment';  //aqui

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Injectable } from '@angular/core';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), //aqui
    AngularFireAuthModule  //aqui
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }

