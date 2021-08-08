import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { DbService } from '../service/db.service';
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
              private dbService: DbService,
              private cityService: CityService,
              private storageService: StorageService) 
  { 
    //this.dbService.databaseConn();
    
  }

  ngOnInit() {
    this.favs = this.storageService.getAllFavCities();
    //this.cityService.setFavCity();
    // this.fav = this.cityService.getFavCity();
    // this.fav._id = 1;
    // this.fav.name = 'test';
    // this.fav.visited = true;
    // this.fav.weather = 'cloud';
    // this.favList.push(this.fav);
    //this.dbService.getFavCities();
    // this.activatedRoute.paramMap.subscribe(paramMap => { 

    //   //get all cities from table
    //   console.log("enter page")
    //   this.dbService.().then((res) => {
    //     this.favList = res;
    //     console.log(res);
    //   })

    // })
  }

  ionViewWillEnter(){
    this.favs = this.storageService.getAllFavCities();
  }


  // ionViewDidEnter() {  
  //  // this.dbService.getAll();
  // }
   

  update(){
    console.log("update");
    this.router.navigate(['update-city']);
  }

  async removeFromFav(city: FavCity){
    const alert = await this.alertController.create({
      header: 'Delete',
      message: 'Are you sure you want to remove this city?',
      buttons: [{
        text: 'Ok',
        handler: () => {
         // this.dbService.delete(city._id);
          // this.orderService.removeItem(pz);
          console.log("yes");
        }
      }, 'Cancel']
    });
    await alert.present();
  }


  deleteAll(){

    this.alertController.create({
      header: 'Danger!!!',
      message : 'Are sure you want to delete ALL TASKS?? ',
      buttons: [{
        text :'delete',
        handler : ()=>{
          this.storageService.deleteAllFavCities();
          this.favs = this.storageService.getAllFavCities();
        }
      },'Cancel']

    }).then(alert => {
      alert.present();
    })
  }

  deleteTask(taskToDelete: FavCity){

    this.alertController.create({
      header: 'Danger!!!',
      message : 'Are sure you want to delete?? ',
      buttons: [{
        text :'delete',
        handler : ()=>{
          this.storageService.deleteOneFavCity(taskToDelete);
          this.favs = this.storageService.getAllFavCities();
        }
      },'Cancel']

    }).then(alert => {
      alert.present();
    })

  }

}
