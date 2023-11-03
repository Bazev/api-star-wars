import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {HeroService} from "../../../service/HeroService";
import {FilmService} from "../../../service/film-service";
import {Hero} from "../../../models/hero";
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {Film} from "../../../models/film";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css'],
  imports: [MatTableModule, MatSortModule, NgIf],
  standalone: true
})
export class TableauComponent implements AfterViewInit{

  films : Array<Film> = [];
  hero : Hero | undefined;
  displayedColumns: string[] = ['episode_id', 'title', 'release_date'];
  dataSource = new MatTableDataSource<Film>(this.films);

  constructor(private heroService : HeroService, private filmService : FilmService, private _liveAnnouncer: LiveAnnouncer) {

    this.heroService.getSelectedHero().subscribe((hero) =>{
      this.hero = hero;
    })

    this.loadFilms();
  }

  @ViewChild(MatSort) sort: MatSort | undefined;
  ngAfterViewInit() {
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }

  loadFilms() {

    if (this.hero) {
      for (const  url of this.hero.films) {
        const film = this.filmService.getFilm(url).subscribe((film) => {
          this.films.push(film);
          this.dataSource.data = this.films;
        });
      }
    }
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
