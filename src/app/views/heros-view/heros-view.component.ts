import { Component, OnInit, OnDestroy, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../../core/models/hero.model';
import { HeroService } from '../../core/services/hero.service';
import { CardComponent } from '../../components/card/card.component';
import { ButtonDetailComponent } from '../../components/button-detail/button-detail.component';
import { Subscription } from 'rxjs';

/**
 * Composant HerosView - Affichage de la liste des héros standalone
 * - Affiche la liste complète des héros
 * - Utilise le cache local si disponible
 * - Utilise inject() pour l'injection de dépendances
 * - OnPush pour optimiser la détection de changement
 */
@Component({
  selector: 'app-heros-view',
  standalone: true,
  imports: [CommonModule, CardComponent, ButtonDetailComponent],
  templateUrl: './heros-view.component.html',
  styleUrls: ['./heros-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HerosViewComponent implements OnInit, OnDestroy {
  heroes: Hero[] = [];

  private readonly heroService = inject(HeroService);
  private subscription: Subscription | null = null;

  ngOnInit(): void {
    this.loadHeroes();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  private loadHeroes(): void {
    this.heroes = this.heroService.getHeroesList();
    if (this.heroes.length === 0) {
      console.log('Aucun héro en cache, chargement depuis le service');
      this.subscription = this.heroService.getHeroes().subscribe((heroes: any) => {
        this.heroes = heroes;
      });
    }
  }
}
