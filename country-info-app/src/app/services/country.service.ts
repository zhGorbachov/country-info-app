import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

export interface Country {
  countryCode: string;
  name: string;
}

export interface Holiday {
  date: string;
  localName: string;
  name: string;
  global: boolean;
  counties?: string[];
  types?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private readonly baseUrl = environment.apiBaseUrl;

  constructor(private readonly http: HttpClient) {}

  getAvailableCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseUrl}/AvailableCountries`);
  }

  getCountryInfo(code: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/CountryInfo/${code}`);
  }

  getPublicHolidays(year: number, code: string): Observable<Holiday[]> {
    return this.http.get<Holiday[]>(`${this.baseUrl}/PublicHolidays/${year}/${code}`);
  }

  getNextPublicHolidays(code: string): Observable<Holiday[]> {
    return this.http.get<Holiday[]>(`${this.baseUrl}/NextPublicHolidays/${code}`);
  }
}
