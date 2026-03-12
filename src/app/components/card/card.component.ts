import { Component, Input, OnInit, OnDestroy, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../../core/models/hero.model';
import { HeroService } from '../../core/services/hero.service';
import { Specie, Planet } from '../../core/models/index';
import { SpecieService } from '../../core/services/specie.service';
import { Subscription } from 'rxjs';

/**
 * Composant Card - Affichage des détails d'un héro standalone
 * - Utilise OnPush pour optimiser la détection de changement
 * - Utilise inject() pour l'injection de dépendances
 * - Gère proprement les subscriptions avec unsubscribe()
 */
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit, OnDestroy {
  @Input() hero: Hero | undefined;
  specie: Specie | undefined;
  planet: Planet | undefined;

  private readonly heroService: HeroService = inject(HeroService);
  private readonly specieService: SpecieService = inject(SpecieService);
  private subscriptions: Subscription[] = [];

  ngOnInit(): void {
    this.loadHeroDetails();
  }

  ngOnDestroy(): void {
    // Nettoyer toutes les subscriptions
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private loadHeroDetails(): void {
    if (!this.hero) {
      console.log('Affichage détails du héro sélectionné');
      const sub = this.heroService.selectedHero$.subscribe((hero: Hero | undefined) => {
        this.hero = hero;
        if (this.hero) {
          this.loadRelatedData();
        }
      });
      this.subscriptions.push(sub);
    } else {
      this.loadRelatedData();
    }
  }

  private loadRelatedData(): void {
    if (this.hero) {
      // Charger l'espèce si disponible
      if (this.hero.species && this.hero.species.length > 0 && this.hero.species[0]) {
        const specieUrl = this.hero.species[0];
        const sub = this.specieService.getSpecie(specieUrl).subscribe((specie: Specie) => {
          this.specie = specie;
        });
        this.subscriptions.push(sub);
      }

      // Charger la planète natale
      console.log(`Récupération de la planète: ${this.hero.homeworld}`);
      const sub = this.heroService.getHomeWorld(this.hero.homeworld).subscribe((planet: Planet) => {
        this.planet = planet;
      });
      this.subscriptions.push(sub);
    }
  }
}
