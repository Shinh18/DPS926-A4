import { Injectable } from '@angular/core';
import { APIResponse } from '../model';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private city: string = '';

  constructor() { }

  setCity(c: string){
    this.city = c;
  }
  getCity(){
    return this.city;
  }
}
