import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherApiDataLiveService {

  constructor(private http:HttpClient) { }

  fetchWeather(val:any ){
    let weather= "http://api.openweathermap.org/data/2.5/weather?zip="+val+",IN&appid=3c32df5703303848c777f9d49c7466cb";
    return this.http.get(weather);
  }
}
