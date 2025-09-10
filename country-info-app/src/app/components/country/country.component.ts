import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService, Holiday } from '../../services/country.service';
import {DatePipe, NgClass, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  imports: [
    NgForOf,
    NgClass,
    NgIf,
    DatePipe
  ],
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  countryCode!: string;
  countryName!: string;
  holidays: Holiday[] = [];
  years: number[] = [];
  selectedYear: number = new Date().getFullYear();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.countryCode = params.get('code') || '';
      this.loadCountryInfo();
      this.loadYears();
      this.loadHolidays(this.selectedYear);
    });
  }

  loadYears(): void {
    this.years = [];
    for (let y = 2020; y <= 2030; y++) {
      this.years.push(y);
    }
  }

  loadCountryInfo(): void {
    this.countryService.getCountryInfo(this.countryCode).subscribe(info => {
      this.countryName = info.commonName || info.officialName || this.countryCode;
    });
  }

  loadHolidays(year: number): void {
    this.selectedYear = year;
    this.countryService.getPublicHolidays(year, this.countryCode).subscribe(data => {
      this.holidays = data;
    });
  }
}
