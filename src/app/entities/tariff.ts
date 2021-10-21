
export class Tariff {
  private _title: string;
  private _price: number = 0;
  private _numberOfKM: number;
  private _pricePerKM: number;
  private _baggageWeight: number;
  private _freeBaggageWeight: number = 0;
  private _baggageWeightFee: number = 0;
  private _isBaggageWeightFeePerKG: boolean = false;
  private _age: number;
  private _discountAge: number = 0;
  private _discountPercentage: number = 0;
  private _maxBaggageWeight: number;
  private _isBaggageInDiscount: boolean = false;
  private _currency: string = '₽';

  constructor(
    title: string, numberOfKM: number, age: number,
    baggageWeight: number, pricePerKM: number, maxBaggageWeight: number
  ) {
    this._title = title;
    this._numberOfKM = numberOfKM;
    this._age = age;
    this._baggageWeight = baggageWeight;
    this._pricePerKM = pricePerKM;
    this._maxBaggageWeight = maxBaggageWeight;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  isAvailable() {
    return this._maxBaggageWeight >= this._baggageWeight;
  }

  get price(): number {
    const basePrice = this._pricePerKM * this._numberOfKM;
    this._price = basePrice;

    if(this._baggageWeightFee != 0 && (this._freeBaggageWeight < this._baggageWeight)) {
      if(this._isBaggageWeightFeePerKG) {
        this._price += (this._baggageWeight - this._freeBaggageWeight) * this._baggageWeightFee;
      } else {
        this._price += this._baggageWeightFee;
      }
    }

    if(this._discountAge > this._age) {
      if(!this._isBaggageInDiscount) {
        this._price -= basePrice * this._discountPercentage / 100;
      } else {
        this._price -= this._price * this._discountPercentage / 100;
      }
    }

    return this._price;
  }

  get numberOfKM(): number {
    return this._numberOfKM;
  }

  set numberOfKM(value: number) {
    this._numberOfKM = value;
  }

  get pricePerKM(): number {
    return this._pricePerKM;
  }

  set pricePerKM(value: number) {
    this._pricePerKM = value;
  }

  get baggageWeight(): number {
    return this._baggageWeight;
  }

  set baggageWeight(value: number) {
    this._baggageWeight = value;
  }

  get freeBaggageWeight(): number {
    return this._freeBaggageWeight;
  }

  set freeBaggageWeight(value: number) {
    this._freeBaggageWeight = value;
  }

  get baggageWeightFee(): number {
    return this._baggageWeightFee;
  }

  set baggageWeightFee(value: number) {
    this._baggageWeightFee = value;
  }

  get isBaggageWeightFeePerKG(): boolean {
    return this._isBaggageWeightFeePerKG;
  }

  set isBaggageWeightFeePerKG(value: boolean) {
    this._isBaggageWeightFeePerKG = value;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }

  get discountAge(): number {
    return this._discountAge;
  }

  set discountAge(value: number) {
    this._discountAge = value;
  }

  get discountPercentage(): number {
    return this._discountPercentage;
  }

  set discountPercentage(value: number) {
    this._discountPercentage = value;
  }

  get maxBaggageWeight(): number {
    return this._maxBaggageWeight;
  }

  set maxBaggageWeight(value: number) {
    this._maxBaggageWeight = value;
  }

  get isBaggageInDiscount(): boolean {
    return this._isBaggageInDiscount;
  }

  set isBaggageInDiscount(value: boolean) {
    this._isBaggageInDiscount = value;
  }

  get currency(): string {
    return this._currency;
  }

  set currency(value: string) {
    this._currency = value;
  }
}
