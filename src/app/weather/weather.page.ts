import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from '../service/weather.service';
import { CityService } from '../service/city.service';
import { DbService } from '../service/db.service';
import { StorageService } from '../service/storage.service';
import { Weather, Main, City } from '../model';
import { v4 as uuidv4 } from 'uuid';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {

  weather: Weather;
  main: Main;
  city: City;
  m_id: number;
  m_main: string;
  m_description: string;
  m_icon: string;
  m_name: string;
  m_temp: number;
  m_feels_like: number;
  m_temp_min: number;
  m_temp_max: number;
  m_pressure: number;
  m_humidity: number;
  m_imgUrl: string;
  m_fid: number;

  constructor(private activatedRoute: ActivatedRoute, 
              private router: Router,
              private weatherService: WeatherService,
              private cityService: CityService,
              private dbService: DbService,
              private storageService: StorageService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => { 
      this.weather = this.weatherService.getWeather();
      this.main = this.weatherService.getMain();
      this.m_name = this.cityService.getCity();
      this.m_id = this.weather.id;
      this.m_main = this.weather.main;
      this.m_description = this.weather.description;
      this.m_icon = this.weather.icon;
      this.m_temp = this.main.temp;
      this.m_feels_like = this.main.feels_like;
      this.m_temp_min = this.main.temp_min;
      this.m_temp_max = this.main.temp_max;
      this.m_pressure = this.main.pressure;
      this.m_humidity = this.main.humidity;
      this.m_imgUrl = "http://openweathermap.org/img/w/" + this.m_icon + ".png";
    })
  }

  addToFav(){
    console.log("works");
    let temp = uuidv4();
    this.city = new City(this.m_name, this.m_main, false);
    this.storageService.addFav(temp, this.city);
    //Add toast for notification
    this.router.navigate(['/home']);
    //{string: name, string: weather, boolean: visited}
   // this.dbService.addFavCity(this.m_name, this.m_main, false);
  }
}
