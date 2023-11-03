import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../../../models/hero";
import { Router} from "@angular/router";
import {HeroService} from "../../../service/HeroService";

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.css']
})
export class CarousselComponent implements OnInit {

  @Input() heroes : Hero[] = [];


  index1 = this.getRandom(0,9);
  index2 = this.getRandom(0,9);
  index3 = this.getRandom(0,9);


  constructor(private router : Router, private heroService : HeroService) {
  }

  ngOnInit() : void {
    console.log("récupération des id :"+this.index1, this.index2, this.index3)
  }



  getRandom(min : number, max : number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  voirDetailsHero(hero :Hero) : void  {
    console.log("hero selectionne = "+hero.name)
    this.heroService.setSelectedHero(hero)
    this.router.navigate(['/hero']);


  }



}
