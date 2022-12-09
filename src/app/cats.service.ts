import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  API_KEY = 'live_cnlTmK2t9iMi864zh29DVkXA8FoY3CIE0l2gDfEn5nXCvoYIL0ah7Sbon5FJAPW3';
  BASE_URL = 'https://api.thecatapi.com/v1'

  constructor(private http: HttpClient) { }

  getCats(params : any =''): any{
   return this.http.get(`${this.BASE_URL}/images/search?limit=${params}&api_key=${this.API_KEY}`)
  }
  getBreeds(params : any ='breeds'): any{
   return this.http.get(`${this.BASE_URL}/breeds`)
  }

}
