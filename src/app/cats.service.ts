import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFilter } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class CatsService {
  API_KEY =
    'live_cnlTmK2t9iMi864zh29DVkXA8FoY3CIE0l2gDfEn5nXCvoYIL0ah7Sbon5FJAPW3';
  BASE_URL = 'https://api.thecatapi.com/v1';

  constructor(private http: HttpClient) {}

  getCats(params: IFilter): any {
    console.log(params);
    const breedQuery =
      params.breeds && params.breeds.id !== 'all_breeds'
        ? `breed_ids=${params.breeds.id}&`
        : '';
    const url: string = `${this.BASE_URL}/images/search?${breedQuery}limit=${params.limit}&api_key=${this.API_KEY}`;
    return this.http.get(url);
  }
  getBreeds(): any {
    return this.http.get(`${this.BASE_URL}/breeds`);
  }
}
