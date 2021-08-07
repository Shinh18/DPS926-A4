import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavCitiesPageRoutingModule } from './fav-cities-routing.module';

import { FavCitiesPage } from './fav-cities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavCitiesPageRoutingModule
  ],
  declarations: [FavCitiesPage]
})
export class FavCitiesPageModule {}
