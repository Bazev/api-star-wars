import { Component, Input, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeroService } from '../../core/services/hero.service';
import { Hero } from '../../core/models/hero.model';

/**
 * Composant ButtonDetail - Bouton pour afficher les détails d'un héro standalone
 * - Utilise inject() pour l'injection de dépendances
 * - OnPush pour optimiser la détection de changement
 */
@Component({
  selector: 'app-button-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-detail.component.html',
  styleUrls: ['./button-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonDetailComponent {
  @Input() hero: Hero | undefined;

  private readonly heroService = inject(HeroService);
  private readonly router = inject(Router);

  /**
   * Affiche les détails d'un héro et navigue
   */
  viewHeroDetails(hero: Hero | undefined): void {
    if (!hero) return;

    console.log(`Héro sélectionné: ${hero.name}`);
    this.heroService.setSelectedHero(hero);
    this.router.navigate(['/hero']);
  }
}
