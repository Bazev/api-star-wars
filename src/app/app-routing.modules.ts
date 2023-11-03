import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./views/home/home.component";
import {NgModule} from "@angular/core";
import {DetailHeroViewComponent} from "./views/detail-hero-view/detail-hero-view.component";
import {HerosViewComponent} from "./views/heros-view/heros-view.component";


const routes : Routes = [
  {path:'',component: HomeComponent},
  {path: 'home', component : HomeComponent},
  {path : 'heros', component : HerosViewComponent},
  {path:'hero', component:DetailHeroViewComponent},


    {path:'**', redirectTo: 'not-found'}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]

}) export class AppRoutingModules { }
