import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'weather',
    loadChildren: () => import('./weather/weather.module').then( m => m.WeatherPageModule)
  },
  {
    path: 'fav-cities',
    children : [
      {
        path :'',
        loadChildren: () => import('./fav-cities/fav-cities.module').then( m => m.FavCitiesPageModule)
      },
      {
        path: ':_id',
        loadChildren: () => import('./update-city/update-city.module').then( m => m.UpdateCityPageModule)
      }
    ]
    
  }
  // {
  //   path: 'update-city',
  //   loadChildren: () => import('./update-city/update-city.module').then( m => m.UpdateCityPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
