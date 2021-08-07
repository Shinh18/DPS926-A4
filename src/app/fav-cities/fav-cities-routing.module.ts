import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavCitiesPage } from './fav-cities.page';

const routes: Routes = [
  {
    path: '',
    component: FavCitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavCitiesPageRoutingModule {}
