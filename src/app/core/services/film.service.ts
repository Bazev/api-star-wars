import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';
import { Film } from '../models/index';
import { ErrorNotificationService } from './error-notification.service';

/**
 * Service pour la gestion des films Star Wars
 * Requête l'API SWAPI avec cache et gestion d'erreur centralisée
 */
@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly errorNotificationService: ErrorNotificationService = inject(ErrorNotificationService);

  private filmCache = new Map<string, Observable<Film>>();


  /**
   * Récupère un film par son URL avec cache
   */
  getFilm(url: string): Observable<Film> {
    if (!this.filmCache.has(url)) {
      const film$ = this.http.get<Film>(url).pipe(
        catchError((error) => {
          console.error('Erreur lors de la récupération du film:', error);
          this.errorNotificationService.showWarning('Impossible de charger le film');
          return of({} as Film);
        }),
        shareReplay(1)
      );
      this.filmCache.set(url, film$);
    }
    return this.filmCache.get(url)!;
  }
}

