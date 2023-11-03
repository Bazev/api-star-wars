

export class Planet {

  private _name : string;
  private _terrain : string;
  private _climate : string;
  private _population : string;



  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get terrain(): string {
    return this._terrain;
  }

  set terrain(value: string) {
    this._terrain = value;
  }

  get climate(): string {
    return this._climate;
  }

  set climate(value: string) {
    this._climate = value;
  }

  get population(): string {
    return this._population;
  }

  set population(value: string) {
    this._population = value;
  }


  constructor(name: string, terrain: string, climate: string, population: string) {
    this._name = name;
    this._terrain = terrain;
    this._climate = climate;
    this._population = population;
  }
}
