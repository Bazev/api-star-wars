import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../../../models/hero";
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


  constructor(private heroService : HeroService) {
  }

  ngOnInit() : void {
  }


  getRandom(min : number, max : number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  voirDetailsHero(hero :Hero) : void  {
   this.heroService.showHero(hero)
  }


}
