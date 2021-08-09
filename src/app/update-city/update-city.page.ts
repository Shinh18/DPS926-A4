import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { StorageService } from '../service/storage.service';
import { FavCity } from '../model';

@Component({
  selector: 'app-update-city',
  templateUrl: './update-city.page.html',
  styleUrls: ['./update-city.page.scss'],
})
export class UpdateCityPage implements OnInit {

  loadedCity: FavCity[] = [];
  id: string 
  loading: any;
  visited: boolean;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private loadingController: LoadingController,
              private toastController: ToastController,
              private storageService: StorageService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(async paramMap => {
      if (!paramMap.has('_id')){
        return;
      }
      this.id = paramMap.get('_id');
    });
  }

  async ionViewWillEnter() {
    await this.loadCity();
  }  

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await this.loading.present();
  }

  async loadCity() {
    await this.presentLoading();
    await this.fetchCity();
    await this.loading.dismiss();
  }

  fetchCity() {
    this.loadedCity = this.storageService.getFav(this.id);
  }

  async updateFav() {
    this.loadedCity[0].city.visited = this.visited;
    this.storageService.updateFav(this.loadedCity[0]);

    //Show Notification Toaste
    await this.presentToast();

    //Navigate to Fav Cities Page
    this.router.navigate(['/fav-cities']);
  }

  async presentToast(){
    const toast = await this.toastController.create({
      color: 'dark',
      duration: 300,
      message: 'Updated your visit',
      keyboardClose: true
    });
    await toast.present();
  }

  selectVisit(event) {
    if(event.detail.value == "yes") {
      this.visited = true;
    }
    else{
      this.visited = false;
    }
  }
}
