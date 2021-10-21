import {Injectable} from '@angular/core';
import {Tariff} from "../entities/tariff";
import {Company} from "../entities/company";

@Injectable({
  providedIn: 'root'
})

export class TransportService {

  constructor() {}

  getAvailableTariffs(numberOfKM: number, age: number, baggageWeight: number) {
    const companies = new Array<Company>();

    const aeroflotEconomy = new Tariff('Эконом', numberOfKM, age, baggageWeight, 4, 20);
    aeroflotEconomy.freeBaggageWeight = 5;
    aeroflotEconomy.baggageWeightFee = 4000;

    const aeroflotAdvanced = new Tariff('Продвинутый', numberOfKM, age, baggageWeight, 8, 50);
    aeroflotAdvanced.freeBaggageWeight = 20;
    aeroflotAdvanced.baggageWeightFee = 5000;
    aeroflotAdvanced.discountAge = 7;
    aeroflotAdvanced.discountPercentage = 30;

    const aeroflotLux = new Tariff('Люкс', numberOfKM, age, baggageWeight, 15, 50);
    aeroflotLux.discountAge = 16;
    aeroflotLux.discountPercentage = 30;

    const aeroflot = new Company('Аэрофлот');

    if(aeroflotEconomy.isAvailable())
      aeroflot.addTariff(aeroflotEconomy);

    if(aeroflotAdvanced.isAvailable())
      aeroflot.addTariff(aeroflotAdvanced);

    if(aeroflotLux.isAvailable())
      aeroflot.addTariff(aeroflotLux);

    const rjdEconomy = new Tariff('Эконом', numberOfKM, age, baggageWeight, 0.5, 50);
    rjdEconomy.freeBaggageWeight = 15;
    rjdEconomy.isBaggageWeightFeePerKG = true;
    rjdEconomy.baggageWeightFee = 50;
    rjdEconomy.discountAge = 5;
    rjdEconomy.discountPercentage = 50;

    const rjdAdvanced = new Tariff('Продвинутый', numberOfKM, age, baggageWeight, 2, 60);
    rjdAdvanced.freeBaggageWeight = 20;
    rjdAdvanced.isBaggageWeightFeePerKG = true;
    rjdAdvanced.baggageWeightFee = 50;
    rjdAdvanced.discountAge = 8;
    rjdAdvanced.discountPercentage = 30;

    const rjdLux = new Tariff('Люкс', numberOfKM, age, baggageWeight, 4, 60);
    rjdLux.discountAge = 16;
    rjdLux.discountPercentage = 20;
    rjdLux.isBaggageInDiscount = true;

    const rjd = new Company('РЖД');

    if(rjdEconomy.isAvailable())
      rjd.addTariff(rjdEconomy);

    if(rjdAdvanced.isAvailable())
      rjd.addTariff(rjdAdvanced);

    if(rjdLux.isAvailable())
      rjd.addTariff(rjdLux);

    companies.push(aeroflot);
    companies.push(rjd);

    return companies;
  }
}
