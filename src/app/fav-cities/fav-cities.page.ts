import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { CityService } from '../service/city.service';
import { StorageService } from '../service/storage.service';
import { FavCity } from '../model';

@Component({
  selector: 'app-fav-cities',
  templateUrl: './fav-cities.page.html',
  styleUrls: ['./fav-cities.page.scss'],
})
export class FavCitiesPage implements OnInit {

  favs: FavCity[];
  fav: FavCity;
  m_isEmpty: boolean;

  constructor(private activatedRoute: ActivatedRoute,
              private alertController: AlertController,
              private router: Router,
              private cityService: CityService,
              private storageService: StorageService) 
  { 
    this.m_isEmpty == true;
  }

  ngOnInit() {
    this.favs = this.storageService.getAllFavs();
    if(this.favs.length > 0) {
      this.m_isEmpty == false;
    }
    //console.log("Init" + this.favs);
  }

  ionViewWillEnter(){
    this.favs = this.storageService.getAllFavs();
    if(this.favs.length > 0) {
      this.m_isEmpty == false;
    }
    //console.log("ION" + this.favs);
  }

  // updateFav(fc: FavCity){
  //   //Navigate to Update Page
  //   this.router.navigate(['update-city']);
  // }

  deleteAllFavs(){
    this.alertController.create({
      header: 'Confirm',
      message : 'Are sure you want to delete All Cities? ',
      buttons: [{
        text :'Delete',
        handler : ()=>{
          this.storageService.deleteAllFavs();
          this.favs = this.storageService.getAllFavs();
        }
      },'Cancel']
    }).then(alert => {
      alert.present();
    })
    this.m_isEmpty == true;
  }

  deleteFav(fc: FavCity){

    this.alertController.create({
      header: 'Confirm',
      message : 'Are sure you want to remove ' + fc.city.name + ' from favourites?',
      buttons: [{
        text :'Delete',
        handler : ()=>{
          this.storageService.deleteFav(fc);
          this.favs = this.storageService.getAllFavs();
        }
      },'Cancel']
    }).then(alert => {
      alert.present();
    })
  }
}
