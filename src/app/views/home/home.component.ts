import {Component, OnInit} from '@angular/core';
import {Hero} from "../../../models/hero";
import {HeroService} from "../../../service/HeroService";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  heroes : Hero[] = [];

  constructor(private heroService : HeroService) {
  }
  ngOnInit(): void {
    this.getHeroes();

  }


  getHeroes() {
    this.heroService.getHeroes()
      .subscribe((heros) => {
        this.heroes = heros;
        this.heroService.setHerosList(this.heroes);
      });
  }



}
