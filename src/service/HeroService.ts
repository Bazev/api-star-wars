import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map, Observable} from "rxjs";
import {Hero} from "../models/hero";
import {Planet} from "../models/planet";
import {HerosViewComponent} from "../app/views/heros-view/heros-view.component";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private apiBaseUrl = "https://swapi.dev/api/people/";
  private pathMapCorrespondanceJson = "./assets/mapCorrespondance.json";
  private heroImageMapping : { [key:string] : string} = {};

  private selectedHeroSubject: BehaviorSubject<Hero | undefined> = new BehaviorSubject<Hero | undefined>(undefined);
  private heros : Hero[] | undefined;



  constructor(private http:HttpClient, private router : Router) {
    this.loadHeroImageMapping()
  }

  setSelectedHero(hero: Hero | undefined): void {
    this.selectedHeroSubject.next(hero);
  }

  getSelectedHero(): Observable<Hero | undefined> {
    return this.selectedHeroSubject.asObservable();
  }

  setHerosList(heros : Hero[]) {
    this.heros = heros;
  }

  getHerosList() : Hero[] {
    if (this.heros == undefined) {
      console.log("heros undefined")
      return [];
    }
      return this.heros;
}


  private loadHeroImageMapping() {
    this.http.get<{[key:string] : string}> (this.pathMapCorrespondanceJson)
      .subscribe(data => {
        this.heroImageMapping = data;
      })
  }


  getHeroes(): Observable<Hero[]> {
    console.log('GET request to '+this.apiBaseUrl)
    return this.http.get<Hero[]>(this.apiBaseUrl)
      .pipe(map(heroes => {
        return this.updateHeroes(heroes);
        })
      );
  }


  updateHeroes(response: any): Hero[] {
    const heroes = response.results;
    return heroes.map((hero: any) => {
      const imageUrl = this.heroImageMapping[hero.name] || '';
        return new Hero(hero.name, imageUrl, hero.url, hero.films, hero.species, hero.homeworld);
      });
  }

  getHomeWorld(url : string): Observable<Planet> {
    return this.http.get<Planet>(url);
  }

  showHero(hero :Hero) : void  {
    console.log("hero selectionne = "+hero.name)
    this.setSelectedHero(hero)
    this.router.navigate(['/hero']);
  }



  getHero(url : string):Observable<Hero> {
    return this.http.get<Hero>(url);
  }

  getHeroById(id : number):Observable<Hero> {
    const  url = `${this.apiBaseUrl}/${id}`;
    return this.http.get<Hero>(url);
  }

}
