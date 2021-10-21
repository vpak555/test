import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Company} from "../../entities/company";
import {TransportService} from "../../services/transport.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private _companies: Array<Company> = new Array<Company>();
  tariffForm!: FormGroup;
  constructor(private transportService: TransportService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.tariffForm = this.fb.group({
      numberOfKilometres: [null, [Validators.required]],
      age: [null, [Validators.required]],
      baggageWeight: [null, [Validators.required]]
    });
  }

  get companies() {
    return this._companies;
  }

  get numberOfKilometres() {
    return this.tariffForm.get('numberOfKilometres');
  }

  get age() {
    return this.tariffForm.get('age');
  }

  get baggageWeight() {
    return this.tariffForm.get('baggageWeight');
  }

  onCalculate() {
    const numberOfKilometres = this.tariffForm.value.numberOfKilometres;
    const age = this.tariffForm.value.age;
    const baggageWeight = this.tariffForm.value.baggageWeight;

    this._companies = this.transportService.getAvailableTariffs(numberOfKilometres, age, baggageWeight);
  }
}
