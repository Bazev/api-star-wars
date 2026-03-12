import { Injectable, inject } from '@angular/core';

/**
 * Service Logger centralisé pour logs professionnels
 * Remplace console.log/console.error/console.warn
 * Permet de désactiver les logs en production facilement
 */
@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  private isProduction = false; // À adapter selon l'environnement

  /**
   * Log de debug (développement uniquement)
   */
  debug(message: string, data?: any): void {
    if (!this.isProduction) {
      console.log(`[DEBUG] ${message}`, data);
    }
  }

  /**
   * Log d'information
   */
  info(message: string, data?: any): void {
    console.info(`[INFO] ${message}`, data);
  }

  /**
   * Log d'avertissement
   */
  warn(message: string, data?: any): void {
    console.warn(`[WARN] ${message}`, data);
  }

  /**
   * Log d'erreur
   */
  error(message: string, error?: any): void {
    console.error(`[ERROR] ${message}`, error);
  }
}

