import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface ErrorNotification {
  id: string;
  message: string;
  severity: 'error' | 'warning' | 'info';
  timestamp: Date;
}

/**
 * Service centralisé pour la gestion et l'affichage des erreurs
 * Permet aux composants de s'abonner aux erreurs et de les afficher
 */
@Injectable({
  providedIn: 'root'
})
export class ErrorNotificationService {
  private errorSubject = new BehaviorSubject<ErrorNotification | null>(null);
  public error$ = this.errorSubject.asObservable();

  showError(message: string): void {
    const notification: ErrorNotification = {
      id: this.generateId(),
      message,
      severity: 'error',
      timestamp: new Date()
    };
    this.errorSubject.next(notification);
    console.error('Erreur notifiée:', message);
  }

  showWarning(message: string): void {
    const notification: ErrorNotification = {
      id: this.generateId(),
      message,
      severity: 'warning',
      timestamp: new Date()
    };
    this.errorSubject.next(notification);
  }

  showInfo(message: string): void {
    const notification: ErrorNotification = {
      id: this.generateId(),
      message,
      severity: 'info',
      timestamp: new Date()
    };
    this.errorSubject.next(notification);
  }

  clearError(): void {
    this.errorSubject.next(null);
  }

  private generateId(): string {
    return `error-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }
}

