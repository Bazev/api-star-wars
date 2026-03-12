import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ErrorNotificationService } from '../services/error-notification.service';

/**
 * Intercepteur HTTP global pour:
 * - Ajouter les headers personnalisés
 * - Logger les requêtes
 * - Gérer les erreurs HTTP de manière centralisée
 * - Implémenter la logique de retry
 */
@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private errorNotificationService: ErrorNotificationService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(`[HTTP] ${request.method} ${request.url}`);

    return next.handle(request).pipe(
      retry({ count: 1, delay: 1000 }),
      catchError((error: HttpErrorResponse) => {
        this.handleError(error);
        return throwError(() => error);
      })
    );
  }

  private handleError(error: HttpErrorResponse): void {
    let message = 'Une erreur réseau s\'est produite';

    if (error.status === 0) {
      message = 'Erreur de connexion. Vérifiez votre connexion Internet.';
    } else if (error.status === 404) {
      message = 'La ressource demandée n\'a pas été trouvée.';
    } else if (error.status === 500 || error.status === 503) {
      message = 'Le serveur est actuellement indisponible. Veuillez réessayer plus tard.';
    } else if (error.status === 429) {
      message = 'Trop de requêtes. Veuillez attendre avant de réessayer.';
    } else if (error.error?.message) {
      message = error.error.message;
    }

    console.error(`[HTTP Error] ${error.status}: ${message}`, error);
    this.errorNotificationService.showError(message);
  }
}

