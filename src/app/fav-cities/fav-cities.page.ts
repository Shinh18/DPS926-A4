import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fav-cities',
  templateUrl: './fav-cities.page.html',
  styleUrls: ['./fav-cities.page.scss'],
})
export class FavCitiesPage implements OnInit {

  constructor(private alertController: AlertController,
              private router: Router) { }

  ngOnInit() {
  }

  update(){
    console.log("update");
    this.router.navigate(['update-city']);
  }

  async removeFromFav(){
    const alert = await this.alertController.create({
      header: 'Delete',
      message: 'Do you want to remove this city as one of your favourite city?',
      buttons: [{
        text: 'Yes',
        handler: () => {
          // this.orderService.removeItem(pz);
          console.log("yes");
        }
      }, 'No']
    });
    await alert.present();
  }



}
