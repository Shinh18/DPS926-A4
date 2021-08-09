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
    const storage = await this.storage.create();
    this._storage = storage;
  }

  //CREATE
  //key: unique id
  //value: city(name, weather, visited)
  public addFav(key: string, value: any) {
    var newFav = new FavCity(key, value);
    this._storage?.set(key, newFav);
    //this.logAllFavs();
  }

  //GET
  public getFav(_id: string) {
    // return await this.storage.get(_id);
    var allFavs: FavCity[] = [];
    console.log("IDDDD " + _id);
    if (this._storage != null) {
      this._storage.forEach((value, key, index) => {
        if(key.localeCompare(_id) === 0) {
          allFavs.push(value as FavCity);
        }  
    });
    }
    return allFavs;
  }

  //UPDATE
  public async updateFav(fc: FavCity) {
   return await this.storage.set(fc._id, fc);
  }

  //DELETE
  public async deleteFav(fc: FavCity) {
    await this._storage.remove(fc._id);
  }

  //GET ALL
  public getAllFavs() {
    var allFavs: FavCity[] = [];
    if (this._storage != null) {
      this._storage.forEach((value, key, index) => {
        allFavs.push(value as FavCity);
    });
    }
    return allFavs;
  }

  //DELETE ALL
  public async deleteAllFavs() {
    await this._storage.clear();
    //this.logAllFavs();
  }

  //LOG ALL
  private logAllFavs() {
    this._storage.forEach((key, value, index) => {
      console.log(key, value, index);
    });
  }
}
