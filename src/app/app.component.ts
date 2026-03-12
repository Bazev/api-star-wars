import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ErrorNotificationComponent } from './components/error-notification/error-notification.component';
import { HeaderComponent } from './components/header/header.component';

/**
 * Composant racine standalone de l'application
 * - Utilise OnPush pour optimiser la détection de changement
 * - Composant 100% standalone sans NgModule
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ErrorNotificationComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'star-wars';
}
