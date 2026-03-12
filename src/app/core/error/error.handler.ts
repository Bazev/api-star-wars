import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { ErrorNotificationService } from '../services/error-notification.service';

/**
 * Global Error Handler pour capturer toutes les erreurs non capturées
 * et les afficher à l'utilisateur via le service de notification
 */
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) {}

  handleError(error: Error | any): void {
    const notificationService = this.injector.get(ErrorNotificationService);
    const errorMessage = this.getErrorMessage(error);

    console.error('Erreur non capturée:', error);
    notificationService.showError(errorMessage);
  }

  private getErrorMessage(error: any): string {
    if (error?.message) {
      return error.message;
    }
    if (typeof error === 'string') {
      return error;
    }
    return 'Une erreur inconnue s\'est produite';
  }
}

