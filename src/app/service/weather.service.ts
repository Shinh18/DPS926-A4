import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather, Main } from '../model';
import { Observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private weather: Weather = {
    id: 0,
    main: '',
    description: '',
    icon: ''
  }

  private main: Main = {
    temp: 0,
    feels_like: 0,
    temp_min: 0,
    temp_max: 0,
    pressure: 0,
    humidity: 0,
  }
  constructor(private httpClient: HttpClient) { }

  getWeatherFromAPI(city: string): Observable<any> {
    return this.httpClient.get<any>('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=c8e94627c333e9e40c9deb8db580e69d');
  }

  setWeather(w: Weather, m:Main){
    // console.log("here local " + w.main);
    this.weather.id = w.id;   
    this.weather.icon = w.icon;
    this.weather.description = w.description;
    this.weather.main = w.main;
    this.main.temp = m.temp
    this.main.feels_like = m.feels_like;
    this.main.temp_min = m.temp_min;
    this.main.temp_max = m.temp_max;
    this.main.pressure = m.pressure;
    this.main.humidity = m.humidity;
  }

  getWeather(){
    return this.weather;
  }

  getMain(){
    return this.main;
  }
}

//http://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//http://api.openweathermap.org/data/2.5/weather?q=brampton&appid=c8e94627c333e9e40c9deb8db580e69d
