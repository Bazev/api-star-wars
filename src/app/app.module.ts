import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CarousselComponent } from './components/caroussel/caroussel.component';
import { HomeComponent } from './views/home/home.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModules} from "./app-routing.modules";
import {HttpClientModule} from "@angular/common/http";
import { DetailHeroViewComponent } from './views/detail-hero-view/detail-hero-view.component';
import { CardComponent } from './components/card/card.component';
import { TableauComponent } from './components/tableau_films/tableau.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import { HerosViewComponent } from './views/heros-view/heros-view.component';
import {NgOptimizedImage} from "@angular/common";
import { ButtonDetailComponent } from './components/button-detail/button-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarousselComponent,
    HomeComponent,
    DetailHeroViewComponent,
    CardComponent,
    HerosViewComponent,
    ButtonDetailComponent,

  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModules,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    TableauComponent,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
