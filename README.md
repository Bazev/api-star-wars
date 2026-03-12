# 🚀 Guide de Démarrage Rapide - Angular 19 Star Wars API

## 📦 Installation

```bash
# Cloner ou accéder au répertoire du projet
cd api-star-wars

# Installer les dépendances (Angular 19, Material 19, etc.)
npm install

# ⏳ Attendre environ 2-3 minutes selon la connexion
```

## 🏃 Lancer l'Application

```bash
# Mode développement avec watch
npm start

# L'application s'ouvre automatiquement à http://localhost:4200/
```

## 🎯 Fonctionnalités

### 🏠 Page d'Accueil (`/home`)
- **Carousel** : 3 personnages Star Wars aléatoires
- **Auto-chargement** : Liste complète des héros depuis SWAPI
- **Clic sur un héro** : Navigue vers les détails

### 📋 Liste des Héros (`/heros`)
- **Affiche** : Tous les personnages du premier film Star Wars
- **Images** : Mappées depuis `/assets/mapCorrespondance.json`
- **Sélection** : Clic pour voir les détails

### 🔍 Détails du Héro (`/hero`)
- **Informations** : Nom, image, lien SWAPI
- **Espèce** : Récupérée depuis l'API
- **Planète natale** : Avec climat, terrain, population
- **Filmographie** : Tableau Material avec tri des films

## 🛠️ Build & Production

```bash
# Build optimisé pour production
npm run build:prod

# Résultat dans le dossier dist/
# Servir avec ng serve ou déployer vers un hébergement
```

## 🧪 Tests

```bash
# Lancer les tests unitaires
npm test

# Exécute les tests avec Jasmine/Karma
```

## 📁 Structure du Projet

```
src/
├── app/
│   ├── core/              # Services, modèles, intercepteurs
│   │   ├── models/        # Interfaces Hero, Planet, Film, etc.
│   │   ├── services/      # HeroService, SpecieService, FilmService
│   │   ├── interceptors/  # HttpErrorInterceptor
│   │   └── error/         # GlobalErrorHandler
│   ├── components/        # Composants réutilisables (standalone)
│   │   ├── header/
│   │   ├── caroussel/
│   │   ├── card/
│   │   ├── button-detail/
│   │   ├── tableau_films/
│   │   └── error-notification/
│   ├── views/             # Pages (standalone)
│   │   ├── home/
│   │   ├── heros-view/
│   │   └── detail-hero-view/
│   ├── app.routes.ts      # Routes fonctionnelles
│   ├── app.config.ts      # Configuration globale
│   └── app.component.ts   # Composant racine
├── assets/
│   ├── mapCorrespondance.json    # Mapping images héros
│   └── pictures/                  # Images des personnages
└── styles.css             # Styles globaux
```

## 🔌 API Utilisée

**SWAPI - The Star Wars API**
- URL: `https://swapi.dev/api/`
- Endpoints utilisés:
  - `/people/` - Liste des personnages
  - `/films/{id}/` - Détails des films
  - `/species/{id}/` - Espèces
  - `/planets/{id}/` - Planètes
- Aucune clé API requise
- Retry automatique en cas d'erreur

## ⚙️ Configuration

### Environment Variables
Aucune variable d'environnement nécessaire pour le développement.

### Material Theme
- Thème: Indigo/Pink (par défaut Angular Material)
- Animations: Activées via `provideAnimations()`

### API Base URL
```typescript
// src/app/core/services/hero.service.ts
private readonly apiBaseUrl = 'https://swapi.dev/api/people/';
```

## 🐛 Gestion des Erreurs

L'application affiche automatiquement:
- ❌ Erreurs réseau avec message clair
- ❌ Erreurs serveur (500, 503)
- ❌ Requêtes échouées (404)
- ✅ Retry automatique pour les erreurs réseau

Les erreurs s'affichent dans une notification en haut à droite.

## 📊 Versions

```
Angular:     19.0.0 ✅
TypeScript:  5.6.0 ✅
Material:    19.0.0 ✅
RxJS:        7.8.1 ✅
Bootstrap:   5.3.2 ✅
Node.js:     18+ (requis)
npm:         9+ (requis)
```

## 🎨 Navigation

```
http://localhost:4200/
    ↓
http://localhost:4200/home          (Page d'accueil)
    ↓
http://localhost:4200/heros         (Liste des héros)
    ↓
http://localhost:4200/hero          (Détails du héro sélectionné)
```

## 🔗 Liens Rapides

- [Angular Documentation](https://angular.io/)
- [SWAPI Documentation](https://swapi.dev/)
- [Material Components](https://material.angular.io/components/table/overview)
- [RxJS Operators](https://rxjs.dev/guide/operators)

## 🚨 Dépannage

### "npm install" échoue
```bash
# Effacer le cache npm
npm cache clean --force

# Réessayer l'installation
npm install
```

### Erreur de compilation TypeScript
```bash
# Vérifier que TypeScript est correct
npx tsc --version

# Recompiler
ng build
```

### L'API ne répond pas
- Vérifier la connexion Internet
- L'API SWAPI peut être temporairement indisponible
- L'application affiche une notification d'erreur
- Retry automatique toutes les secondes

### Port 4200 déjà utilisé
```bash
# Utiliser un port différent
ng serve --port 4201
```

## 💡 Points Clés de l'Architecture

1. **Standalone Components** - Tous les composants sont standalone
2. **Functional Routing** - Routes configurées comme array fonctionnel
3. **Error Handling** - Centralisé avec GlobalErrorHandler + Interceptor
4. **Reactive** - RxJS avec shareReplay pour le cache
5. **Typed** - TypeScript strict partout, pas de `any`
6. **Performance** - OnPush detection, lazy loading images

## 📚 Documentation Additionnelle

- **README_MIGRATION.md** - Détails complets de la migration
- **BEST_PRACTICES.md** - Bonnes pratiques Angular appliquées
- **MIGRATION_CHECKLIST.md** - Checklist complète du projet

## 👨‍💻 Pour les Recruteurs

Ce projet démontre:
- ✅ Compétences Angular avancées (v19)
- ✅ Architecture moderne (standalone components)
- ✅ Gestion d'état réactive (RxJS)
- ✅ Gestion d'erreur robuste
- ✅ Typage TypeScript strict
- ✅ Material Design integration
- ✅ Bonnes pratiques de code
- ✅ Documentation professionnelle

## 🎯 Prochaines Étapes

1. **Améliorer les tests** - Ajouter des tests unitaires complets
2. **Lazy loading** - Charger les routes à la demande
3. **Caching** - Service Worker pour offline support
4. **Pagination** - API SWAPI supporte la pagination
5. **Recherche** - Filtrer les héros par nom/espèce
6. **Animations** - Transitions fluides entre pages

---

**Version:** 1.0.0 (Angular 19)  
**Dernière mise à jour:** 12/03/2026  
**Auteur:** Evan Bazin

