import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

/**
 * Point d'entrée Angular 19 avec bootstrapping fonctionnel
 * Utilise appConfig pour fournir tous les providers
 */
bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
