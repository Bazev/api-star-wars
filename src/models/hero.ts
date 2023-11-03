


export class Hero {

  private _name:string;
  private _imageUrl :string;
  private _url : string;
  private _films: string[];
  private _species: string[];
  private _homeworld : string;


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }


  get imageUrl(): string {
    return this._imageUrl;
  }

  set imageUrl(value: string) {
    this._imageUrl = value;
  }


  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }


  get films(): string[] {
    return this._films;
  }

  set films(value: string[]) {
    this._films = value;
  }


  get species(): string[] {
    return this._species;
  }

  set species(value: string[]) {
    this._species = value;
  }


  get homeworld(): string {
    return this._homeworld;
  }

  set homeworld(value: string) {
    this._homeworld = value;
  }


  constructor(name: string, imageUrl: string, url: string, films: string[], species: string[], homeworld: string) {
    this._name = name;
    this._imageUrl = imageUrl;
    this._url = url;
    this._films = films;
    this._species = species;
    this._homeworld = homeworld;
  }
}
