import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Film} from "../models/film";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) {
  }


  getFilm(url : string) : Observable<Film> {
    return this.http.get<Film>(url);

  }
}
