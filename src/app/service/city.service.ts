import { Injectable } from '@angular/core';
import { APIResponse, FavCity } from '../model';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private city: string = '';
  private favCity: FavCity = {
    _id: '',
    city : {
      name: '',
      weather: '',
      visited: false
    }
   
  }
 
  constructor() { }

  setCity(c: string){
    this.city = c;
  }

  getCity(){
    return this.city;
  }

  setFavCity(f: FavCity){
    this.favCity._id = f._id;
    this.favCity.city = f.city;
  }

  getFavCity(){
    return this.favCity;
  }
}
