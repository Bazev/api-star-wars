import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import { TableauComponent } from '../../components/tableau_films/tableau.component';

/**
 * Composant DetailHeroView - Affichage des détails d'un héro standalone
 * - Affiche la carte du héro et le tableau de ses films
 * - OnPush pour optimiser la détection de changement
 */
@Component({
  selector: 'app-detail-hero-view',
  standalone: true,
  imports: [CommonModule, CardComponent, TableauComponent],
  templateUrl: './detail-hero-view.component.html',
  styleUrls: ['./detail-hero-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailHeroViewComponent {}
