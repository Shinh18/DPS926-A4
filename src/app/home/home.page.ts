import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { WeatherService } from '../service/weather.service';
import { CityService } from '../service/city.service';
import { APIResponse, Weather, Main } from '../model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  apiResponse: APIResponse;
  //currentWeather: List;
  // weather: Weather;
  cityName: string;

  constructor(private router: Router,
              private alertController: AlertController,
              private weatherService: WeatherService,
              private cityService: CityService) {}

  async wrongCity(){
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Wrong city entered. Try again.',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.cityName=" ";
        }
      }]
    });
    await alert.present();
  }

  async nullCity(){
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Please enter city to find weather',
      buttons: [{
        text: 'OK'
      }]
    });
    await alert.present();
  }

  onSubmit(form: NgForm){

    if (form.valid){
      this.weatherService.getWeatherFromAPI(form.value.city)
        .subscribe(response => {
          console.log(response);
          this.apiResponse = response;

          console.log(this.apiResponse.weather);
          form.value.city = form.value.city[0].toUpperCase() + form.value.city.substr(1).toLowerCase();
          this.cityService.setCity(form.value.city);
          this.weatherService.setWeather(this.apiResponse.weather[0], this.apiResponse.main);
          console.log("local weather" + this.weatherService.getWeather());
          this.router.navigate(['/weather']);
          },
          (err) => {
            this.wrongCity()
          }
        );
    }
    else{
      this.nullCity();
      
    }
  }

  ionViewWillEnter() {
    this.cityName = "";
  }
}
