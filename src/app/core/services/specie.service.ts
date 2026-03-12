import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Specie } from '../models/index';
import { ErrorNotificationService } from './error-notification.service';

/**
 * Service pour la gestion des espèces Star Wars
 * Requête l'API SWAPI avec gestion d'erreur centralisée
 */
@Injectable({
  providedIn: 'root'
})
export class SpecieService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly errorNotificationService: ErrorNotificationService = inject(ErrorNotificationService);

  /**
   * Récupère une espèce par son URL
   */
  getSpecie(url: string): Observable<Specie> {
    return this.http.get<Specie>(url).pipe(
      catchError((error) => {
        console.error('Erreur lors de la récupération de l\'espèce:', error);
        this.errorNotificationService.showWarning('Impossible de charger l\'espèce');
        return of({} as Specie);
      })
    );
  }
}

