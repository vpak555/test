import {Tariff} from "./tariff";

export class Company {

  private _name: string;
  private _tariffs: Array<Tariff> = new Array<Tariff>();

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get tariffs(): Array<Tariff> {
    return this._tariffs;
  }

  set tariffs(value: Array<Tariff>) {
    this._tariffs = value;
  }

  addTariff(tariff: Tariff) {
    this._tariffs.push(tariff);
  }
}
