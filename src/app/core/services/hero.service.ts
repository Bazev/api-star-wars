import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, shareReplay, tap } from 'rxjs/operators';
import { Hero, createHero } from '../models/hero.model';
import { Planet, Specie } from '../models/index';
import { SwapiResponse, SwapiPerson } from '../interfaces/swapi.interface';
import { ErrorNotificationService } from './error-notification.service';

/**
 * Service HeroService amélioré avec:
 * - Typage strict des réponses API
 * - Gestion d'erreur centralisée
 * - Partage des observables (shareReplay)
 * - Pas de mutations directes
 * - Utilise inject() pour les dépendances (Angular 14+)
 */
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private readonly apiBaseUrl = 'https://swapi.dev/api/people/';
  private readonly mapCorrespondancePath = './assets/mapCorrespondance.json';

  private readonly http: HttpClient = inject(HttpClient);
  private readonly errorNotificationService: ErrorNotificationService = inject(ErrorNotificationService);

  private heroImageMapping: Map<string, string> = new Map();
  private selectedHeroSubject = new BehaviorSubject<Hero | undefined>(undefined);
  private heroesCache$: Observable<Hero[]> | undefined;
  private heroesListCache: Hero[] = [];

  public selectedHero$ = this.selectedHeroSubject.asObservable();

  constructor() {
    this.loadHeroImageMapping();
  }

  /**
   * Charge le mapping des images depuis le fichier d'assets
   */
  private loadHeroImageMapping(): void {
    this.http
      .get<Record<string, string>>(this.mapCorrespondancePath)
      .pipe(
        tap((data) => {
          data && Object.entries(data).forEach(([key, value]) => {
            this.heroImageMapping.set(key, value);
          });
        }),
        catchError((error) => {
          console.warn('Erreur lors du chargement du mapping des images:', error);
          this.errorNotificationService.showWarning('Impossible de charger les images des héros');
          return of({});
        })
      )
      .subscribe();
  }

  /**
   * Récupère la liste complète des héros avec cache
   */
  getHeroes(): Observable<Hero[]> {
    if (!this.heroesCache$) {
      this.heroesCache$ = this.http
        .get<SwapiResponse<SwapiPerson>>(this.apiBaseUrl)
        .pipe(
          map((response) => this.transformHeroes(response.results)),
          tap((heroes) => {
            this.heroesListCache = heroes;
          }),
          catchError((error) => {
            console.error('Erreur lors de la récupération des héros:', error);
            return of([]);
          }),
          shareReplay(1)
        );
    }
    return this.heroesCache$;
  }

  /**
   * Récupère la liste locale des héros (sans nouvelle requête)
   */
  getHeroesList(): Hero[] {
    return [...this.heroesListCache];
  }

  /**
   * Définit la liste des héros en cache
   */
  setHeroesList(heroes: Hero[]): void {
    this.heroesListCache = heroes;
  }

  /**
   * Définit le héro sélectionné et navigue
   */
  setSelectedHero(hero: Hero | undefined): void {
    this.selectedHeroSubject.next(hero);
  }

  /**
   * Affiche un héro (sélection + notification)
   */
  showHero(hero: Hero): void {
    console.log(`Affichage du héro: ${hero.name}`);
    this.setSelectedHero(hero);
  }

  /**
   * Récupère la planète natale d'un héro
   */
  getHomeWorld(url: string): Observable<Planet> {
    return this.http.get<Planet>(url).pipe(
      catchError((error) => {
        console.error('Erreur lors de la récupération de la planète:', error);
        this.errorNotificationService.showWarning('Impossible de charger la planète natale');
        return of({} as Planet);
      })
    );
  }

  /**
   * Récupère un héro par son URL
   */
  getHero(url: string): Observable<Hero> {
    return this.http.get<SwapiPerson>(url).pipe(
      map((person: SwapiPerson) =>
        createHero(
          person.name,
          this.heroImageMapping.get(person.name) || '',
          person.url,
          person.films,
          person.species,
          person.homeworld
        )
      ),
      catchError((error) => {
        console.error('Erreur lors de la récupération du héro:', error);
        this.errorNotificationService.showWarning('Impossible de charger le héro');
        return of({} as Hero);
      })
    );
  }

  /**
   * Récupère un héro par son ID
   */
  getHeroById(id: number): Observable<Hero> {
    return this.getHero(`${this.apiBaseUrl}${id}/`);
  }

  /**
   * Transforme les données SWAPI en objets Hero
   */
  private transformHeroes(people: SwapiPerson[]): Hero[] {
    return people.map((person) =>
      createHero(
        person.name,
        this.heroImageMapping.get(person.name) || '',
        person.url,
        person.films,
        person.species,
        person.homeworld
      )
    );
  }
}

