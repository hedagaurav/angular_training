import { ApplicationConfig, Component } from '@angular/core';
import { Routes, provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { FirstComponent } from './component/first/first.component';
import { SecondComponent } from './component/second/second.component';
import { provideStore } from '@ngrx/store';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding()), provideClientHydration(), provideStore()]
};
