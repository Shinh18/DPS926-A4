import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { FavCity } from '../model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storage: Storage | null = null;

  constructor(private storage: Storage) { 
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // key is the date of the task
  //value is the task description
  public addFav(key: string, value: any) {
    var newFav = new FavCity(key, value);
    this._storage?.set(key, newFav);
    this.logAllFavCities();
  }

  private logAllFavCities(){
    console.log("All Cities : ");
    this._storage.forEach((key, value, index) => {
      console.log(key, value, index);
    });
  }

  public getAllFavCities(){
    var alltasks: FavCity[] = [];
    if (this._storage != null){
    this._storage.forEach((value, key, index) => {
      alltasks.push(value as FavCity);
    });
  }
    return alltasks;
  }

  public async deleteAllFavCities(){
    await this._storage.clear();
    this.logAllFavCities();
  }

  public async deleteOneFavCity(fc: FavCity){
    await this._storage.remove(fc._id);
  }

  public async update(fc: FavCity){
    return await this.storage.set(fc._id, fc);
  }
}
