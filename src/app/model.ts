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

export interface FavCity {
    _id: number;
    name: string;
    weather: Weather;
    visited: boolean;
}