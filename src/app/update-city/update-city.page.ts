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
  //  console.log("type " + typeof(this.loadedCity));
 
   
     // console.log("ID " + id);
      // let tempCity = new City("test name", "test weather", false);
      // let test = new FavCity(id, tempCity );
      // this.fetchCity(id).then(res => {
      //   test = res;
      // })
      // console.log("TEST OBJ" + test.city.name);
      //test = this.storageService.getFav(id);
    
    // if(this.loadedCity) {
    // console.log("City" + this.loadedCity)
    // }
    // this.activatedRoute.paramMap.subscribe(paramMap => {
    //   if (!paramMap.has('_id')){
    //     return;
    //   }
    //   const _id = paramMap.get('_id');
    //   this.fetchCity(_id).then(res => {
    //     console.log("Response " + this.loadedCity);
    //     this.loadedCity = res;
    //   })

    // })

    // if(this.loadedCity) {
    //   console.log("HERE" + this.loadedCity)
    // }
    
    //   console.log("HEREeeee");
    
  }

  async ionViewWillEnter() {
    await this.loadCity();
  }  

  //Show Loading Message
  async presentLoading() {
    //Preparing loading controller
    this.loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await this.loading.present();

  }

  async loadCity() {
    console.log("1");
    await this.presentLoading();
    console.log("2");
    await this.fetchCity();
    console.log("3");
    await this.loading.dismiss();
    console.log("4");
    //this.testfunc();
    // this.testfunc(){
    //   if(this.loadedCity.length>0){
    //     await this.loading.dismiss();
    //   }
    // }
      // this.loadedCity = this.storageService.getFav(this.id);
      // console.log("here " + this.loadedCity.length );
      //  await this.loading.dismiss();
  
    
    console.log("testttttt " + this.loadCity.length);
  }

  // async testfunc(){
  //   this.loadedCity = this.storageService.getFav(this.id);
    
  //   await this.loading.dismiss();
    
  //   console.log("here " + this.loadedCity.length );
  // }
  test(){
    console.log("testt " + this.loadedCity.length );
    console.log(this.loadedCity[0])
  }

  fetchCity() {
    console.log("in fetch");
    this.loadedCity = this.storageService.getFav(this.id);
    // return this.storageService.getFav(this.id).then((res) => {
    //   //  console.log("Fetch res ");
    //       return res;
    // });
  
  }
  // fetchCity(_id: string){
  //   this.loadedCity = this.storageService.getFav(_id).then((res) => {
  //     return res;
  //   });
  // }

  // this.storage.get(this.latUserKey).then((val) => {
  //   console.log(val);
  //     return val; // <--- good result        
  // });
  async updateFav() {
    // console.log(event.detail.value);
    // // this.storageService.updateFav(form.value.visit);
    // // console.log(form.value.visit);
    console.log("in update");
    console.log("before " + this.loadedCity[0].city.visited);
    console.log("hfvhjbvfh " + this.visited);
    this.loadedCity[0].city.visited = this.visited;
    console.log("after " + this.loadedCity[0].city.visited);
    this.storageService.updateFav(this.loadedCity[0]);
    await this.presentToast();
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
    console.log(event.detail.value);
    if(event.detail.value == "yes") {
      console.log("in here");
      this.visited = true;
    }
    else{
      this.visited = false;
    }
  }

  // onSubmit(form: NgForm){
  //   if (form.valid){
  //     this.storageService.updateFav(form.value.visit);
  //     console.log(form.value.visit);
  //   }
  // }
}
