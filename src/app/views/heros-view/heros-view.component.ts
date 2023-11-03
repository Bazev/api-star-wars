import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../../../models/hero";
import {HeroService} from "../../../service/HeroService";

@Component({
  selector: 'app-heros-view',
  templateUrl: './heros-view.component.html',
  styleUrls: ['./heros-view.component.css']
})
export class HerosViewComponent implements OnInit{

  heroes : Hero[] |undefined;

  constructor(private heroService : HeroService) {
  }

  ngOnInit(): void {
    console.log("affichage des items")
    this.heroes = this.heroService.getHerosList();
  }

}
