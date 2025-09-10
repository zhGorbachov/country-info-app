import { Component, OnInit } from '@angular/core';
import { CountryService, Country, Holiday } from '../../services/country.service';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [
    FormsModule,
    RouterLink,
    NgForOf,
    NgIf
  ],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  countries: Country[] = [];
  filteredCountries: Country[] = [];
  searchTerm: string = '';

  randomCountries: { country: Country; holiday?: Holiday }[] = [];

  constructor(private readonly countryService: CountryService) {}

  ngOnInit(): void {
    this.loadCountries();
  }

  loadCountries(): void {
    this.countryService.getAvailableCountries().subscribe((data) => {
      this.countries = data;
      this.filteredCountries = data;
      this.loadRandomCountries();
    });
  }

  searchCountries(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredCountries = this.countries.filter((c) =>
      c.name.toLowerCase().includes(term)
    );
  }

  loadRandomCountries(): void {
    const shuffled = [...this.countries].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    selected.forEach((country) => {
      this.countryService.getNextPublicHolidays(country.countryCode).subscribe((holidays) => {
        this.randomCountries.push({
          country,
          holiday: holidays.length > 0 ? holidays[0] : undefined
        });
      });
    });
  }
}
