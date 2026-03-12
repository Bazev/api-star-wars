import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { HerosViewComponent } from './views/heros-view/heros-view.component';
import { DetailHeroViewComponent } from './views/detail-hero-view/detail-hero-view.component';

/**
 * Configuration des routes - Angular 19 functional routing
 * Remplace le NgModule AppRoutingModule pour une meilleure scalabilité
 */
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Accueil - Star Wars' }
  },
  {
    path: 'heros',
    component: HerosViewComponent,
    data: { title: 'Liste des héros - Star Wars' }
  },
  {
    path: 'hero',
    component: DetailHeroViewComponent,
    data: { title: 'Détails du héro - Star Wars' }
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

