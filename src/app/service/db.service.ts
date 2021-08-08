import { Injectable } from '@angular/core';
// import { Platform } from '@ionic/angular';
// import { HttpClient } from '@angular/common/http';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
// import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { FavCity } from '../model';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  
  // //GUYSS ASSIGNMENTTTT
  // private dbInstance: SQLiteObject;
  // //favCitiesList = new BehaviorSubject([]);
  // //private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  // constructor(private platform: Platform, 
  //             private sqlite: SQLite) 
  // { 
  //   this.platform.ready().then(() => {
  //     this.sqlite.create({
  //       name: 'favCities_db.db',
  //       location: 'default'
  //     }) 
  //     .then((db: SQLiteObject) => {
  //         this.dbInstance = db;
          
  //         //Create table if it doesn't exist
  //         this.dbInstance.executeSql(
  //           `CREATE TABLE IF NOT EXISTS favCitiesTable(
  //             _id INTEGER PRIMARY KEY AUTOINCREMENT,
  //             name TEXT NOT NULL,
  //             weather TEXT NOT NULL, 
  //             visited BOOLEAN DEFAULT FALSE NOT NULL
  //           );`
  //         ).then(
  //           res => {
  //             console.log(res);
  //           }
  //         )
  //     });
  //   });
  // }

  // //Get favourite cities from database
  // async getFavCities(): Promise<FavCity[]>{
  //   let favCitiesList: FavCity[] = [];
  //   this.dbInstance.executeSql('SELECT * FROM favCitiesTable', []).then(res => {
  //     if(res.rows.length > 0){
  //       for(var i = 0; i < res.rows.length; i++){
  //         favCitiesList.push({
  //           _id: res.rows.item(i).id,
  //           name: res.rows.item(i).name,
  //           weather: res.rows.item(i).weather,
  //           visited: res.rows.item(i).visited
  //         });
  //       }
  //     }
  //   });
  //   return favCitiesList;
  // }

  // //Insert
  // async addFavCity(name: string, weather: string, visited: boolean): Promise<any>{
  //   console.log("insert");
  //   this.dbInstance.executeSql('INSERT INTO favCitiesTable (name, weather, visited) VALUES(?, ?, ?)', [name, weather, visited])
  //     .catch(e => console.log("Insert err" + e));
  // }

  // //Update
  // async updateFavCity(_id: any, fav: FavCity): Promise<any>{
  //   console.log("update");
  //   this.dbInstance.executeSql(`UPDATE favCitiesTable SET visited = ? WHERE _id = ${_id}`, [fav.visited])
  //     .catch(e => console.log("update err" + e));
  // } 

  // //Delete
  // async deleteFavCity(_id: any, fav: FavCity): Promise<any>{
  //   console.log("delete");
  //   this.dbInstance.executeSql('DELETE FROM favCitiesTable WHERE _id = ?', [_id])
  //     .catch(e => console.log("delete err" + e));
  // } 


  // //https://www.remotestack.io/ionic-sqlite-database-crud-offline-mobile-app-tutorial/
  // // private dbInstance: SQLiteObject;
  // // readonly db_name: string = "favCities_db.db";
  // // readonly db_table: string = "favCitiesTable";
  // // FAVCITIES: Array <any> ;

  // // constructor(
  // //   private platform: Platform,
  // //   private sqlite: SQLite    
  // // ) { 
  // //   this.databaseConn();
  // // }

  // // Create SQLite database 
  // databaseConn() {
  //   this.platform.ready().then(() => {
  //     this.sqlite.create({
  //         name: this.db_name,
  //         location: 'default'
  //       }).then((sqLite: SQLiteObject) => {
  //         this.dbInstance = sqLite;
  //         sqLite.executeSql(`
  //             CREATE TABLE IF NOT EXISTS ${this.db_table} (
  //               _id INTEGER PRIMARY KEY AUTOINCREMENT,
  //               name TEXT NOT NULL,
  //               weather TEXT NOT NULL, 
  //               visited BOOLEAN DEFAULT FALSE NOT NULL
  //             )`, [])
  //           .then((res) => {
  //             // alert(JSON.stringify(res));
  //           })
  //           .catch((error) => alert(JSON.stringify(error)));
  //       })
  //       .catch((error) => alert(JSON.stringify(error)));
  //   });   
  // }

  // public add(name: string, weather: string, visited: boolean) {
  //   // // validation
  //   // if (!n.length || !e.length) { 
  //   //   alert('Provide both email & name');
  //   //   return;
  //   // }
  //   this.dbInstance.executeSql(`
  //   INSERT INTO ${this.db_table} (name, weather, visited) VALUES ('${name}', '${weather}', '${visited}')`, [])
  //     .then(() => {
  //       alert("Success");
  //       this.getAll();
  //     }, (e) => {
  //       alert(JSON.stringify(e.err));
  //     });
  // }

  // getAll() {
  //   return this.dbInstance.executeSql(`SELECT * FROM ${this.db_table}`, []).then((res) => {
  //     this.FAVCITIES = [];
  //     if (res.rows.length > 0) {
  //       for (var i = 0; i < res.rows.length; i++) {
  //         this.FAVCITIES.push(res.rows.item(i));
  //       }
  //       return this.FAVCITIES;
  //     }
  //   },(e) => {
  //     alert(JSON.stringify(e));
  //   });
  // }

  // update(_id: any, visited: boolean) {
  //   let data = [_id, visited];
  //     return this.dbInstance.executeSql(`UPDATE ${this.db_table} SET visited = ? WHERE _id = ${_id}`, data)
  // }  

  // delete(_id: any) {
  //   this.dbInstance.executeSql(`
  //   DELETE FROM ${this.db_table} WHERE _id = ${_id}`, [])
  //     .then(() => {
  //       alert("City deleted!");
  //       this.getAll();
  //     })
  //     .catch(e => {
  //       alert(JSON.stringify(e))
  //     });
  // }
}
