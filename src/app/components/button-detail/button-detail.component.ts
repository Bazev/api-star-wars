import {Component, Input} from '@angular/core';
import {HeroService} from "../../../service/HeroService";
import {Router} from "@angular/router";
import {Hero} from "../../../models/hero";

@Component({
  selector: 'app-button-detail',
  templateUrl: './button-detail.component.html',
  styleUrls: ['./button-detail.component.css']
})
export class ButtonDetailComponent {

  @Input() hero : Hero | undefined;

  constructor(private heroService : HeroService, private router : Router) {
  }

  voirDetailsHero(hero: any) {
    console.log("hero selectionne = "+hero.name)
    this.heroService.setSelectedHero(hero)
    this.router.navigate(['/hero']);
  }
}
