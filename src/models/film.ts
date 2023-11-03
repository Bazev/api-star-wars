export class Film {

  private _title : string;
  private _episode_id : number;
  private _opening_crawl : string;
  private _director : string;
  private _producer : string;
  private _release_date : string;


  constructor(title: string, episode_id: number, opening_crawl: string, director: string, producer: string, release_date: string) {
    this._title = title;
    this._episode_id = episode_id;
    this._opening_crawl = opening_crawl;
    this._director = director;
    this._producer = producer;
    this._release_date = release_date;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get episode_id(): number {
    return this._episode_id;
  }

  set episode_id(value: number) {
    this._episode_id = value;
  }

  get opening_crawl(): string {
    return this._opening_crawl;
  }

  set opening_crawl(value: string) {
    this._opening_crawl = value;
  }

  get director(): string {
    return this._director;
  }

  set director(value: string) {
    this._director = value;
  }

  get producer(): string {
    return this._producer;
  }

  set producer(value: string) {
    this._producer = value;
  }

  get release_date(): string {
    return this._release_date;
  }

  set release_date(value: string) {
    this._release_date = value;
  }
}
