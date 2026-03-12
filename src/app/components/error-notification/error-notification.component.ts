import { Component, OnInit, OnDestroy, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorNotificationService, ErrorNotification } from '../../core/services/error-notification.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { Subscription } from 'rxjs';

/**
 * Composant ErrorNotification - Affiche les notifications d'erreur standalone
 * - Affiche les erreurs, warnings et infos
 * - Auto-dismiss après 5 secondes
 * - Utilise inject() pour l'injection de dépendances
 * - OnPush pour optimiser la détection de changement
 * - Gère proprement les subscriptions et timers avec takeUntilDestroyed()
 */
@Component({
  selector: 'app-error-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error-notification.component.html',
  styleUrls: ['./error-notification.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate('300ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateY(-100%)', opacity: 0 }))
      ])
    ])
  ]
})
export class ErrorNotificationComponent implements OnInit, OnDestroy {
  currentError: ErrorNotification | null = null;

  private readonly errorNotificationService: ErrorNotificationService = inject(ErrorNotificationService);
  private subscription: Subscription | null = null;
  private dismissTimeout: ReturnType<typeof setTimeout> | null = null;

  ngOnInit(): void {
    this.subscription = this.errorNotificationService.error$.subscribe((error: ErrorNotification | null) => {
      this.currentError = error;
      if (error) {
        this.autoDismissAfterDelay();
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    if (this.dismissTimeout) {
      clearTimeout(this.dismissTimeout);
    }
  }

  /**
   * Ferme la notification après 5 secondes
   */
  private autoDismissAfterDelay(): void {
    // Nettoyez le timer précédent s'il existe
    if (this.dismissTimeout) {
      clearTimeout(this.dismissTimeout);
    }

    this.dismissTimeout = setTimeout(() => {
      this.errorNotificationService.clearError();
      this.dismissTimeout = null;
    }, 5000);
  }

  /**
   * Ferme manuellement la notification
   */
  dismiss(): void {
    if (this.dismissTimeout) {
      clearTimeout(this.dismissTimeout);
      this.dismissTimeout = null;
    }
    this.errorNotificationService.clearError();
  }

  /**
   * Retourne la classe CSS basée sur la sévérité
   */
  getSeverityClass(): string {
    return `notification-${this.currentError?.severity || 'error'}`;
  }
}

