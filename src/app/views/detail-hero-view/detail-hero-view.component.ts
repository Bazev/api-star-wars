import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../../../models/hero";
import {HeroService} from "../../../service/HeroService";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail-hero-view',
  templateUrl: './detail-hero-view.component.html',
  styleUrls: ['./detail-hero-view.component.css']
})
export class DetailHeroViewComponent {


  constructor() {
  }



}
