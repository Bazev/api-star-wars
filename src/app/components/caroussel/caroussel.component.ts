import { Component, Input, OnInit, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../../core/models/hero.model';
import { HeroService } from '../../core/services/hero.service';
import { ButtonDetailComponent } from '../button-detail/button-detail.component';

/**
 * Composant Caroussel - Affichage carousel de héros standalone
 * - Utilise OnPush pour optimiser la détection de changement
 * - Utilise inject() pour l'injection de dépendances
 * - Affiche 3 héros aléatoires
 */
@Component({
  selector: 'app-caroussel',
  standalone: true,
  imports: [CommonModule, ButtonDetailComponent],
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarousselComponent implements OnInit {
  @Input() heroes: Hero[] = [];

  index1 = 0;
  index2 = 0;
  index3 = 0;

  private readonly heroService = inject(HeroService);

  ngOnInit(): void {
    if (this.heroes.length > 0) {
      this.index1 = this.getRandomIndex();
      this.index2 = this.getRandomIndex();
      this.index3 = this.getRandomIndex();
    }
  }

  /**
   * Génère un index aléatoire valide
   */
  private getRandomIndex(): number {
    return Math.floor(Math.random() * this.heroes.length);
  }

  /**
   * Affiche les détails d'un héro
   */
  viewHeroDetails(hero: Hero): void {
    console.log(`Affichage des détails de: ${hero.name}`);
    this.heroService.showHero(hero);
  }
}
