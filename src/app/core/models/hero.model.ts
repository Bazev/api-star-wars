/**
 * Interface Hero moderne et légère
 * Remplace l'ancienne classe pour une meilleure performance et flexibilité
 */
export interface Hero {
  name: string;
  imageUrl: string;
  url: string;
  films: string[];
  species: string[];
  homeworld: string;
}

/**
 * Factory function pour créer un Hero depuis les données SWAPI
 */
export function createHero(
  name: string,
  imageUrl: string,
  url: string,
  films: string[],
  species: string[],
  homeworld: string
): Hero {
  return {
    name,
    imageUrl,
    url,
    films,
    species,
    homeworld
  };
}

