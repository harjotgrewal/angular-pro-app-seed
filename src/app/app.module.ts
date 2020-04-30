import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules

// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}


/*
var firebaseConfig = {
  apiKey: "AIzaSyDnAppj6Msld9ZfV430zxIK4SaU63gVjf4",
  authDomain: "fitness-app-440f7.firebaseapp.com",
  databaseURL: "https://fitness-app-440f7.firebaseio.com",
  projectId: "fitness-app-440f7",
  storageBucket: "fitness-app-440f7.appspot.com",
  messagingSenderId: "96542219201",
  appId: "1:96542219201:web:0cb974255323e16bb2ed40",
  measurementId: "G-KCZBXGN7WJ"
};
*/