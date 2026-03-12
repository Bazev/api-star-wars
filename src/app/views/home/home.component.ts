import { Component, OnInit, OnDestroy, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarousselComponent } from '../../components/caroussel/caroussel.component';
import { Hero } from '../../core/models/hero.model';
import { HeroService } from '../../core/services/hero.service';
import { Subscription } from 'rxjs';

/**
 * Composant Home - Page d'accueil standalone
 * - Charge la liste des héros au démarrage
 * - Gère les états de chargement et d'erreur
 * - Utilise inject() pour l'injection de dépendances
 * - OnPush pour optimiser la détection de changement
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarousselComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {
  heroes: Hero[] = [];
  isLoading = true;
  error: string | null = null;

  private readonly heroService = inject(HeroService);
  private subscription: Subscription | null = null;

  ngOnInit(): void {
    this.loadHeroes();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  private loadHeroes(): void {
    this.isLoading = true;
    this.error = null;
    this.subscription = this.heroService.getHeroes().subscribe({
      next: (heroes: any) => {
        this.heroes = heroes;
        this.heroService.setHeroesList(heroes);
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des héros:', error);
        this.error = 'Impossible de charger la liste des héros';
        this.isLoading = false;
      }
    });
  }

}
