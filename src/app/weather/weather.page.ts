import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { WeatherService } from '../service/weather.service';
import { CityService } from '../service/city.service';
import { StorageService } from '../service/storage.service';
import { Weather, Main, City } from '../model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {

  //interface variables
  weather: Weather;
  main: Main;
  city: City;
  //local variables
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

  constructor(private activatedRoute: ActivatedRoute, 
              private router: Router,
              private toastController: ToastController,
              private weatherService: WeatherService,
              private cityService: CityService,
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

  async addFav() {

    let uID = uuidv4();  //unique id for each favourite city
    this.city = new City(this.m_name, this.m_description, false);
    this.storageService.addFav(uID, this.city);
    
    //Toast for Notification
    await this.presentToast();
    //Navigate to Home Page
    this.router.navigate(['/home']);
  }

  async presentToast(){
    const toast = await this.toastController.create({
      color: 'dark',
      duration: 300,
      message: this.m_name + ' added as your favourite',
      keyboardClose: true
    });
    await toast.present();
  }
}
