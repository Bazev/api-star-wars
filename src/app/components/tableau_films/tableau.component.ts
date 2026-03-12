import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroService } from '../../core/services/hero.service';
import { FilmService } from '../../core/services/film.service';
import { Hero } from '../../core/models/hero.model';
import { Film } from '../../core/models/index';
import { Subscription } from 'rxjs';

/**
 * Composant Tableau - Affichage des films d'un héro standalone
 * - Affiche la liste des films du héro sélectionné
 * - Utilise OnPush pour optimiser la détection de changement
 * - Utilise inject() pour l'injection de dépendances
 * - Gère proprement les subscriptions
 */
@Component({
  selector: 'app-tableau',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableauComponent implements OnInit, OnDestroy {
  films: Film[] = [];
  hero: Hero | undefined;

  private readonly heroService: HeroService = inject(HeroService);
  private readonly filmService: FilmService = inject(FilmService);
  private subscriptions: Subscription[] = [];

  ngOnInit(): void {
    this.subscribeToSelectedHero();
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  /**
   * S'abonne au héro sélectionné et charge ses films
   */
  private subscribeToSelectedHero(): void {
    const sub = this.heroService.selectedHero$.subscribe((hero: Hero | undefined) => {
      this.hero = hero;
      if (this.hero) {
        this.loadFilms();
      }
    });
    this.subscriptions.push(sub);
  }

  /**
   * Charge tous les films associés au héro
   */
  private loadFilms(): void {
    this.films = [];

    if (this.hero && this.hero.films && this.hero.films.length > 0) {
      this.hero.films.forEach((filmUrl) => {
        const sub = this.filmService.getFilm(filmUrl).subscribe((film: Film) => {
          this.films.push(film);
        });
        this.subscriptions.push(sub);
      });
    }
  }
}
