import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../../../models/hero";
import {HeroService} from "../../../service/HeroService";
import {Specie} from "../../../models/specie";
import {SpecieService} from "../../../service/specie-service";
import {Planet} from "../../../models/planet";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  @Input()hero : Hero | undefined;
  specie : Specie | undefined;
  planet : Planet | undefined;

  constructor(private heroService : HeroService, private specieService : SpecieService) {
  }

  ngOnInit(): void {

    if (this.hero == undefined) {
      console.log('Affichage détails')
      this.heroService.getSelectedHero()
        .subscribe((hero) => {
          this.hero = hero;
        });
    }


   if (this.hero && this.hero.species.length > 0) {
     this.specieService.getSpecie(this.hero.species[0])
       .subscribe((specie) => {
         this.specie = specie;
       });
   }

   if (this.hero) {
     console.log("GET request to "+this.hero.homeworld)
     this.heroService.getHomeWorld(this.hero.homeworld)
       .subscribe((planet) => {
         this.planet = planet;
       })
   }


  }



}
