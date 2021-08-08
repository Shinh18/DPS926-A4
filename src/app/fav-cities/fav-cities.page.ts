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

  constructor(private activatedRoute: ActivatedRoute,
              private alertController: AlertController,
              private router: Router,
              private cityService: CityService,
              private storageService: StorageService) 
  { 
    //this.dbService.databaseConn();
    
  }

  ngOnInit() {
    this.favs = this.storageService.getAllFavs();
  }

  ionViewWillEnter(){
    this.favs = this.storageService.getAllFavs();
  }

  updateFav(fc: FavCity){
    //Navigate to Update Page
    this.router.navigate(['update-city']);
  }

  // async deleteFav(fc: FavCity){
  //   const alert = await this.alertController.create({
  //     header: 'Delete',
  //     message: 'Are you sure you want to remove this city?',
  //     buttons: [{
  //       text: 'Ok',
  //       handler: () => {
  //         this.storageService.deleteFav(fc);
  //         console.log("yes");
  //       }
  //     }, 'Cancel']
  //   });
  //   await alert.present();
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
