// export interface APIResponse{
//     list: List[];
// }

// export interface List{
//     main: Main;
//     weather: Weather[];
// }

export interface APIResponse {
    main: Main;
    weather: Weather[];
}

export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
}

export class City{
    name: string;
    weather: string;
    visited: boolean;
    constructor(n: string, w: string, v: boolean){
        this.name = n;
        this.weather = w;
        this.visited = v;
    }
}
export class FavCity {
    _id: string;
    city: City

    constructor(id: string, city: City){
        this._id = id;
        this.city = city;
    }
}
